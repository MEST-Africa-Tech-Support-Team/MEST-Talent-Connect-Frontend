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
