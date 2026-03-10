function AdminStats({title,value}){

return(

<div className="bg-gray-800 p-6 rounded-lg shadow">

<h3 className="text-gray-400">
{title}
</h3>

<p className="text-3xl font-bold mt-2">
{value}
</p>

</div>

)

}

export default AdminStats