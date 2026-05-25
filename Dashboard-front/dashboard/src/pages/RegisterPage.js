import { useState } from "react";
import API from "../services/api";


import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

export default function RegisterPage() {
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
          Create Account
        </h1>

        <p className="text-gray-400 text-center text-sm mt-2 mb-8">
          Register New System Operator
        </p>

        {/* Form */}
        <RegisterForm />

        {/* Login Link */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already registered?{" "}

          <Link
            to="/"
            className="text-blue-400 hover:underline"
          >
            Login here
          </Link>
        </p>

        {/* Footer */}
        <div className="text-center text-gray-600 text-xs mt-8 space-y-1">
          <p>Security Notice | Privacy Policy | Terms Service</p>
          <p>● GLOBAL NODES OPERATIONAL</p>
        </div>

      </div>
    </div>
  );
}