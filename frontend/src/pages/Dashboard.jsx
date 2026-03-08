import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getMyCourses } from "../api/api"
import CourseCard from "../components/CourseCard"

function Dashboard(){

const [courses,setCourses] = useState([])

const userId = 1   // temporary

useEffect(()=>{

getMyCourses(userId).then(data=>{
setCourses(data)
})

},[])

return(

<div className="min-h-screen bg-gray-900 text-white">

<Navbar/>

<div className="max-w-6xl mx-auto py-12 px-6">

<h1 className="text-4xl font-bold mb-10">

My Learning Dashboard

</h1>

{courses.length === 0 ? (

<p className="text-gray-400">

You have not enrolled in any course yet.

</p>

) : (

<div className="grid md:grid-cols-3 gap-8">

{courses.map(course => (

<CourseCard key={course.id} course={course}/>

))}

</div>

)}

</div>

</div>

)

}

export default Dashboard