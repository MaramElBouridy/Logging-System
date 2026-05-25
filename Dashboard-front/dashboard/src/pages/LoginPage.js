import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      
      <div className="w-full max-w-sm bg-[#111111] rounded-2xl p-8 shadow-2xl border border-gray-800">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <span className="text-white text-xl">🖥️</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-bold text-center">
          Login Page
        </h1>

        <p className="text-gray-400 text-center text-sm mt-2 mb-8">
          Infrastructure Management Suite
        </p>

        {/* Error Message */}
        <div className="bg-red-900/40 border border-red-700 text-red-300 text-sm rounded-lg p-3 mb-6">
          Please verify your identity.
        </div>

        {/* Form */}
        <LoginForm onLogin={handleLogin} />

        {/* Register */}
        <p className="text-gray-400 text-sm text-center mt-6">
          New operator?{" "}
          <Link to="/register" className="text-blue-400 cursor-pointer hover:underline">
            Register system account
          </Link>
        </p>

        {/* Footer */}
        <div className="text-center text-gray-600 text-xs mt-8 space-y-1">
          <p>Security Notice | Privacy Policy | Terms Service</p>
        </div>

      </div>
    </div>
  );
}
    