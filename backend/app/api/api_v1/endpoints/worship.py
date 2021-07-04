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

@router.get("/worships", response_model=List[schemas.Worship])
def read_worships(db: Session = Depends(get_db)):
    worships = db.query(models.Worship).all()
    return worships

@router.get("/worship", response_model=schemas.Worship)
def read_worship(id: int, db: Session = Depends(get_db)):
    worships = db.query(models.Worship).filter(models.Worship.id == id).first()
    return worships

@router.post("/worship")
def create_worship(worship: schemas.WorshipCreate, db: Session = Depends(get_db)):
    db_worship = models.Worship(title=worship.title, type=worship.type, date=worship.date, image_url=worship.image_url)
    db.add(db_worship)
    db.commit()
    db.refresh(db_worship)
    return "success create"

@router.put("/worship")
def update_worship(worship: schemas.WorshipUpdate, db: Session = Depends(get_db)):
    data = db.query(models.Worship).filter(models.Worship.id == worship.id).first()
    if data:
        data.title = worship.title
        data.type = worship.type
        data.image_url = worship.image_url
        data.date = worship.date
        db.add(data)
        db.commit()
        db.refresh(data)
        return "success update"
    else:
        db_worship = models.Worship(title=worship.title, type=worship.type, date=worship.date, image_url=worship.image_url)
        db.add(db_worship)
        db.commit()
        db.refresh(db_worship)
        return "success create"

@router.delete("/worship")
def delete_worship(id: int, db: Session = Depends(get_db)):
    data = db.query(models.Worship).filter(models.Worship.id == id).first()
    db.delete(data)
    db.commit()
    return "success delete"