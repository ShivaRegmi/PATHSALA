from pydantic import BaseModel, EmailStr, Field, field_validator
from datetime import datetime


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120, examples=["Anika Shrestha"])
    email: EmailStr = Field(..., examples=["anika@example.com"])
    message: str = Field(..., min_length=10, max_length=2000, examples=["I want to know more about your courses."])

    @field_validator("name", "message", mode="before")
    @classmethod
    def strip_whitespace(cls, v: str) -> str:
        return v.strip()


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class MessageOut(BaseModel):
    success: bool
    message: str
