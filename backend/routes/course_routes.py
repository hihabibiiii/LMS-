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


@router.post("/courses")
def create_course(course: schemas.CourseCreate, db: Session = Depends(get_db)):

    new_course = models.Course(
        title=course.title,
        description=course.description,
        price=course.price
    )

    db.add(new_course)
    db.commit()
    db.refresh(new_course)

    return new_course


@router.get("/courses")
def get_courses(db: Session = Depends(get_db)):

    courses = db.query(models.Course).all()

    return courses