import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserTie,
  FaUsers,
  FaCommentDots,
  FaChartBar,
  FaCog,
  FaCalendarPlus,
} from "react-icons/fa";

import logoteal from "../assets/logoteal.png";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center justify-center md:justify-start px-2 md:px-5 py-3 rounded-md transition text-sm ${
      isActive
        ? "bg-[#28BBBB] text-white"
        : "text-gray-600 hover:bg-teal-50 hover:text-teal-700"
    }`;

  const items = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt />, path: "/admin-dashboard" },
    { id: "employers", label: "Employers Management", icon: <FaUserTie />, path: "/admin-employers-management" },
    { id: "talents", label: "Talents Management", icon: <FaUsers />, path: "/admin-talent-management" },
    { id: "events", label: "Event Management", icon: <FaCalendarPlus />, path: "/admin-event-management" },
    { id: "feedback", label: "Feedback", icon: <FaCommentDots />, path: "/admin-feedback" },
    { id: "analytics", label: "Analytics", icon: <FaChartBar />, path: "/admin-analytics" },
    { id: "settings", label: "Settings", icon: <FaCog />, path: "/admin-settings" },
  ];

  return (
    <aside className="bg-white border-r h-screen flex flex-col fixed transition-all duration-300 w-16 md:w-64">

      {/* Logo */}
      <div className="pt-8 flex justify-center md:justify-center  border-gray-200">
        <img
          src={logoteal}
          alt="MEST"
          className="rounded-md h-8 w-auto md:w-32 md:h-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex-1 px-1 md:px-3">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} className={linkClass}>
                <span className="w-5 h-5 text-lg">{item.icon}</span>
                <span className="hidden md:inline-block ml-3">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t hidden md:block">
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} MEST
        </div>
      </div>
    </aside>
  );
}