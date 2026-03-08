import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate = useNavigate()

const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const handleSubmit = async(e)=>{

e.preventDefault()

if(!form.name || !form.email || !form.password){
alert("All fields required")
return
}

const res = await registerUser(form)

alert(res.message)

navigate("/")
}

return(

<div className="h-screen flex justify-center items-center bg-gray-900">

<form
onSubmit={handleSubmit}
className="bg-gray-800 p-8 rounded-xl w-96 text-white"
>

<h2 className="text-2xl mb-6 text-center">

Create Account

</h2>

<input
placeholder="Name"
className="w-full p-2 mb-4 text-black rounded"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

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

<button className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600">

Register

</button>

<p className="text-center mt-4 text-gray-400">

Already have an account?

<Link
to="/login"
className="text-blue-400 ml-1 hover:underline"
>
Login
</Link>

</p>

</form>

</div>

)

}

export default Register