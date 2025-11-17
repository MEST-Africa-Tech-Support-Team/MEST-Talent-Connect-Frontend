import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Register() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "Talent", // default role
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

        try {
      const res = await axios.post(`${BASE_URL}/auth/register`, form);
      setMessage("🎉 Registration successful! Please log in now.");
      console.log("Server response:", res);
      
      // Add delay before redirect so user can see success message
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (err) {
      console.error("Registration error:", err);
      setMessage("⚠️ Registration failed. Please check your details.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="border rounded-lg w-full p-2 mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg w-full p-2 mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border rounded-lg w-full p-2 mb-4"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border rounded-lg w-full p-2 mb-4"
        >
          <option value="Talent">Talent</option>
          <option value="Employer">Employer</option>
        </select>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white w-full p-2 rounded-lg font-semibold"
        >
          Register
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
        )}
      </form>
    </div>
  );
}
