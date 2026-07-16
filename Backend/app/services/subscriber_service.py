from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ..database.models import Subscriber


async def subscribe_email(db: AsyncSession, email: str) -> dict:
    """
    Subscribes an email address.
    - If the email is new: creates a new subscriber row.
    - If it already exists and is active: returns a "already subscribed" message.
    - If it exists but was unsubscribed: re-activates it.
    """
    result = await db.execute(
        select(Subscriber).where(Subscriber.email == email)
    )
    existing = result.scalar_one_or_none()

    if existing:
        if existing.is_active:
            return {"success": True, "message": "You're already subscribed!"}
        existing.is_active = True
        await db.commit()
        return {"success": True, "message": "Welcome back! You've been re-subscribed."}

    record = Subscriber(email=email)
    db.add(record)
    await db.commit()
    return {"success": True, "message": "Subscribed! You'll receive our latest updates."}


async def unsubscribe_email(db: AsyncSession, email: str) -> bool:
    """
    Marks a subscriber as inactive. Returns False if email not found.
    """
    result = await db.execute(
        select(Subscriber).where(Subscriber.email == email)
    )
    record = result.scalar_one_or_none()

    if not record:
        return False

    record.is_active = False
    await db.commit()
    return True
