import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import Layout from "./components/Layout.jsx";

// Employer Dashboard Pages
import EmployerDashboard from "./pages/employer-dashboard/dashboard.jsx";
import Feedback from "./pages/employer-dashboard/feedback.jsx";
import BrowserTalent from "./pages/employer-dashboard/browse-talent.jsx";
import HiringAnalytics from "./pages/employer-dashboard/hiring-analytics.jsx";
import CommunityEvents from "./pages/employer-dashboard/community-events.jsx";
import OpenPositions from "./pages/employer-dashboard/open-positions.jsx";
import PostRequirementForm from "./pages/employer-dashboard/post-requirement.jsx";
import FeedbackForm from "./pages/employer-dashboard/feedback-form.jsx";
import PlacementProfile from "./pages/employer-dashboard/talent-profile.jsx";
import ProfileDetails from "./pages/employer-dashboard/profile-detail.jsx";

// General Pages
import Home from "./pages/Home.jsx";
import TalentRequestForm from "./pages/TalentRequest.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

// Admin Dashboard Pages
import Overview from "./pages/admin-dashboard/Overview.jsx";
import EventManagement from "./pages/admin-dashboard/EventManagement.jsx";
import EmployersManagement from "./pages/admin-dashboard/EmployersManagement.jsx";
import EmployerProfile from "./pages/admin-dashboard/EmployerProfile.jsx";
import TalentManagement from "./pages/admin-dashboard/TalentManagement.jsx";
import Analytics from "./pages/admin-dashboard/Analytics.jsx";
import FeedbackManagement from "./pages/admin-dashboard/FeedbackManagement.jsx";
import DashboardSettings from "./pages/admin-dashboard/DashboardSettings.jsx";
import MoreEmployersManagement from "./pages/admin-dashboard/MoreEmployersManagement.jsx";
import MoreTalentManagement from "./pages/admin-dashboard/MoreTalentManagement.jsx";
import AddNewEmployer from "./pages/admin-dashboard/AddNewEmployer.jsx";
import AddNewTalent from "./pages/admin-dashboard/AddNewTalent.jsx";
import MatchingTalent from "./pages/admin-dashboard/MatchingTalent.jsx";
import CreateEvent from "./pages/admin-dashboard/CreateEvent.jsx";

// -----------------------------------------------------
// CLEAN ROUTER
// -----------------------------------------------------

const router = createBrowserRouter([
  // ============================
  // EMPLOYER ROUTES
  // ============================
  {
    path: "/employer",
    element: <Layout />,
    children: [
      { index: true, element: <EmployerDashboard /> },
      { path: "dashboard", element: <EmployerDashboard /> },
      { path: "feedback", element: <Feedback /> },
      { path: "browse-talent", element: <BrowserTalent /> },
      { path: "hiring-analytics", element: <HiringAnalytics /> },
      { path: "community-events", element: <CommunityEvents /> },
      { path: "open-positions", element: <OpenPositions /> },
      { path: "post-requirement", element: <PostRequirementForm /> },
      { path: "feedback-form", element: <FeedbackForm /> },
      { path: "talent-profile/:id", element: <PlacementProfile />  },
      { path: "profile-detail", element: <ProfileDetails />  }
    ],
  },

  // ============================
  // PUBLIC ROUTES
  // ============================
  { path: "/", element: <Home /> },
  { path: "/talent-request", element: <TalentRequestForm /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Home /> },

  // ============================
  // ADMIN ROUTES
  // ============================
  { path: "/admin-dashboard", element: <Overview /> },
  { path: "/admin-employers-management", element: <EmployersManagement /> },
  { path: "/admin-employer-profile", element: <EmployerProfile /> },
  { path: "/admin-more-employers-management", element: <MoreEmployersManagement /> },
  { path: "/admin-talent-management", element: <TalentManagement /> },
  { path: "/admin-more-talent-management", element: <MoreTalentManagement /> },
  { path: "/admin-event-management", element: <EventManagement /> },
  { path: "/admin-feedback", element: <FeedbackManagement /> },
  { path: "/admin-analytics", element: <Analytics /> },
  { path: "/admin-settings", element: <DashboardSettings /> },
  { path: "/admin-add-employer", element: <AddNewEmployer /> },
  { path: "/admin-add-talent", element: <AddNewTalent /> },
  { path: "/matching-talent", element: <MatchingTalent /> },
  { path: "/create-event", element: <CreateEvent /> },
]);

// ------------------------------------------------------
// EXPORT APP ROUTES
// ------------------------------------------------------

export default function AppRoutes() {
  return (
    <RouterProvider router={router} />
  );
}
