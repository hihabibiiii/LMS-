import { useEffect, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { getAdminStats } from "../api/api"

function AdminDashboard(){

const [stats,setStats] = useState({
total_users:0,
total_courses:0,
total_enrollments:0
})

useEffect(()=>{

const fetchStats = async () => {

const data = await getAdminStats()

setStats(data)

}

fetchStats()

},[])

return(

<div className="flex bg-gray-900 text-white min-h-screen">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-4xl mb-10">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-6">

<div className="bg-gray-800 p-6 rounded">
<p>Total Users</p>
<h2 className="text-3xl">{stats.total_users}</h2>
</div>

<div className="bg-gray-800 p-6 rounded">
<p>Total Courses</p>
<h2 className="text-3xl">{stats.total_courses}</h2>
</div>

<div className="bg-gray-800 p-6 rounded">
<p>Total Enrollments</p>
<h2 className="text-3xl">{stats.total_enrollments}</h2>
</div>

</div>

</div>

</div>

)

}

export default AdminDashboard