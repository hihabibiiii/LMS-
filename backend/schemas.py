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