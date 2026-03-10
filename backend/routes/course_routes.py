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

@router.delete("/courses/{course_id}")
def delete_course(course_id: int, db: Session = Depends(get_db)):

    course = db.query(models.Course).filter(models.Course.id == course_id).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    db.delete(course)
    db.commit()

    return {"message": "Course deleted"}

@router.put("/courses/{course_id}")
def update_course(course_id: int, data: schemas.CourseCreate, db: Session = Depends(get_db)):

    course = db.query(models.Course).filter(models.Course.id == course_id).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    course.title = data.title
    course.description = data.description
    course.price = data.price

    db.commit()
    db.refresh(course)

    return {"message": "Course updated successfully"}
