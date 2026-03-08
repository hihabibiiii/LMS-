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

@router.get("/progress/{user_id}/{course_id}")
def get_progress(user_id:int, course_id:int, db:Session = Depends(get_db)):

    lessons = db.query(models.Lesson).filter(
        models.Lesson.course_id == course_id
    ).all()

    lesson_ids = [l.id for l in lessons]

    completed = db.query(models.Progress).filter(
        models.Progress.user_id == user_id,
        models.Progress.lesson_id.in_(lesson_ids),
        models.Progress.completed == True
    ).count()

    total = len(lesson_ids)

    progress = 0

    if total > 0:
        progress = int((completed / total) * 100)

    return {
        "progress": progress
    }