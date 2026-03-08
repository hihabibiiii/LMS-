import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProgress } from "../api/api";

function CourseCard({ course }) {

const navigate = useNavigate()

const [progress,setProgress] = useState(0)

const userId = 1   // temporary

useEffect(()=>{

getProgress(userId,course.id).then(data=>{
setProgress(data.progress)
})

},[course.id])

return(

<div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

{/* Course Header */}

<div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">

{course.title}

</div>

{/* Course Content */}

<div className="p-5">

<p className="text-gray-400 text-sm mb-4">

{course.description}

</p>

{/* Progress Bar */}

<div className="mb-4">

<div className="w-full bg-gray-600 rounded-full h-2">

<div
className="bg-green-400 h-2 rounded-full transition-all"
style={{ width: `${progress}%` }}
></div>

</div>

<p className="text-xs text-gray-400 mt-1">

{progress}% Complete

</p>

</div>

{/* Button */}

<button
onClick={()=>navigate(`/course/${course.id}`)}
className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 font-semibold"
>

{progress > 0 ? "Continue Learning" : "Start Course"}

</button>

</div>

</div>

)

}

export default CourseCard