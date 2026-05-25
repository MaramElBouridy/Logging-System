// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../services/api";

// export default function ApplicationList() {
//   const [apps, setApps] = useState([]);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     const fetchApps = async () => {
//       const { data } = await API.get("/applications");
//       setApps(data);
//     };
//     fetchApps();
//   }, []);

//   const handleCreate = async () => {
//     await API.post("/applications", { name });
//     setName("");
//     const { data } = await API.get("/applications");
//     setApps(data);
//   };

//   const handleDelete = async (appName) => {
//     await API.delete(`/applications/${appName}`);
//     setApps(apps.filter(app => app.name !== appName));
//   };

//   return (
//     <div>
//       <h3>Your Applications</h3>
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New App Name" />
//       <button onClick={handleCreate}>Create</button>
//       <ul>
//         {apps.map(app => (
//           <li key={app._id}>
//             <Link to={`/applications/${app.name}`}>{app.name}</Link>
//             <button onClick={() => handleDelete(app.name)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function ApplicationList() {

  const applications = [
    {
      id: 1,
      name: "Auth Service",
      status: "Active",
      description: "Authentication microservice",
    },

    {
      id: 2,
      name: "Payment API",
      status: "Warning",
      description: "Handles payment processing",
    },

    {
      id: 3,
      name: "Logs Engine",
      status: "Active",
      description: "Centralized logging service",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {applications.map((app) => (

        <div
          key={app.id}
          className="bg-black border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
        >

          {/* Header */}
          <div className="flex items-center justify-between mb-4">

            <h3 className="text-lg font-semibold text-white">
              {app.name}
            </h3>

            <span
              className={`text-sm ${
                app.status === "Active"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            >
              {app.status}
            </span>

          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-5">
            {app.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between">

            <Link
              to={`/applications/${app.id}`}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              View Details
            </Link>

            <button className="text-red-400 hover:text-red-300 text-sm">
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}