from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models, schemas
from database import SessionLocal

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/progress")
def update_progress(data: schemas.ProgressCreate, db: Session = Depends(get_db)):

    progress = models.Progress(
        user_id=data.user_id,
        lesson_id=data.lesson_id,
        completed=True
    )

    db.add(progress)
    db.commit()

    return {"message": "Progress updated"}