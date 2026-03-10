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


@router.post("/lessons")
def create_lesson(lesson: schemas.LessonCreate, db: Session = Depends(get_db)):

    new_lesson = models.Lesson(
        course_id=lesson.course_id,
        title=lesson.title,
        video_url=lesson.video_url
    )

    db.add(new_lesson)
    db.commit()

    return {"message": "Lesson added"}


@router.get("/lessons/{course_id}")
def get_lessons(course_id: int, db: Session = Depends(get_db)):

    lessons = db.query(models.Lesson).filter(
        models.Lesson.course_id == course_id
    ).all()

    return lessons


@router.get("/lessons")
def get_lessons(db: Session = Depends(get_db)):
    lessons = db.query(models.Lesson).all()
    return lessons

@router.put("/lessons/{lesson_id}")
def update_lesson(lesson_id: int, data: schemas.LessonCreate, db: Session = Depends(get_db)):

    lesson = db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()

    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    lesson.title = data.title
    lesson.video_url = data.video_url

    db.commit()
    db.refresh(lesson)

    return {"message": "Lesson updated successfully"}


@router.delete("/lessons/{lesson_id}")
def delete_lesson(lesson_id: int, db: Session = Depends(get_db)):

    lesson = db.query(models.Lesson).filter(models.Lesson.id == lesson_id).first()

    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    db.delete(lesson)
    db.commit()

    return {"message": "Lesson deleted successfully"}