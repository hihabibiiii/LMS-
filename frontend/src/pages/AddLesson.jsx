import { useState } from "react"
import { createLesson } from "../api/api"
import AdminSidebar from "../components/AdminSidebar"

function AddLesson(){

const [courseId,setCourseId] = useState("")
const [title,setTitle] = useState("")
const [video,setVideo] = useState("")

const handleSubmit = async () => {

if(!courseId || !title || !video){
alert("Please fill all fields")
return
}

try{

const data = {
course_id:Number(courseId),
title,
video_url:video
}

await createLesson(data)

alert("Lesson Added Successfully")

setCourseId("")
setTitle("")
setVideo("")

}catch(error){

console.log(error)
alert("Error adding lesson")

}

}

return(

<div className="flex min-h-screen bg-gray-900 text-white">

<AdminSidebar/>

<div className="p-10">

<h1 className="text-3xl mb-6">
Add Lesson
</h1>

<input
placeholder="Course ID"
value={courseId}
className="block mb-4 p-2 text-black w-96"
onChange={(e)=>setCourseId(e.target.value)}
/>

<input
placeholder="Lesson Title"
value={title}
className="block mb-4 p-2 text-black w-96"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="YouTube Embed URL"
value={video}
className="block mb-4 p-2 text-black w-96"
onChange={(e)=>setVideo(e.target.value)}
/>

<button
onClick={handleSubmit}
className="bg-green-500 px-6 py-2 rounded hover:bg-green-600"
>

Add Lesson

</button>

</div>

</div>

)

}

export default AddLesson