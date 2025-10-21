import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [{ name: "Performance", value: 78, fill: "#ff6b21" }];

export default function GaugeChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 h-full">
      <h4 className="text-sm font-semibold mb-2">Hiring Performance</h4>
      <div style={{ width: "100%", height: 140 }}>
        <ResponsiveContainer>
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={data} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-4 text-lg font-semibold">78</div>
      <div className="text-xs text-gray-400 text-center">Performance score</div>
    </div>
  );
}
