import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 z-20">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4">
          <Outlet />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar mobile />
    </div>
  );
}
