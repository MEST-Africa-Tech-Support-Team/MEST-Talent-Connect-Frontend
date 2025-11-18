import React, { useContext } from "react";
import { Navigate, Outlet, } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ role }) => {
  const { token, user } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" replace />;
  if (role && user?.role !== role) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;