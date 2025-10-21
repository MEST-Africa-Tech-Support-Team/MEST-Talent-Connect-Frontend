import React from "react";
import { HiHome, HiUserGroup, HiClipboardList, HiChatAlt2, HiChartBar, HiCalendar } from "react-icons/hi";

const nav = [
  { label: "Dashboard", icon: <HiHome />, active: true },
  { label: "Browse Talent", icon: <HiUserGroup /> },
  { label: "Open Positions", icon: <HiClipboardList /> },
  { label: "Feedback", icon: <HiChatAlt2 /> },
  { label: "Hiring Analytics", icon: <HiChartBar /> },
  { label: "Community & Events", icon: <HiCalendar /> },
];

export default function Sidebar({ collapsed = false }) {
  return (
    <aside className={`hidden md:flex md:flex-col w-64 bg-white border-r border-gray-100 px-6 py-8`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold">m</div>
        <div className="text-xl font-semibold text-teal-600">mest</div>
      </div>

      <nav className="flex-1">
        {nav.map((n) => (
          <div
            key={n.label}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg mb-2 cursor-pointer
              ${n.active ? "bg-teal-100 text-teal-700" : "text-gray-600 hover:bg-gray-50"}
            `}
          >
            <div className="text-lg">{n.icon}</div>
            <div className="text-sm font-medium">{n.label}</div>
          </div>
        ))}
      </nav>

      <div className="text-xs text-gray-400 mt-6">© MEST</div>
    </aside>
  );
}
