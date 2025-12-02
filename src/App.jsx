import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext.jsx";
import Layout from "./components/Layout.jsx";
// import Register from "./pages/auth/Register.jsx";
// import Login from "./pages/auth/Login.jsx";


// import ProtectedRoute from "./routes/ProtectedRoute.jsx";

// Employer Dashboard Pages
import EmployerDashboard from "./pages/employer-dashboard/dashboard.jsx";
import Feedback from "./pages/employer-dashboard/feedback.jsx";
import BrowserTalent from "./pages/employer-dashboard/browse-talent.jsx";
import HiringAnalytics from "./pages/employer-dashboard/hiring-analytics.jsx";
import CommunityEvents from "./pages/employer-dashboard/community-events.jsx";
import OpenPositions from "./pages/employer-dashboard/open-positions.jsx";
import PostRequirementForm from "./pages/employer-dashboard/post-requirement.jsx";
import FeedbackForm from "./pages/employer-dashboard/feedback-form.jsx";


import Home from "./pages/Home.jsx";
import Overview from "./pages/admin-dashboard/Overview.jsx";
import EventManagement from "./pages/admin-dashboard/EventManagement.jsx";
import TalentManaagement from "./pages/admin-dashboard/TalentManagement.jsx";
import Analytics from "./pages/admin-dashboard/Analytics.jsx";
import DashboardFeedback from "./pages/admin-dashboard/DashboardFeedback.jsx";
import DashboardSettings from "./pages/admin-dashboard/DashboardSettings.jsx";
import EmployersManagement from "./pages/admin-dashboard/EmployersManagement.jsx";

const router = createBrowserRouter([
  // {
  //   element: <ProtectedRoute />, // Protect everything inside Layout
  //   children: [
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children: [
  //         { index: true, element: <EmployerDashboard /> },
  //         { path: "feedback", element: <Feedback /> },
  //         { path: "browse-talent", element: <BrowserTalent /> },
  //         { path: "analytics", element: <HiringAnalytics /> },
  //         { path: "community-events", element: <CommunityEvents /> },
  //         { path: "open-positions", element: <OpenPositions /> },
  //         { path: "post-requirement", element: <PostRequirementForm /> },
  //         { path: "feedback-form", element: <FeedbackForm /> }
  //       ],
  //     },
  //   ],
  // },

  
  // { path: "/employer/dashboard", element: <EmployerDashboard /> },
  // { path: "/employer/feedback", element: <Feedback /> },
  // { path: "/employer/browse-talent", element: <BrowserTalent /> },
  // { path: "/employer/hiring-analytics", element: <HiringAnalytics /> },
  // { path: "/employer/community-events", element: <CommunityEvents /> },
  // { path: "/employer/open-positions", element: <OpenPositions /> },
  // { path: "/employer/post-requirement", element: <PostRequirementForm /> },
  // { path: "/employer/feedback-form", element: <FeedbackForm /> },


  {
  path: "/employer",
  element: <Layout />, 
  children: [
    { path: "dashboard", element: <EmployerDashboard /> },
    { path: "feedback", element: <Feedback /> },
    { path: "browse-talent", element: <BrowserTalent /> },
    { path: "hiring-analytics", element: <HiringAnalytics /> },
    { path: "community-events", element: <CommunityEvents /> },
    { path: "open-positions", element: <OpenPositions /> },
    { path: "post-requirement", element: <PostRequirementForm /> },
    { path: "feedback-form", element: <FeedbackForm /> }
  ],
},

  { path: "/", element: <Home /> },
  // { path: "/register", element: <Register /> },
  // { path: "/login", element: <Login /> },
  { path: "*", element: <Home /> },



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
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>
  );
}
