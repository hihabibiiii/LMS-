import AdminSidebar from "../components/AdminSidebar"
import AdminStats from "../components/AdminStats"

function AdminDashboard(){

return(

<div className="flex bg-gray-900 text-white">

<AdminSidebar/>

<div className="flex-1 p-10">

<h1 className="text-4xl font-bold mb-10">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-8">

<AdminStats title="Total Users" value="120"/>

<AdminStats title="Total Courses" value="15"/>

<AdminStats title="Total Enrollments" value="340"/>

</div>

</div>

</div>

)

}

export default AdminDashboard