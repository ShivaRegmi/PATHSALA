from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List

from ..database import get_db
from ..models.contact import ContactMessage
from ..schemas.contact import ContactCreate, ContactResponse, MessageOut
from ..services.email import send_contact_notification

router = APIRouter(prefix="/contact", tags=["Contact"])


@router.post(
    "",
    response_model=MessageOut,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact form",
)
async def submit_contact(
    payload: ContactCreate,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    record = ContactMessage(
        name=payload.name,
        email=payload.email,
        message=payload.message,
    )
    db.add(record)

    try:
        await db.commit()
        await db.refresh(record)
    except Exception as exc:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not save your message. Please try again.",
        ) from exc

    await send_contact_notification(
        name=payload.name,
        email=payload.email,
        message=payload.message,
    )

    return MessageOut(
        success=True,
        message="Thank you! We'll get back to you within one business day.",
    )


@router.get(
    "",
    response_model=List[ContactResponse],
    summary="List all contact messages (admin)",
)
async def list_contacts(
    skip: int = 0,
    limit: int = 50,
    db: AsyncSession = Depends(get_db),
) -> List[ContactResponse]:
    result = await db.execute(
        select(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .offset(skip)
        .limit(limit)
    )
    return result.scalars().all()


@router.delete(
    "/{message_id}",
    response_model=MessageOut,
    summary="Delete a contact message (admin)",
)
async def delete_contact(
    message_id: int,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    result = await db.execute(
        select(ContactMessage).where(ContactMessage.id == message_id)
    )
    record = result.scalar_one_or_none()

    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message not found.",
        )

    await db.delete(record)
    await db.commit()

    return MessageOut(success=True, message="Message deleted.")
