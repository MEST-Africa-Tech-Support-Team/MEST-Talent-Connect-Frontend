import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", time: 30, target: 32 },
  { month: "Feb", time: 25, target: 32 },
  { month: "Mar", time: 22, target: 32 },
];

export default function SmallLineChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <h4 className="text-sm font-semibold mb-2">Hiring Statistics</h4>
      <div style={{ height: 110 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" axisLine={false} />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="time" stroke="var(--mest-teal)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="target" stroke="#E879F9" strokeDasharray="4 4" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-2xl font-bold text-green-600">95%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-600">4.8</div>
          <div className="text-xs text-gray-400">Quality Score</div>
        </div>
      </div>
    </div>
  );
}
