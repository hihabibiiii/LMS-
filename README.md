# 🚀 LMS - Learning Management System

A full-stack Learning Management System (LMS) built using modern web technologies. This platform allows users to explore courses, purchase them, and access structured learning content with a smooth user experience.

---

## 🌐 Live Demo
👉 (Add your Vercel frontend link here)  
👉 (Add your backend Render link here)

---

## 📌 Features

### 👨‍🎓 Student Features
- User Authentication (Login / Signup)
- Browse Courses
- Purchase Courses (Razorpay Integration 💳)
- Enroll in Courses
- Watch Lessons (YouTube Embedded Videos)
- Student Dashboard
- Track Enrolled Courses

### 👨‍🏫 Admin / Instructor Features
- Add Courses
- Upload Lessons
- Manage Course Content
- View Enrollments

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React.js (Vite)
- HTML, CSS, JavaScript
- Axios
- React Router

### 🔙 Backend
- FastAPI / Node.js (based on your setup)
- REST APIs
- JWT Authentication

### 🗄️ Database
- MongoDB / SQLite / PostgreSQL (update accordingly)

### 💳 Payment
- Razorpay Integration

### ☁️ Deployment
- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

LMS-
│
├── frontend/ # React Frontend
├── backend/ # API Backend
├── components/ # Reusable UI components
├── pages/ # Application Pages
├── api/ # API calls
└── README.md



---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/hihabibiiii/LMS-.git
cd LMS-


cd frontend
npm install
npm run dev

cd backend
pip install -r requirements.txt   # if FastAPI

uvicorn main:app --reload         # FastAPI run





