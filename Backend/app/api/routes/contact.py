from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from ...database.session import get_db
from ...schemas.contact import ContactCreate, MessageOut
from ...services.contact_service import save_contact
from ...core.email import send_contact_notification

router = APIRouter()


@router.post(
    "/contact",
    response_model=MessageOut,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact form",
    description=(
        "Accepts submissions from both Contact.jsx and ContextualForm.jsx. "
        "ContextualForm formats its contextual fields into the message string "
        "before posting, so both forms send the same { name, email, message } shape."
    ),
)
async def submit_contact(
    payload: ContactCreate,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    try:
        await save_contact(db, payload)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not save your message. Please try again.",
        ) from exc

    # Fire-and-forget — email failure never breaks the response
    await send_contact_notification(
        name=payload.name,
        email=payload.email,
        message=payload.message,
    )

    return MessageOut(
        success=True,
        message="Thank you! We'll get back to you within one business day.",
    )