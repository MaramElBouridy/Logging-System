import { useState } from "react";
import API from "../services/api";

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}
      <div>
        <label className="text-gray-300 text-xs uppercase tracking-wider block mb-2">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-gray-300 text-xs uppercase tracking-wider block mb-2">
          System Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="operator@system.io"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-gray-300 text-xs uppercase tracking-wider block mb-2">
          Access Key
        </label>

        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="text-gray-300 text-xs uppercase tracking-wider block mb-2">
          Confirm Access Key
        </label>

        <input
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-lg font-semibold"
      >
        Create Account →
      </button>

    </form>
  );
}