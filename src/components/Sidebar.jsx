import React from "react";
import { HiHome, HiUserGroup, HiClipboardList, HiChatAlt2, HiChartBar, HiCalendar } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoteal from '../assets/logoteal.png';

const nav = [
    { to: "/", label: "Dashboard", icon: <HiHome /> },
    { to: "/browse-talent", label: "Browse Talent", icon: <HiUserGroup /> },
    { to: "/open-positions", label: "Open Positions", icon: <HiClipboardList /> },
    { to: "/feedback", label: "Feedback", icon: <HiChatAlt2 /> },
    { to: "/analytics", label: "Hiring Analytics", icon: <HiChartBar /> },
    { to: "/community-events", label: "Community & Events", icon: <HiCalendar /> },
];

export default function Sidebar({ collapsed = false }) {
    const linkClasses = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition ${isActive ? "bg-gray-100 font-semibold text-teal-600" : ""
        }`;

    return (
        <aside className={`hidden md:flex md:flex-col w-64 bg-white border-r border-gray-100 px-6 py-8`}>
            <div className="flex items-center gap-3 mb-8">
                <img src={logoteal} alt="MEST Talent Connect" className="w-35 h- 12" />
            </div>

            <nav className="flex flex-col gap-1 flex-1">
                {nav.map((item) => (
                    <NavLink key={item.label} to={item.to} className={linkClasses}>
                        <div className="text-lg">{item.icon}</div>
                        <div className="text-sm font-medium">{item.label}</div>
                    </NavLink>
                ))}
            </nav>

        </aside>
    );
}
