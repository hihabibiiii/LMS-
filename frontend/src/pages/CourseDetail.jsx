import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkEnrollment, buyCourse, getLessons, enrollCourse, markLessonComplete, updateLastWatched } from "../api/api";
import VideoPlayer from "../components/VideoPlayer";
import Navbar from "../components/Navbar";

function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
const userId = localStorage.getItem("user_id")
const [lessons,setLessons] = useState([]);
const [currentVideo,setCurrentVideo] = useState(null);

const [purchased, setPurchased] = useState(false)
const token = localStorage.getItem("token");

const handleComplete = async (lessonId) => {

const data = {
user_id:userId,
lesson_id:lessonId
}

await markLessonComplete(data)

alert("Lesson completed")

}

const handleLessonClick = async (lesson,index) => {

if(!purchased && index !== 0){
alert("Buy the course to unlock lessons")
return
}

setCurrentVideo(lesson.video_url)

await updateLastWatched({
user_id:userId,
lesson_id:lesson.id
})

}

const handleBuy = async () => {

const token = localStorage.getItem("token")

if(!token){
alert("Please login first")
navigate("/login")
return
}

const res = await buyCourse(id)

alert(res.message)

setPurchased(true)

}

const handleEnroll = async () => {

if(!token){
alert("Please register or login first")
navigate("/register")
return
}

const data = {
user_id:userId,
course_id:id
}

const res = await enrollCourse(data)

alert(res.message)

navigate("/dashboard")

}

useEffect(()=>{

const userId = localStorage.getItem("user_id")

getLessons(id).then(data=>{

setLessons(data)

if(data.length > 0){
setCurrentVideo(data[0].video_url)
}

})

if(userId){

checkEnrollment(userId,id).then(data=>{
setPurchased(data.purchased)
})

}else{

setPurchased(false)

}

},[id])

return(

<div className="min-h-screen bg-gray-900 text-white">

<Navbar/>

<div className="flex">

{/* Sidebar */}

<div className="w-80 bg-gray-800 p-6 border-r border-gray-700">

<h2 className="text-xl font-bold mb-6 text-blue-400">
Course Lessons
</h2>

{lessons.map((lesson,index) => (

<div
key={lesson.id}
className="p-3 mb-3 rounded-lg bg-gray-700 hover:bg-blue-500 transition"
>

<div
onClick={()=>handleLessonClick(lesson,index)}
className="cursor-pointer flex justify-between"
>

<span>{lesson.title}</span>

{index !== 0 && !purchased && (
<span className="text-red-400 text-xs">
🔒
</span>
)}

</div>

{purchased && (
<button
onClick={()=>handleComplete(lesson.id)}
className="text-xs bg-green-500 px-2 py-1 rounded mt-2"
>
Mark Complete
</button>
)}
</div>

))}

</div>

{/* Video Section */}

<div className="flex-1 p-10">

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold">
Course Player
</h1>
{!purchased && (

<button
onClick={handleBuy}
className="bg-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-600 font-semibold"
>
Buy Course
</button>

)}

</div>

<div className="bg-black rounded-xl overflow-hidden shadow-xl">

<VideoPlayer video={currentVideo}/>

</div>

</div>

</div>

</div>

)

}

export default CourseDetail