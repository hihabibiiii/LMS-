from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import models
from database import get_db

router = APIRouter()

@router.get("/stats")
def get_admin_stats(db: Session = Depends(get_db)):

    users = db.query(models.User).count()
    courses = db.query(models.Course).count()
    enrollments = db.query(models.Enrollment).count()

    return {
        "total_users": users,
        "total_courses": courses,
        "total_enrollments": enrollments
    }