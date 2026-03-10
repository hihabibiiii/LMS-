import { useNavigate } from "react-router-dom"

function AdminSidebar(){

const navigate = useNavigate()

const handleLogout = () => {

localStorage.removeItem("token")

navigate("/login")

}

return(

<div className="w-60 bg-gray-800 min-h-screen p-5">

<h2 className="text-xl mb-6">
Admin Panel
</h2>

<ul className="space-y-4">

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>navigate("/admin/dashboard")}
>
Dashboard
</li>

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>navigate("/admin/courses")}
>
Courses
</li>

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>navigate("/admin/lessons")}
>
Lessons
</li>

<li
className="cursor-pointer hover:text-blue-400"
onClick={()=>navigate("/admin/add-lesson")}
>
Add Lesson
</li>

<li
className="cursor-pointer text-red-400 hover:text-red-500"
onClick={handleLogout}
>
Logout
</li>

</ul>

</div>

)

}

export default AdminSidebar