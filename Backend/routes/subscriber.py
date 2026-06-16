from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..database import get_db
from ..models.subscriber import Subscriber
from ..schemas.subscriber import SubscribeCreate, MessageOut

router = APIRouter(prefix="/subscribe", tags=["Newsletter"])


@router.post(
    "",
    response_model=MessageOut,
    status_code=status.HTTP_201_CREATED,
    summary="Subscribe to newsletter",
)
async def subscribe(
    payload: SubscribeCreate,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    result = await db.execute(
        select(Subscriber).where(Subscriber.email == payload.email)
    )
    existing = result.scalar_one_or_none()

    if existing:
        if existing.is_active:
            return MessageOut(
                success=True,
                message="You're already subscribed! We'll keep you updated.",
            )
        # Re-activate if previously unsubscribed
        existing.is_active = True
        await db.commit()
        return MessageOut(
            success=True,
            message="Welcome back! You've been re-subscribed.",
        )

    record = Subscriber(email=payload.email)
    db.add(record)

    try:
        await db.commit()
    except Exception as exc:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not complete subscription. Please try again.",
        ) from exc

    return MessageOut(
        success=True,
        message="Subscribed! You'll receive our latest articles and updates.",
    )


@router.delete(
    "/{email}",
    response_model=MessageOut,
    summary="Unsubscribe from newsletter",
)
async def unsubscribe(
    email: str,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    result = await db.execute(
        select(Subscriber).where(Subscriber.email == email)
    )
    record = result.scalar_one_or_none()

    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Email not found in subscriber list.",
        )

    record.is_active = False
    await db.commit()

    return MessageOut(success=True, message="You've been unsubscribed.")
