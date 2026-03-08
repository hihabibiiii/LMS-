import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProgress } from "../api/api";

function CourseCard({ course }) {

const navigate = useNavigate()

const [progress,setProgress] = useState(0)

const userId = 1

useEffect(()=>{

getProgress(userId,course.id).then(data=>{
setProgress(data.progress)
})

},[course.id])

return(

<div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

{/* Course Header */}

<div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold relative">

{course.title}

{progress === 100 && (
<span className="absolute top-2 right-2 bg-green-500 text-xs px-2 py-1 rounded">
Completed
</span>
)}

</div>

{/* Course Content */}

<div className="p-5">

<p className="text-gray-400 text-sm mb-3">
{course.description}
</p>

{/* Price */}

<p className="text-green-400 font-semibold mb-4">
₹{course.price || 0}
</p>

{/* Progress Bar */}

{progress > 0 && (

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

)}

{/* Button */}

<button
onClick={()=>navigate(`/course/${course.id}`)}
className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 font-semibold"
>

{progress === 0 && "Start Course"}
{progress > 0 && progress < 100 && "Continue Learning"}
{progress === 100 && "Review Course"}

</button>

</div>

</div>

)

}

export default CourseCard