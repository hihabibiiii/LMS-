import { useNavigate } from "react-router-dom";

function CourseCard({course}) {

const navigate = useNavigate()

return(

<div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

<div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">

{course.title}

</div>

<div className="p-5">

<p className="text-gray-400 text-sm mb-4">

{course.description}

</p>

<button
onClick={()=>navigate(`/course/${course.id}`)}
className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600"
>

View Course

</button>

</div>

</div>

)

}

export default CourseCard