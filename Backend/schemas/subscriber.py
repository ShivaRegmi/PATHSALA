from pydantic import BaseModel, EmailStr, Field
from datetime import datetime


class SubscribeCreate(BaseModel):
    email: EmailStr = Field(..., examples=["student@example.com"])


class SubscribeResponse(BaseModel):
    id: int
    email: str
    is_active: bool
    subscribed_at: datetime

    model_config = {"from_attributes": True}


class MessageOut(BaseModel):
    success: bool
    message: str
