import { Link } from "react-router-dom"

function AdminSidebar(){

return(

<div className="w-64 bg-gray-800 min-h-screen p-6">

<h2 className="text-2xl font-bold mb-10">
Admin Panel
</h2>

<ul className="space-y-6">

<li>
<Link to="/admin">Dashboard</Link>
</li>

<li>
<Link to="/admin/create-course">Create Course</Link>
</li>

<li>
<Link to="/admin/add-lesson">Add Lesson</Link>
</li>
<li>
<Link to="/admin/courses">Manage Courses</Link>
</li>
<li>
<Link to="/admin/add-lesson">Add Lesson</Link>
</li>

<li>
<Link to="/admin/lessons">Manage Lessons</Link>
</li>

</ul>

</div>

)

}

export default AdminSidebar