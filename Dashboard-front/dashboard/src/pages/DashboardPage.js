import Navbar from "../components/Navbar";
import ApplicationList from "../components/ApplicationList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Main Container */}
      <div className="p-6 lg:p-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Developer Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Monitor applications, logs and system analytics
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-medium">
              + Create Application
            </button>
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

          {/* Card */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

            <p className="text-gray-400 text-sm">
              Total Applications
            </p>

            <h2 className="text-4xl font-bold mt-3">
              12
            </h2>

            <p className="text-green-400 text-sm mt-2">
              +2 this week
            </p>

          </div>

          {/* Card */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-red-500 transition">

            <p className="text-gray-400 text-sm">
              Error Logs
            </p>

            <h2 className="text-4xl font-bold mt-3 text-red-400">
              24
            </h2>

            <p className="text-red-400 text-sm mt-2">
              +5 today
            </p>

          </div>

          {/* Card */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition">

            <p className="text-gray-400 text-sm">
              Warning Logs
            </p>

            <h2 className="text-4xl font-bold mt-3 text-yellow-400">
              18
            </h2>

            <p className="text-yellow-400 text-sm mt-2">
              Stable
            </p>

          </div>

          {/* Card */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition">

            <p className="text-gray-400 text-sm">
              Info Logs
            </p>

            <h2 className="text-4xl font-bold mt-3 text-green-400">
              120
            </h2>

            <p className="text-green-400 text-sm mt-2">
              System healthy
            </p>

          </div>

        </div>

        {/* API KEY + SYSTEM STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* API KEY */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 lg:col-span-2">

            <div className="flex items-center justify-between mb-4">

              <div>
                <h2 className="text-xl font-semibold">
                  API Key
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Use this key to authenticate your applications
                </p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition">
                Copy
              </button>

            </div>

            <div className="bg-black border border-gray-800 rounded-xl p-4 overflow-x-auto">

              <code className="text-blue-400">
                sk_live_8f3h28fh28fh238fh283fh
              </code>

            </div>

          </div>

          {/* SYSTEM STATUS */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-4">
              System Status
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  Database
                </span>

                <span className="text-green-400">
                  Online
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  API Server
                </span>

                <span className="text-green-400">
                  Running
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  Logs Service
                </span>

                <span className="text-yellow-400">
                  Delayed
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

          {/* Pie Chart */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-semibold">
                  Logs Ratio
                </h2>

                <p className="text-gray-400 text-sm">
                  INFO / WARN / ERROR
                </p>
              </div>

            </div>

            <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-700 rounded-xl">

              <p className="text-gray-500">
                Pie Chart Component
              </p>

            </div>

          </div>

          {/* Line Chart */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-semibold">
                  Logs Analytics
                </h2>

                <p className="text-gray-400 text-sm">
                  Daily logs overview
                </p>
              </div>

            </div>

            <div className="h-[300px] flex items-center justify-center border border-dashed border-gray-700 rounded-xl">

              <p className="text-gray-500">
                Line Chart Component
              </p>

            </div>

          </div>

        </div>

        {/* Applications Section */}

        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 mb-8">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-2xl font-semibold">
                Applications
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Manage your applications
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition">
              + New App
            </button>

          </div>


          {/* Applications List Component */}
          <ApplicationList/>
           

        </div>

        {/* Recent Logs */}
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">

            <div>
              <h2 className="text-2xl font-semibold">
                Recent Logs
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Latest system activities
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3">

              <select className="bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm outline-none">

                <option>
                  Most Recent
                </option>

                <option>
                  Most Occurred
                </option>

              </select>

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