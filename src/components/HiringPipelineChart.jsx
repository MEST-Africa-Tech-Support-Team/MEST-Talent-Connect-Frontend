import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Shortlisted", value: 24 },
  { name: "Screening", value: 18 },
  { name: "Interview", value: 12 },
  { name: "Offer", value: 6 },
  { name: "Placed", value: 4 },
];

export default function HiringPipelineChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Hiring Pipeline</h3>
        <select className="text-sm border border-gray-200 rounded-md px-3 py-1">
          <option>All Positions</option>
        </select>
      </div>

      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Bar dataKey="value" radius={[6,6,0,0]} fill="var(--mest-teal)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6 text-center">
        {data.map((d) => (
          <div key={d.name}>
            <div className="text-teal-600 font-bold">{d.value}</div>
            <div className="text-xs text-gray-500">{d.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
