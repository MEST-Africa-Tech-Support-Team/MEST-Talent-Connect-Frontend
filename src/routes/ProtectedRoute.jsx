// import React, { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext.jsx";

// const ProtectedRoute = ({ role }) => {
//   const { token, user, loading } = useContext(AuthContext);

//   if (loading) {
//     // Prevent redirecting until AuthContext finishes loading
//     return <div className="p-4 text-center">Loading...</div>;
//   }

//   if (!token) return <Navigate to="/login" replace />;
//   if (role && user?.role !== role) return <Navigate to="/app/" replace />;

//   return <Outlet />;
// };

// export default ProtectedRoute;
