import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { getAllLessons, updateLesson } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"

function EditLesson(){

const {id} = useParams()
const navigate = useNavigate()

const [form,setForm] = useState({
title:"",
video_url:""
})

useEffect(()=>{

getAllLessons().then(data=>{

const lesson = data.find(l=>l.id == id)

if(lesson){
setForm(lesson)
}

})

},[])

const handleSubmit = async(e)=>{

e.preventDefault()

await updateLesson(id,form)

alert("Lesson updated")

navigate("/admin/lessons")

}

return(

<div className="flex bg-gray-900 text-white">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-3xl mb-8">
Edit Lesson
</h1>

<form onSubmit={handleSubmit}>

<input
className="w-full p-2 mb-4 text-black"
placeholder="Lesson Title"
value={form.title}
onChange={(e)=>setForm({...form,title:e.target.value})}
/>

<input
className="w-full p-2 mb-4 text-black"
placeholder="Video URL"
value={form.video_url}
onChange={(e)=>setForm({...form,video_url:e.target.value})}
/>

<button className="bg-blue-500 px-6 py-2 rounded">
Update Lesson
</button>

</form>

</div>

</div>

)

}

export default EditLesson