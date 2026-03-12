import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.clear()

    alert("Logged out successfully")

    navigate("/login")

  }

  return (

    <div className="bg-black text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-400">
        Smart LMS
      </h1>

      <div className="flex items-center gap-6 text-lg">

        <Link to="/" className="hover:text-blue-400">
          Courses
        </Link>

        {token && (
          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        )}

        {!token ? (

          <>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border border-blue-400 px-4 py-1 rounded-lg hover:bg-blue-400 hover:text-black"
            >
              Register
            </Link>
          </>

        ) : (

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        )}

      </div>

    </div>
  );
}

export default Navbar;