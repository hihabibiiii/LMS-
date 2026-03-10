import { useEffect, useState } from "react"
import { getCourses, deleteCourse } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"
import { useNavigate } from "react-router-dom"

function AdminCourses(){
    const navigate = useNavigate()

const [courses,setCourses] = useState([])

useEffect(()=>{

getCourses().then(data=>{
setCourses(data)
})

},[])

const handleDelete = async(id)=>{

await deleteCourse(id)

setCourses(courses.filter(c=>c.id !== id))

}

return(

<div className="flex bg-gray-900 text-white">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-3xl font-bold mb-8">
Manage Courses
</h1>

<table className="w-full bg-gray-800 rounded-lg">

<thead>

<tr className="text-left border-b border-gray-700">

<th className="p-4">ID</th>
<th className="p-4">Title</th>
<th className="p-4">Price</th>
<th className="p-4">Actions</th>

</tr>

</thead>

<tbody>

{courses.map(course=>(
<tr key={course.id} className="border-b border-gray-700">

<td className="p-4">{course.id}</td>
<td className="p-4">{course.title}</td>
<td className="p-4">${course.price}</td>

<td className="p-4 flex gap-4">
<button
className="bg-yellow-500 px-4 py-1 rounded"
onClick={()=>navigate(`/admin/edit-course/${course.id}`)}
>
Edit
</button>
<button
className="bg-red-500 px-4 py-1 rounded"
onClick={()=>handleDelete(course.id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default AdminCourses