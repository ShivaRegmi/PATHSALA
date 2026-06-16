import re
from pydantic import BaseModel, Field, field_validator
from datetime import datetime


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    text = re.sub(r"^-+|-+$", "", text)
    return text


class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=5, max_length=300)
    category: str = Field(..., min_length=2, max_length=80)
    excerpt: str = Field(..., min_length=10, max_length=500)
    content: str = Field(..., min_length=20)
    read_time: str = Field(default="5 min read", max_length=30)

    @field_validator("title", "category", "excerpt", "content", mode="before")
    @classmethod
    def strip_whitespace(cls, v: str) -> str:
        return v.strip()


class BlogPostResponse(BaseModel):
    id: int
    title: str
    slug: str
    category: str
    excerpt: str
    content: str
    read_time: str
    published_at: datetime

    model_config = {"from_attributes": True}


class BlogPostSummary(BaseModel):
    """Lightweight version for list endpoints — no full content body."""
    id: int
    title: str
    slug: str
    category: str
    excerpt: str
    read_time: str
    published_at: datetime

    model_config = {"from_attributes": True}