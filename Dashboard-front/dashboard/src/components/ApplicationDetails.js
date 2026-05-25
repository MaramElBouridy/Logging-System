// import { useEffect, useState } from "react";
// import API from "../services/api";
// import LogsTable from "./LogsTable";
// import Charts from "./Charts";

// export default function ApplicationDetails({ appName }) {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     const fetchLogs = async () => {
//       const { data } = await API.get(`/applications/${appName}/logs`, { params: { limit: 100 } });
//       setLogs(data);
//     };
//     fetchLogs();
//   }, [appName]);

//   return (
//     <div>
//       <h3>Application: {appName}</h3>
//       <LogsTable appName={appName} />
//       <Charts logs={logs} />
//     </div>
//   );
// }


export default function ApplicationDetails() {

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 mb-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}
        <div>

          <div className="flex items-center gap-3 mb-3">

            <h1 className="text-3xl font-bold text-white">
              Auth Service
            </h1>

            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
              Active
            </span>

          </div>

          <p className="text-gray-400 max-w-2xl">
            Authentication microservice responsible for login,
            registration and token validation.
          </p>

        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-black border border-gray-800 rounded-xl p-4">

            <p className="text-gray-400 text-sm">
              Total Logs
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              1,284
            </h3>

          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-4">

            <p className="text-gray-400 text-sm">
              Errors
            </p>

            <h3 className="text-2xl font-bold text-red-400 mt-2">
              24
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}