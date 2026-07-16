from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from ...database.session import get_db
from ...schemas.subscriber import SubscribeCreate, MessageOut
from ...services.subscriber_service import subscribe_email, unsubscribe_email

router = APIRouter()


@router.post(
    "/subscribe",
    response_model=MessageOut,
    status_code=status.HTTP_201_CREATED,
    summary="Subscribe to newsletter",
)
async def subscribe(
    payload: SubscribeCreate,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    try:
        result = await subscribe_email(db, payload.email)
        return MessageOut(**result)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Could not complete subscription. Please try again.",
        ) from exc


@router.delete(
    "/subscribe/{email}",
    response_model=MessageOut,
    summary="Unsubscribe from newsletter",
)
async def unsubscribe(
    email: str,
    db: AsyncSession = Depends(get_db),
) -> MessageOut:
    found = await unsubscribe_email(db, email)
    if not found:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Email not found in subscriber list.",
        )
    return MessageOut(success=True, message="You've been unsubscribed.")