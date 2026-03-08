from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import models
import schemas
import auth

from database import engine, SessionLocal, Base

# routers import karo
from routes import auth_routes, course_routes, lesson_routes, progress_routes,enrollment_routes

Base.metadata.create_all(bind=engine)

app = FastAPI()




app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# routers add karo
app.include_router(enrollment_routes.router)
app.include_router(auth_routes.router)
app.include_router(course_routes.router)
app.include_router(lesson_routes.router)
app.include_router(progress_routes.router)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):

    hashed = auth.hash_password(user.password)

    new_user = models.User(
        name=user.name,
        email=user.email,
        password=hashed
    )

    db.add(new_user)
    db.commit()

    return {"message": "User created"}


@app.post("/login")
def login(data: schemas.Login, db: Session = Depends(get_db)):

    user = db.query(models.User).filter(models.User.email == data.email).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not auth.verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid password")

    return {"message": "Login successful"}


@app.post("/courses")
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


@app.get("/courses")
def get_courses(db: Session = Depends(get_db)):

    courses = db.query(models.Course).all()

    return courses

