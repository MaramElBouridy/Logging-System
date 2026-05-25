// import { useParams } from "react-router-dom";
// import LogsTable from "../components/LogsTable";
// import Charts from "../components/Charts";
// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function ApplicationPage() {
//   const { name } = useParams();
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       const { data } = await API.get(`/applications/${name}/logs`, { params: { limit: 100 } });
//       setLogs(data);
//     };
//     fetchLogs();
//   }, [name]);

//   return (
//     <div>
//       <h2>Application: {name}</h2>
//       <LogsTable appName={name} />
//       <Charts logs={logs} />
//     </div>
//   );
// }



import Navbar from "../components/Navbar";
import ApplicationDetails from "../components/ApplicationDetails";

export default function ApplicationPage() {

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="p-6 lg:p-8">

        {/* Details */}
        <ApplicationDetails />

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

          {/* Pie Chart */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-5">
              Logs Ratio
            </h2>

            <div className="h-[300px] border border-dashed border-gray-700 rounded-xl flex items-center justify-center">

              <p className="text-gray-500">
                Pie Chart Component
              </p>

            </div>

          </div>

          {/* Line Chart */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-5">
              Logs Analytics
            </h2>

            <div className="h-[300px] border border-dashed border-gray-700 rounded-xl flex items-center justify-center">

              <p className="text-gray-500">
                Line Chart Component
              </p>

            </div>

          </div>

        </div>

        {/* Logs Section */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-2xl font-semibold">
                Application Logs
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Monitor all application activities
              </p>

            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3">

              {/* Sorting */}
              <select className="bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none">

                <option>
                  Most Recent
                </option>

                <option>
                  Most Occurred
                </option>

              </select>

              {/* Level */}
              <select className="bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none">

                <option>
                  All Levels
                </option>

                <option>
                  INFO
                </option>

                <option>
                  WARN
                </option>

                <option>
                  ERROR
                </option>

              </select>

              {/* Search */}
              <input
                type="text"
                placeholder="Search logs..."
                className="bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none"
              />

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-gray-800 text-left text-gray-400 text-sm">

                  <th className="pb-4">
                    Message
                  </th>

                  <th className="pb-4">
                    Level
                  </th>

                  <th className="pb-4">
                    Count
                  </th>

                  <th className="pb-4">
                    First Occurrence
                  </th>

                  <th className="pb-4">
                    Last Occurrence
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-900 hover:bg-black transition">

                  <td className="py-4">
                    Failed to connect to database
                  </td>

                  <td className="py-4 text-red-400">
                    ERROR
                  </td>

                  <td className="py-4">
                    15
                  </td>

                  <td className="py-4 text-gray-400">
                    2025-05-20
                  </td>

                  <td className="py-4 text-gray-400">
                    2025-05-23
                  </td>

                </tr>

                <tr className="border-b border-gray-900 hover:bg-black transition">

                  <td className="py-4">
                    User authenticated successfully
                  </td>

                  <td className="py-4 text-green-400">
                    INFO
                  </td>

                  <td className="py-4">
                    102
                  </td>

                  <td className="py-4 text-gray-400">
                    2025-05-18
                  </td>

                  <td className="py-4 text-gray-400">
                    2025-05-23
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">

            <p className="text-gray-400 text-sm">
              Showing 1 - 10 logs
            </p>

            <div className="flex items-center gap-2">

              <button className="bg-black border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-blue-500 transition">
                Prev
              </button>

              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                1
              </button>

              <button className="bg-black border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-blue-500 transition">
                2
              </button>

              <button className="bg-black border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-blue-500 transition">
                Next
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}