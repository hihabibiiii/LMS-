import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessons } from "../api/api";
import VideoPlayer from "../components/VideoPlayer";

function CourseDetail() {

  const { id } = useParams();

  const [lessons,setLessons] = useState([]);
  const [currentVideo,setCurrentVideo] = useState(null);

  useEffect(()=>{

    getLessons(id).then(data=>{
      setLessons(data)
      if(data.length>0){
        setCurrentVideo(data[0].video_url)
      }
    })

  },[id])

  return(

<div className="min-h-screen flex bg-gray-50">

{/* sidebar */}

<div className="w-80 bg-white shadow-lg p-6">

<h2 className="text-xl font-bold mb-6">

Lessons

</h2>

{lessons.map(lesson=>(

<div
key={lesson.id}
onClick={()=>setCurrentVideo(lesson.video_url)}
className="p-3 mb-3 rounded-lg cursor-pointer hover:bg-blue-100"
>

{lesson.title}

</div>

))}

</div>

{/* video section */}

<div className="flex-1 p-10">

<VideoPlayer video={currentVideo}/>

</div>

</div>

  )

}

export default CourseDetail