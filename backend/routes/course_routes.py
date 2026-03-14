from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
import models, schemas
from database import SessionLocal
import shutil
router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/courses")
def create_course(
    title: str = Form(...),
    description: str = Form(...),
    price: int = Form(...),
    image: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    image_path = f"uploads/{image.filename}"

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    new_course = models.Course(
        title=title,
        description=description,
        price=price,
        image=image_path
    )

    db.add(new_course)
    db.commit()
    db.refresh(new_course)

    return new_course


@router.get("/courses")
def get_courses(db: Session = Depends(get_db)):

    courses = db.query(models.Course).all()

    return courses
@router.get("/courses/{course_id}")
def get_single_course(course_id: int, db: Session = Depends(get_db)):

    course = db.query(models.Course).filter(models.Course.id == course_id).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    return course
@router.delete("/courses/{course_id}")
def delete_course(course_id: int, db: Session = Depends(get_db)):

    course = db.query(models.Course).filter(models.Course.id == course_id).first()

    if not course:
        raise HTTPException(status_code=404, detail="Course not found")

    db.delete(course)
    db.commit()

    return {"message": "Course deleted"}


@router.put("/courses/{course_id}")
def update_course(
    course_id: int,
    title: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    image: UploadFile = File(None),
    db: Session = Depends(get_db)
):

    course = db.query(models.Course).filter(models.Course.id == course_id).first()

    if not course:
        return {"error": "Course not found"}

    course.title = title
    course.description = description
    course.price = price

    if image:
        image_path = f"uploads/{image.filename}"

        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        course.image = image_path

    db.commit()

    return {"message": "Course updated successfully"}