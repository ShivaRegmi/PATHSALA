from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from ..database.models import ContactMessage
from ..schemas.contact import ContactCreate


async def save_contact(db: AsyncSession, payload: ContactCreate) -> ContactMessage:
    """
    Persists a contact form submission to the database.
    Raises on DB error so the route can return 500.
    """
    record = ContactMessage(
        name=payload.name,
        email=payload.email,
        message=payload.message,
    )
    db.add(record)
    await db.commit()
    await db.refresh(record)
    return record


async def get_all_contacts(db: AsyncSession, skip: int = 0, limit: int = 100):
    result = await db.execute(
        select(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .offset(skip)
        .limit(limit)
    )
    return result.scalars().all()
