import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllLessons, deleteLesson } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"

function AdminLessons(){

const [lessons,setLessons] = useState([])
const navigate = useNavigate()

useEffect(()=>{

getAllLessons().then(data=>{
if(Array.isArray(data)){
setLessons(data)
}else{
setLessons([])
}
})

},[])

const handleDelete = async(id)=>{

await deleteLesson(id)

setLessons(lessons.filter(l => l.id !== id))

}

return(

<div className="flex bg-gray-900 text-white">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-3xl mb-8">
Manage Lessons
</h1>

<table className="w-full bg-gray-800">

<thead>
<tr>
<th className="p-4">ID</th>
<th className="p-4">Title</th>
<th className="p-4">Actions</th>
</tr>
</thead>

<tbody>

{lessons.map(lesson=>(
<tr key={lesson.id}>

<td className="p-4">{lesson.id}</td>
<td className="p-4">{lesson.title}</td>

<td className="p-4 flex gap-4">

<button
className="bg-yellow-500 px-4 py-1 rounded"
onClick={()=>navigate(`/admin/edit-lesson/${lesson.id}`)}
>
Edit
</button>

<button
className="bg-red-500 px-4 py-1 rounded"
onClick={()=>handleDelete(lesson.id)}
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

export default AdminLessons