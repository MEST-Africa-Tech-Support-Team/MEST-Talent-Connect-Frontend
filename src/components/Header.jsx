import React from "react";
import { FiBell } from "react-icons/fi";

export default function Header({ profile }) {
  // Extract safe values
  const name = profile?.name || "Loading...";
  const company = profile?.companyName || "";
  const initials = profile?.name
    ? profile.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent border-b border-gray-100">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button (visible on small screens) */}
        <button
          className="md:hidden p-2 rounded-md bg-white shadow-sm"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative" aria-label="Notifications">
          <FiBell className="text-gray-500 text-lg" />
          <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile Display */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-medium">
            {initials}
          </div>
          <div className="text-sm">
            <div className="font-medium">{name}</div>
            {company && <div className="text-xs text-gray-400">{company}</div>}
          </div>
        </div>
      </div>
    </header>
  );
}
