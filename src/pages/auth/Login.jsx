import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }

    // Add your API login logic here
    console.log("Login data:", form);

    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT SIDE FORM */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16">
          <h1 className="text-xl font-semibold text-gray-900">
            MEST Talent connect
          </h1>

          <h2 className="text-xl font-semibold mt-10 border-b-2 border-teal-500 w-fit">
            Login to Talent Connect
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center border-b border-gray-300 py-2 mt-1">
                <FiLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                  placeholder="Enter password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-400" />
                  ) : (
                    <FiEye className="text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                <span className="text-gray-600">Remember Me</span>
              </label>

              <button
                type="button"
                className="text-gray-500 hover:text-teal-600 cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md shadow-md hover:bg-teal-600 transition"
            >
              LOG IN
            </button>
          </form>

          {/* Sign up */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">New here?</p>
            <button
              onClick={() => navigate("/register")}
              className="text-teal-600 font-medium hover:underline"
            >
              Sign up now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="hidden lg:flex w-1/2 bg-teal-500 relative items-center justify-center text-center px-10">
          
          {/* Background floating bubbles */}
          <div className="absolute top-10 right-12 w-36 h-36 rounded-full bg-white/10"></div>
          <div className="absolute bottom-20 left-12 w-24 h-24 rounded-full bg-white/10"></div>
          <div className="absolute top-40 left-40 w-32 h-20 rounded-3xl bg-white/10"></div>

          <div>
            <h2 className="text-white text-3xl font-bold">WELCOME BACK!</h2>
            <p className="text-white mt-4 leading-relaxed text-sm">
              Enter your details and start your journey with
              <br />
              Africa's brightest tech talent.
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

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext.jsx";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// export default function Login() {
//     const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const { login } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       // Send login info to backend
//       const res = await axios.post(`${BASE_URL}/auth/login`, form);
//       const token = res.data.token; 

//       if (token) {
//         login(token, res.data.user); // save token in browser
//         setMessage("Login successful!");
//         navigate("/employer"); // redirect to dashboard
//       } else {
//         setMessage("Login succeeded but no token found.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setMessage("Login failed. Check your email or password.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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

//         <button
//           type="submit"
//           className="bg-orange-500 hover:bg-orange-600 text-white w-full p-2 rounded-lg font-semibold"
//         >
//           Log In
//         </button>

//         {message && (
//           <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
//         )}
//       </form>
//     </div>
//   );
// }
