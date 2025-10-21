import React from "react";

export default function StatCard({ title, value, sub, icon, accent }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 flex items-center justify-between border border-gray-100">
      <div>
        <div className="text-xs text-gray-400">{title}</div>
        <div className="text-2xl font-semibold mt-1">{value}</div>
        {sub && <div className="text-xs text-green-500 mt-2">{sub}</div>}
      </div>
      <div className="ml-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white`} style={{ background: accent || "var(--mest-teal)" }}>
          {icon}
        </div>
      </div>
    </div>
  );
}
