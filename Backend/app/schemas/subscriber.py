from pydantic import BaseModel, EmailStr
from datetime import datetime


class SubscribeCreate(BaseModel):
    email: EmailStr


class SubscribeResponse(BaseModel):
    id: int
    email: str
    is_active: bool
    subscribed_at: datetime

    model_config = {"from_attributes": True}


class MessageOut(BaseModel):
    success: bool
    message: str
