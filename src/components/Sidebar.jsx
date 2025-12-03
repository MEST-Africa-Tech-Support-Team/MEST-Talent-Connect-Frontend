import React from "react";
import {
  HiHome,
  HiUserGroup,
  HiClipboardList,
  HiChatAlt2,
  HiChartBar,
  HiCalendar,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoteal from "../assets/logoteal.png";

const nav = [
  { label: "Dashboard", to: "/employer/dashboard", icon: <HiHome /> },
  { label: "Browse Talent", to: "/employer/browse-talent", icon: <HiUserGroup /> },
  { label: "Open Positions", to: "/employer/open-positions", icon: <HiClipboardList /> },
  { label: "Feedback", to: "/employer/feedback", icon: <HiChatAlt2 /> },
  { label: "Hiring Analytics", to: "/employer/hiring-analytics", icon: <HiChartBar /> },
  { label: "Community & Events", to: "/employer/community-events", icon: <HiCalendar /> },
];

export default function Sidebar({ collapsed = false }) {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition
     ${isActive ? "bg-gray-100 font-semibold text-teal-600" : ""}`;

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden md:flex md:flex-col ${
          collapsed ? "w-20" : "w-64"
        } bg-white border-r border-gray-100 px-4 py-6 transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src={logoteal}
            alt="MEST Talent Connect"
            className="w-32 h-auto object-contain"
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {nav.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClasses}>
              <div className="text-xl">{item.icon}</div>
              {!collapsed && (
                <div className="text-sm font-medium">{item.label}</div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MOBILE VERSION (SLIDE-IN IF YOU WANT LATER) */}
      <aside className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex justify-between z-50">
        {nav.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-teal-600 font-semibold" : "text-gray-500"
              }`
            }
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.label.split(" ")[0]}</span>
          </NavLink>
        ))}
      </aside>
    </>
  );
}
