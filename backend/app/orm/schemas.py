from typing import List, Optional

from pydantic import BaseModel


class WorshipBase(BaseModel):
    name: str
    type: Optional[str] = None
    image_path: Optional[str] = None
    date: Optional[str] = None
    update_date: Optional[str] = None
    create_date: Optional[str] = None


class WorshipCreate(WorshipBase):
    pass


class Worship(WorshipBase):
    id: int


class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: List[Item] = []

    class Config:
        orm_mode = True