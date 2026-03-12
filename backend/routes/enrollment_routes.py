from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models, schemas
from database import SessionLocal
from routes.auth_routes import get_current_user
router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/buy-course")
def buy_course(
    course_id: int,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user_id = current_user.id

    existing = db.query(models.Purchase).filter(
        models.Purchase.user_id == user_id,
        models.Purchase.course_id == course_id
    ).first()

    if existing:
        return {"message": "Already purchased"}

    purchase = models.Purchase(
        user_id=user_id,
        course_id=course_id
    )

    enroll = models.Enrollment(
        user_id=user_id,
        course_id=course_id
    )

    db.add(purchase)
    db.add(enroll)

    db.commit()

    return {"message": "Course purchased"}


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


@router.get("/check-enrollment/{user_id}/{course_id}")
def check_enrollment(user_id:int, course_id:int, db:Session=Depends(get_db)):

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