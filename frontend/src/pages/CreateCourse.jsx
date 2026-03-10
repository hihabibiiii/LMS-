import { useState } from "react"
import { createCourse } from "../api/api"

function CreateCourse(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState("")

const handleSubmit = async () => {

const data = {
title,
description,
price:Number(price)
}

await createCourse(data)

alert("Course Created")

}

return(

<div className="min-h-screen bg-gray-900 text-white p-10">

<h1 className="text-3xl mb-6">
Create Course
</h1>

<input
placeholder="Course Title"
className="block mb-4 p-2 text-black"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Description"
className="block mb-4 p-2 text-black"
onChange={(e)=>setDescription(e.target.value)}
/>

<input
placeholder="Price"
className="block mb-4 p-2 text-black"
onChange={(e)=>setPrice(e.target.value)}
/>

<button
onClick={handleSubmit}
className="bg-blue-500 px-6 py-2 rounded"
>

Create

</button>

</div>

)

}

export default CreateCourse