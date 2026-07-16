from sqlalchemy import Integer, String, Text, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from .base import Base


class ContactMessage(Base):
    """
    Stores every submission from:
    - Contact.jsx  (standard contact form)
    - ContextualForm.jsx  (formats its contextual fields into the message string
                           before posting, so it arrives here as plain text)
    """
    __tablename__ = "contact_messages"

    id:         Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    name:       Mapped[str]      = mapped_column(String(120), nullable=False)
    email:      Mapped[str]      = mapped_column(String(254), nullable=False, index=True)
    message:    Mapped[str]      = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    def __repr__(self) -> str:
        return f"<ContactMessage id={self.id} email={self.email!r}>"


class Subscriber(Base):
    """
    Stores newsletter subscribers from the Blog page subscribe input.
    """
    __tablename__ = "subscribers"

    id:            Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    email:         Mapped[str]      = mapped_column(String(254), nullable=False, unique=True, index=True)
    is_active:     Mapped[bool]     = mapped_column(Boolean, default=True, nullable=False)
    subscribed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    def __repr__(self) -> str:
        return f"<Subscriber id={self.id} email={self.email!r}>"
