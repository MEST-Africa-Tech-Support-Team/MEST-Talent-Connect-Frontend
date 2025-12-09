import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.agree) {
      alert("Please agree to the Terms & Privacy Policy.");
      return;
    }

    console.log("Signup form submitted:", form);

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col lg:flex-row overflow-hidden">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16">
          <h1 className="text-teal-600 text-xl font-semibold">Mest Talent Connect</h1>

          <h2 className="text-xl font-semibold mt-10 border-b-2 border-teal-500 w-fit pb-1">
            Create Your Profile
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            {/* Full Name */}
            <div>
              <div className="flex items-center border-b border-gray-300 py-2 mt-1">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full outline-none"
                  placeholder="Full Name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center border-b border-gray-300 py-2 mt-1">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center border-b border-gray-300 py-2 mt-1">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  placeholder="Create a Password (8+ characters)"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer"
                >
                  {showPass ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center border-b border-gray-300 py-2 mt-1">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full outline-none"
                  placeholder="Confirm Password"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="cursor-pointer"
                >
                  {showConfirm ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
                </span>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              I agree to the Terms of Service and Privacy Policy
            </label>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md shadow-md hover:bg-teal-600 transition"
            >
              SIGN UP
            </button>
          </form>

          {/* Login Redirect */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">Already have an account?</p>
            <button
              onClick={() => navigate("/login")}
              className="text-teal-600 font-medium hover:underline"
            >
              Log in now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="hidden lg:flex w-1/2 bg-teal-500 relative items-center justify-center text-center px-10">

          {/* Floating teal bubbles */}
          <div className="absolute top-8 left-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-16 right-14 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 left-10 w-80 h-52 bg-white/10 rounded-3xl"></div>

          <div>
            <h2 className="text-white text-3xl font-bold">JOIN THE NETWORK!</h2>
            <p className="text-white text-sm mt-4 leading-relaxed">
              Create an account to access performance tracking, personalized feedback,
              <br />
              and exclusive career opportunities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}




























// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// export default function Register() {
//     const navigate = useNavigate();
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     role: "Talent", // default role
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//         try {
//       const res = await axios.post(`${BASE_URL}/auth/register`, form);
//       setMessage("🎉 Registration successful! Please log in now.");
//       console.log("Server response:", res);
      
//       // Add delay before redirect so user can see success message
//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
      
//     } catch (err) {
//       console.error("Registration error:", err);
//       setMessage("⚠️ Registration failed. Please check your details.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={form.fullName}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2 mb-3"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2 mb-3"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2 mb-4"
//           required
//         />

//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2 mb-4"
//         >
//           <option value="Talent">Talent</option>
//           <option value="Employer">Employer</option>
//         </select>

//         <button
//           type="submit"
//           className="bg-orange-500 hover:bg-orange-600 text-white w-full p-2 rounded-lg font-semibold"
//         >
//           Register
//         </button>

//         {message && (
//           <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
//         )}
//       </form>
//     </div>
//   );
// }
