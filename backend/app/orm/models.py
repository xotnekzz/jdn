from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import DATETIME, TEXT, TIMESTAMP
from .database import Base

class Worship(Base):
    __tablename__ = "worships"

    id = Column(Integer, primary_key=True)
    title = Column(String, default='No Title', index=True, nullable=False)
    type = Column(String, default='주일예배', nullable=False)
    date = Column(String, nullable=False)
    image_url = Column(TEXT, nullable=False, default='')
    update_date = Column(TIMESTAMP)
    create_date = Column(TIMESTAMP)