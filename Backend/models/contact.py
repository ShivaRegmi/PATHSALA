from sqlalchemy import Integer, String, Text, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from ..database import Base


class ContactMessage(Base):
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
