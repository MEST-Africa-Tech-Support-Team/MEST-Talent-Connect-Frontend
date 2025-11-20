import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
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

import Home from "./pages/Home.jsx";
import Overview from "./pages/admin-dashboard/Overview.jsx";
import EventManagement from "./pages/admin-dashboard/EventManagement.jsx";
import TalentManaagement from "./pages/admin-dashboard/TalentManagement.jsx";
import Analytics from "./pages/admin-dashboard/Analytics.jsx";
import DashboardFeedback from "./pages/admin-dashboard/DashboardFeedback.jsx";
import DashboardSettings from "./pages/admin-dashboard/DashboardSettings.jsx";
import EmployersManagement from "./pages/admin-dashboard/EmployersManagement.jsx";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />, // Protect everything inside Layout
    children: [
      {
        path: "/app",
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
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Login /> },

  { path: "/admin-dashboard", element: <Overview /> },
  { path: "/admin-employer-management", element: <EmployersManagement /> },
  { path: "/admin-talent-management", element: <TalentManaagement /> },
  { path: "/admin-event-management", element: <EventManagement /> },
  { path: "/admin-feedback", element: <DashboardFeedback /> },
  { path: "/admin-analytics", element: <Analytics /> },
  { path: "/admin-settings", element: <DashboardSettings /> },
]);

export default function AppRoutes() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
