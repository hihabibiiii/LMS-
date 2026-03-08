import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessons, enrollCourse, markLessonComplete } from "../api/api";import VideoPlayer from "../components/VideoPlayer";
import Navbar from "../components/Navbar";

function CourseDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lessons,setLessons] = useState([]);
  const [currentVideo,setCurrentVideo] = useState(null);
const handleComplete = async (lessonId) => {

  const data = {
    user_id:1,
    lesson_id:lessonId
  }

  const res = await markLessonComplete(data)

  alert("Lesson completed")
}
  const handleEnroll = async () => {

    const token = localStorage.getItem("token")

    if(!token){
      alert("Please register or login first")
      navigate("/register")
      return
    }

    const data = {
      user_id:1,
      course_id:id
    }

    const res = await enrollCourse(data)

    alert(res.message)

    navigate("/dashboard")
  }

  useEffect(()=>{

    getLessons(id).then(data=>{
      setLessons(data)

      if(data.length > 0){
        setCurrentVideo(data[0].video_url)
      }
    })

  },[id])

  return(

<div className="min-h-screen bg-gray-900 text-white">

<Navbar/>

<div className="flex">

{/* Lessons Sidebar */}

<div className="w-80 bg-gray-800 p-6 border-r border-gray-700">

<h2 className="text-xl font-bold mb-6 text-blue-400">

Course Lessons

</h2>

{lessons.map(lesson => (

<div
key={lesson.id}
className="p-3 mb-3 rounded-lg bg-gray-700 hover:bg-blue-500 transition"
>

<div
onClick={()=>setCurrentVideo(lesson.video_url)}
className="cursor-pointer"
>

{lesson.title}

</div>

<button
onClick={()=>handleComplete(lesson.id)}
className="text-xs bg-green-500 px-2 py-1 rounded mt-2"
>

Mark Complete

</button>

</div>

))}

</div>

{/* Video Section */}

<div className="flex-1 p-10">

<div className="flex justify-between items-center mb-6">

<h1 className="text-3xl font-bold">
Course Player
</h1>

<button
onClick={handleEnroll}
className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 font-semibold"
>
Enroll Now
</button>

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