import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCourses } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"

function EditCourse(){

const { id } = useParams()
const navigate = useNavigate()

const [form,setForm] = useState({
title:"",
description:"",
price:""
})

const [image,setImage] = useState(null)

useEffect(()=>{

getCourses().then(data=>{

const course = data.find(c => c.id == id)

if(course){
setForm({
title:course.title,
description:course.description,
price:course.price
})
}

})

},[id])

const handleSubmit = async(e)=>{

e.preventDefault()

const formData = new FormData()

formData.append("title",form.title)
formData.append("description",form.description)
formData.append("price",form.price)

if(image){
formData.append("image",image)
}

await fetch(`http://127.0.0.1:8000/courses/${id}`,{
method:"PUT",
body:formData
})

alert("Course updated")

navigate("/admin/courses")

}

return(

<div className="flex bg-gray-900 text-white">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-3xl mb-8">
Edit Course
</h1>

<form onSubmit={handleSubmit} className="max-w-lg">

<input
className="w-full p-2 mb-4 text-black"
placeholder="Title"
value={form.title}
onChange={(e)=>setForm({...form,title:e.target.value})}
/>

<textarea
className="w-full p-2 mb-4 text-black"
placeholder="Description"
value={form.description}
onChange={(e)=>setForm({...form,description:e.target.value})}
/>

<input
className="w-full p-2 mb-4 text-black"
placeholder="Price"
value={form.price}
onChange={(e)=>setForm({...form,price:e.target.value})}
/>

<input 
type="file"
className="mb-4"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button className="bg-blue-500 px-6 py-2 rounded">
Update Course
</button>

</form>

</div>

</div>

)

}

export default EditCourse