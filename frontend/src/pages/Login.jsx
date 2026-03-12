import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/api";

function Login(){

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:""
})
const handleLogout = () => {

localStorage.removeItem("token")
localStorage.removeItem("user_id")
localStorage.removeItem("is_admin")

navigate("/login")

}
const handleSubmit = async (e) => {

e.preventDefault()

if(!form.email || !form.password){
alert("Email and password required")
return
}

try{

const res = await loginUser(form)

if(res.detail){
alert(res.detail)
return
}

// Save data
localStorage.setItem("token", res.access_token)
localStorage.setItem("user_id", res.user_id)
localStorage.setItem("is_admin", JSON.stringify(res.is_admin))
// Redirect logic
if(res.is_admin === true || res.is_admin === 1 || res.is_admin === "1"){
navigate("/admin/dashboard")
}else{
navigate("/dashboard")
}

}catch(err){

console.error(err)
alert("Login failed")

}

}

return(

<div className="h-screen flex justify-center items-center bg-gray-900">

<form
onSubmit={handleSubmit}
className="bg-gray-800 p-8 rounded-xl w-96 text-white"
>

<h2 className="text-2xl mb-6 text-center">
Login
</h2>

<input
placeholder="Email"
className="w-full p-2 mb-4 text-black rounded"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
placeholder="Password"
type="password"
className="w-full p-2 mb-4 text-black rounded"
onChange={(e)=>setForm({...form,password:e.target.value})}
/>

<button
className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600"
>
Login
</button>

</form>

</div>

)

}

export default Login