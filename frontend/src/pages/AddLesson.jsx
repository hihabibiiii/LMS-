import { useState } from "react"
import { createLesson } from "../api/api"

function AddLesson(){

const [courseId,setCourseId] = useState("")
const [title,setTitle] = useState("")
const [video,setVideo] = useState("")

const handleSubmit = async () => {

const data = {
course_id:Number(courseId),
title,
video_url:video
}

await createLesson(data)

alert("Lesson Added")

}

return(

<div className="min-h-screen bg-gray-900 text-white p-10">

<h1 className="text-3xl mb-6">
Add Lesson
</h1>

<input
placeholder="Course ID"
className="block mb-4 p-2 text-black"
onChange={(e)=>setCourseId(e.target.value)}
/>

<input
placeholder="Lesson Title"
className="block mb-4 p-2 text-black"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="YouTube Embed URL"
className="block mb-4 p-2 text-black"
onChange={(e)=>setVideo(e.target.value)}
/>

<button
onClick={handleSubmit}
className="bg-green-500 px-6 py-2 rounded"
>

Add Lesson

</button>

</div>

)

}

export default AddLesson