from datetime import date
from pydantic import BaseModel
from typing import Union


class WorshipBase(BaseModel):
	title: str
	type: str
	image_url: Union[None, str]
	date: date

class WorshipCreate(WorshipBase):
	pass

class WorshipUpdate(WorshipBase):
	id: int

class WorshipDelete(WorshipBase):
	id: int

class Worship(WorshipBase):
	id: int
	update_date: date
	create_date: date

	class Config:
		orm_mode = True