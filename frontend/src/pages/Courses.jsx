import { useEffect, useState } from "react";
import { getCourses } from "../api/api";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";

function Courses() {

  const [courses,setCourses] = useState([]);

  useEffect(()=>{
    getCourses().then(data => setCourses(data));
  },[])

  return(

<div className="min-h-screen bg-gray-900 text-white">

<Navbar/>

{/* HERO */}

<div className="text-center py-16">

<h1 className="text-5xl font-bold mb-4">

Learn New Skills Online

</h1>

<p className="text-gray-400 text-lg">

Explore our professional courses and improve your career

</p>

</div>

{/* COURSES */}

<div className="max-w-6xl mx-auto px-6 pb-16">

<h2 className="text-3xl font-bold mb-10">

Popular Courses

</h2>

<div className="grid md:grid-cols-3 gap-8">

{courses.map(course=>(
<CourseCard key={course.id} course={course}/>
))}

</div>

</div>

</div>

  )

}

export default Courses