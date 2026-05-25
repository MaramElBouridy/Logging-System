import { useState } from "react";
import API from "../services/api";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin();
    }
  };

  return (
    <form onSubmit={submitHandler} className="space-y-5">

      {/* Email */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-gray-300 text-xs uppercase tracking-wider">
            System Email
          </label>
        </div>

        <input
          type="email"
          placeholder="operator@system.io"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <div className="flex justify-between mb-2">
          <label className="text-gray-300 text-xs uppercase tracking-wider">
            Access Key
          </label>

          <span className="text-blue-400 text-xs cursor-pointer hover:underline">
            Forgot key?
          </span>
        </div>

        <input
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-blue-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-lg font-semibold"
      >
        Authenticate →
      </button>
    </form>
  );
}
