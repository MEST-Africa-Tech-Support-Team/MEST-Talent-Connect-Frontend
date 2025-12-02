import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-50">
      {/* Left sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 z-20">
        <Sidebar />
      </div>

      {/* Right content area */}
      <div className="flex-1 ml-60 overflow-y-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}