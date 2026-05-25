// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <nav>
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/register">Register</Link>
//       <button onClick={handleLogout}>Logout</button>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-gray-800 px-8 py-4 flex items-center justify-between">

      
      <div className="flex items-center gap-3">

        <div className="bg-blue-600 p-2 rounded-lg">
          <span className="text-white">🖥️</span>
        </div>

        <div>
          <h1 className="text-white font-bold text-lg">
            Logging System
          </h1>

          <p className="text-gray-500 text-xs">
            DevOps Monitoring Dashboard
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-6">

        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/applications"
          className="text-gray-300 hover:text-blue-400 transition"
        >
          Applications
        </Link>

        {/* <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm transition">
          Logout
        </button> */}

        <Link to="/"
           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm transition">
            Logout
           </Link>
      </div>
    </nav>
  );
}