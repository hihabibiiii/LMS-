import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-400">
        Smart LMS
      </h1>

      <div className="flex gap-8 text-lg">

        <Link to="/" className="hover:text-blue-400">
          Courses
        </Link>

        <Link to="/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>

        <button className="bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-600">
          Login
        </button>

      </div>

    </div>
  );
}

export default Navbar;