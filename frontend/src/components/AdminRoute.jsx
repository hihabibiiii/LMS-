import { Navigate } from "react-router-dom"

function AdminRoute({children}){

const token = localStorage.getItem("token")
const isAdmin = JSON.parse(localStorage.getItem("is_admin"))

if(!token){
return <Navigate to="/login"/>
}

if(!isAdmin){
return <Navigate to="/dashboard"/>
}

return children

}

export default AdminRoute