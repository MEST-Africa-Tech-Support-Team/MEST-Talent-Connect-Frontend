import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar"; // adjust path if your Sidebar is elsewhere

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-50">
      {/* Left sidebar */}
      <Sidebar />

      {/* Right content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}