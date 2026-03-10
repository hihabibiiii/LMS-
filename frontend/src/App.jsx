import { Routes, Route } from "react-router-dom";

import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/AdminDashboard"
import CreateCourse from "./pages/CreateCourse"
import AddLesson from "./pages/AddLesson"

function App(){

return(

<Routes>
<Route path="/admin" element={<AdminDashboard/>}/>
<Route path="/admin/create-course" element={<CreateCourse/>}/>
<Route path="/admin/add-lesson" element={<AddLesson/>}/>
<Route path="/" element={<Courses/>} />

<Route path="/course/:id" element={<CourseDetail/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>

)

}

export default App