import { useNavigate } from "react-router-dom"

function AdminDashboard(){

const navigate = useNavigate()

return(

<div className="min-h-screen bg-gray-900 text-white p-10">

<h1 className="text-3xl font-bold mb-10">
Admin Dashboard
</h1>

<div className="flex gap-6">

<button
onClick={()=>navigate("/admin/create-course")}
className="bg-blue-500 px-6 py-3 rounded-lg"
>
Create Course
</button>

<button
onClick={()=>navigate("/admin/add-lesson")}
className="bg-green-500 px-6 py-3 rounded-lg"
>
Add Lesson
</button>

</div>

</div>

)

}

export default AdminDashboard