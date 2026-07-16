from pydantic import BaseModel, EmailStr, Field, field_validator
from datetime import datetime


class ContactCreate(BaseModel):
    """
    Matches exactly what both Contact.jsx and ContextualForm.jsx send:
        { name, email, message }
    ContextualForm formats its contextual fields into the message string
    before posting, so no extra fields are needed here.
    """
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=5, max_length=5000)

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
