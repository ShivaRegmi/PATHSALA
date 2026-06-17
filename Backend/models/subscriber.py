from sqlalchemy import Integer, String, Boolean, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from ..database import Base


class Subscriber(Base):
    __tablename__ = "subscribers"

    id:            Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    email:         Mapped[str]      = mapped_column(String(254), nullable=False, unique=True, index=True)
    is_active:     Mapped[bool]     = mapped_column(Boolean, default=True, nullable=False)
    subscribed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    def __repr__(self) -> str:
        return f"<Subscriber id={self.id} email={self.email!r}>"
