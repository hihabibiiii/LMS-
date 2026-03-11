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

@router.post("/buy-course")
def buy_course(data: schemas.EnrollmentCreate, db: Session = Depends(get_db)):

    existing = db.query(models.Purchase).filter(
        models.Purchase.user_id == data.user_id,
        models.Purchase.course_id == data.course_id
    ).first()

    if existing:
        return {"message": "Already purchased"}

    purchase = models.Purchase(
        user_id=data.user_id,
        course_id=data.course_id
    )

    enroll = models.Enrollment(
        user_id=data.user_id,
        course_id=data.course_id
    )

    db.add(purchase)
    db.add(enroll)

    db.commit()

    return {"message": "Course purchased"}

@router.get("/check-purchase/{user_id}/{course_id}")
def check_purchase(user_id:int, course_id:int, db:Session = Depends(get_db)):

    purchase = db.query(models.Purchase).filter(
        models.Purchase.user_id == user_id,
        models.Purchase.course_id == course_id
    ).first()

    if purchase:
        return {"purchased": True}

    return {"purchased": False}

@router.get("/check-enrollment/{user_id}/{course_id}")
def check_enrollment(user_id:int, course_id:int, db:Session=Depends(get_db)):

    enroll = db.query(models.Enrollment).filter(
        models.Enrollment.user_id == user_id,
        models.Enrollment.course_id == course_id
    ).first()

    return {"purchased": bool(enroll)}