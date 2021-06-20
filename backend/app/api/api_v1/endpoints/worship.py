from typing import List
from fastapi import APIRouter, Depends
from fastapi.responses import PlainTextResponse
from sqlalchemy.orm import Session


from app.orm import models, schemas
from app.orm.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

router = APIRouter()

@router.get("/", response_model=List[schemas.Worship])
def read_worships(db: Session = Depends(get_db)):
    worships = db.query(models.Worship).all()
    return worships