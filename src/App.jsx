import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import Layout from "./components/Layout.jsx";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import Feedback from "./pages/Feedback.jsx";
import BrowserTalent from "./pages/BrowserTalent.jsx";
import HiringAnalytics from "./pages/HiringAnalytics.jsx";
import CommunityEvents from "./pages/CommunityEvents.jsx";
import OpenPositions from "./pages/OpenPositions.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />, // Protect everything inside Layout
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <EmployerDashboard /> },
          { path: "feedback", element: <Feedback /> },
          { path: "browse-talent", element: <BrowserTalent /> },
          { path: "analytics", element: <HiringAnalytics /> },
          { path: "community-events", element: <CommunityEvents /> },
          { path: "open-positions", element: <OpenPositions /> },
        ],
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Login /> },
]);

export default function AppRoutes() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
