from sqlalchemy import Integer, String, Text, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from datetime import datetime
from ..database import Base


class BlogPost(Base):
    __tablename__ = "blog_posts"

    id:           Mapped[int]      = mapped_column(Integer, primary_key=True, index=True)
    title:        Mapped[str]      = mapped_column(String(300), nullable=False)
    slug:         Mapped[str]      = mapped_column(String(320), nullable=False, unique=True, index=True)
    category:     Mapped[str]      = mapped_column(String(80), nullable=False)
    excerpt:      Mapped[str]      = mapped_column(String(500), nullable=False)
    content:      Mapped[str]      = mapped_column(Text, nullable=False)
    read_time:    Mapped[str]      = mapped_column(String(30), nullable=False, default="5 min read")
    published_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    def __repr__(self) -> str:
        return f"<BlogPost id={self.id} slug={self.slug!r}>"
