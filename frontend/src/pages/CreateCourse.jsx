import { useState } from "react"
import axios from "axios"
import AdminSidebar from "../components/AdminSidebar"

function CreateCourse(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState(null)

const handleSubmit = async () => {

try{

const formData = new FormData()

formData.append("title", title)
formData.append("description", description)
formData.append("price", price)
formData.append("image", image)

await axios.post("http://localhost:8000/courses", formData)

alert("Course Created Successfully")

setTitle("")
setDescription("")
setPrice("")
setImage(null)

}catch(error){

console.log(error)
alert("Error creating course")

}

}

return(
<div className="flex min-h-screen bg-gray-900 text-white">

<AdminSidebar/>

<div className="p-10">

<h1 className="text-3xl mb-6">
Create Course
</h1>

<input
placeholder="Course Title"
className="block mb-4 p-2 text-black w-96"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Description"
className="block mb-4 p-2 text-black w-96"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
placeholder="Price"
className="block mb-4 p-2 text-black w-96"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="file"
accept="image/*"
className="block mb-4"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button
onClick={handleSubmit}
className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600"
>

Create

</button>

</div>

</div>
)

}

export default CreateCourse