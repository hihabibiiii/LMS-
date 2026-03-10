import { Routes, Route } from "react-router-dom"

import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/AdminDashboard"
import CreateCourse from "./pages/CreateCourse"
import AddLesson from "./pages/AddLesson"

import AdminRoute from "./components/AdminRoute"

function App(){

return(

<Routes>

<Route path="/" element={<Courses/>} />

<Route path="/course/:id" element={<CourseDetail/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/dashboard" element={<Dashboard/>}/>

<Route
path="/admin"
element={
<AdminRoute>
<AdminDashboard/>
</AdminRoute>
}
/>

<Route
path="/admin/create-course"
element={
<AdminRoute>
<CreateCourse/>
</AdminRoute>
}
/>

<Route
path="/admin/add-lesson"
element={
<AdminRoute>
<AddLesson/>
</AdminRoute>
}
/>

</Routes>

)

}

export default App