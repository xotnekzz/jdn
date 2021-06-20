from datetime import date
from pydantic import BaseModel


class Worship(BaseModel):
	id: int
	title: str
	type: str
	image_url: str
	update_date: date
	create_date: date
	date: date

	class Config:
		orm_mode = True