import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllLessons, deleteLesson } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"

function AdminLessons(){

const [lessons,setLessons] = useState([])
const [loading,setLoading] = useState(true)

const navigate = useNavigate()

useEffect(()=>{

const fetchLessons = async () => {

try{

const data = await getAllLessons()

if(Array.isArray(data)){
setLessons(data)
}else{
setLessons([])
}

}catch(error){

console.log(error)
alert("Failed to load lessons")

}

setLoading(false)

}

fetchLessons()

},[])


const handleDelete = async(id)=>{

const confirmDelete = window.confirm("Delete this lesson?")

if(!confirmDelete) return

try{

await deleteLesson(id)

setLessons(lessons.filter(l => l.id !== id))

}catch(error){

console.log(error)
alert("Delete failed")

}

}


return(

<div className="flex bg-gray-900 text-white min-h-screen">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-3xl mb-8">
Manage Lessons
</h1>

{loading ? (

<p>Loading lessons...</p>

) : (

<table className="w-full bg-gray-800 rounded overflow-hidden">

<thead className="bg-gray-700">

<tr>
<th className="p-4 text-left">ID</th>
<th className="p-4 text-left">Title</th>
<th className="p-4 text-left">Actions</th>
</tr>

</thead>

<tbody>

{lessons.map((lesson)=>(
<tr key={lesson.id} className="border-t border-gray-700">

<td className="p-4">{lesson.id}</td>
<td className="p-4">{lesson.title}</td>

<td className="p-4 flex gap-4">

<button
className="bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600"
onClick={()=>navigate(`/admin/edit-lesson/${lesson.id}`)}
>
Edit
</button>

<button
className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
onClick={()=>handleDelete(lesson.id)}
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

)}

</div>

</div>

)

}

export default AdminLessons