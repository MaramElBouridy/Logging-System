import Navbar from "../components/Navbar";
import ApplicationList from "../components/ApplicationList";

export default function ApplicationsPage() {

  return (
    <div className="min-h-screen bg-black text-white">


      <div className="p-6 lg:p-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Applications
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all your applications
            </p>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-medium mt-4 lg:mt-0">

            + Create Application

          </button>

        </div>

        {/* Applications List */}
        <ApplicationList />

      </div>

    </div>
  );
}