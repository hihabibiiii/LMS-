import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate();


const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const handleSubmit = async (e) => {

  e.preventDefault()

  // empty check
  if(!form.name || !form.email || !form.password){
    alert("All fields are required")
    return
  }

  // email validation
  const emailPattern = /\S+@\S+\.\S+/;

  if(!emailPattern.test(form.email)){
    alert("Enter valid email")
    return
  }

  // password length
  if(form.password.length < 6){
    alert("Password must be at least 6 characters")
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

<h2 className="text-2xl mb-6">Register</h2>

<input
placeholder="Name"
className="w-full p-2 mb-4 text-black"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
className="w-full p-2 mb-4 text-black"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
placeholder="Password"
type="password"
className="w-full p-2 mb-4 text-black"
onChange={(e)=>setForm({...form,password:e.target.value})}
/>

<button className="bg-blue-500 w-full py-2 rounded">

Register

</button>

</form>

</div>

)

}

export default Register