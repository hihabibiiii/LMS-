import { Routes, Route } from "react-router-dom"

import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/AdminDashboard"
import CreateCourse from "./pages/CreateCourse"
import AddLesson from "./pages/AddLesson"
import AdminCourses from "./pages/AdminCourses"
import EditCourse from "./pages/EditCourse"
import AdminRoute from "./components/AdminRoute"
import AdminLessons from "./pages/AdminLessons"
import EditLesson from "./pages/EditLesson"
function App(){

return(

<Routes>
<Route
path="/admin/lessons"
element={
<AdminRoute>
<AdminLessons/>
</AdminRoute>
}
/>

<Route
path="/admin/edit-lesson/:id"
element={
<AdminRoute>
<EditLesson/>
</AdminRoute>
}
/>
<Route
path="/admin/edit-course/:id"
element={
<AdminRoute>
<EditCourse/>
</AdminRoute>
}
/>


<Route
path="/admin/courses"
element={
<AdminRoute>
<AdminCourses/>
</AdminRoute>
}
/>
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