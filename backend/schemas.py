from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str


class Login(BaseModel):
    email: str
    password: str


class CourseCreate(BaseModel):
    title: str
    description: str
    price: int


class LessonCreate(BaseModel):
    course_id: int
    title: str
    video_url: str


class ProgressCreate(BaseModel):
    user_id: int
    lesson_id: int

class EnrollmentCreate(BaseModel):
    user_id: int
    course_id: int


class Course(BaseModel):
    id: int
    title: str
    description: str
    price: int

    class Config:
        from_attributes = True


class Register(BaseModel):
    name: str
    email: str
    password: str


class VerifyPayment(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str