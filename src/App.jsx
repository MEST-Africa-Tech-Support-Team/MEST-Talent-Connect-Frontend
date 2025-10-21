import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import Feedback from "./pages/Feedback";
import BrowserTalent from "./pages/BrowserTalent.jsx";
import HiringAnalytics from "./pages/HiringAnalytics.jsx";
import CommunityEvents from "./pages/CommunityEvents.jsx";
import OpenPositions from "./pages/OpenPositions.jsx";

const router = createBrowserRouter([
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
      // add more child routes here, e.g.
      // { path: "settings", element: <Settings /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}