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


@router.post("/enroll")
def enroll_course(data: schemas.EnrollmentCreate, db: Session = Depends(get_db)):

    enroll = models.Enrollment(
        user_id=data.user_id,
        course_id=data.course_id
    )

    db.add(enroll)
    db.commit()

    return {"message": "Enrolled successfully"}


@router.get("/my-courses/{user_id}")
def my_courses(user_id: int, db: Session = Depends(get_db)):

    enrollments = db.query(models.Enrollment).filter(
        models.Enrollment.user_id == user_id
    ).all()

    course_ids = [e.course_id for e in enrollments]

    courses = db.query(models.Course).filter(
        models.Course.id.in_(course_ids)
    ).all()

    return courses