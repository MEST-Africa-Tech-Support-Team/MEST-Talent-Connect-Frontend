import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchHiringPipeline } from "../../api/client";

export default function HiringPipelineChart({ data: dashboardData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchHiringPipeline();
        console.log(" API pipeline response:", res);

        const counts = res?.talentStatusCounts || {};

        // Convert object → array for Recharts
        const formatted = Object.entries(counts).map(([key, value]) => ({
          name: key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()), // prettier labels
          value: Number(value) || 0,
        }));

        setData(formatted);
      } catch (err) {
        console.error("Error loading pipeline data:", err);
        setData([]);
      }
    };

    // Prefer data from Dashboard if passed down
    if (dashboardData && Array.isArray(dashboardData)) {
      setData(dashboardData);
    } else {
      loadData();
    }
  }, [dashboardData]);

  // Safeguard: handle case when data is not ready yet
  if (!Array.isArray(data)) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 text-center text-gray-400">
        Loading pipeline...
      </div>
    );
  }

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
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} />
            <YAxis axisLine={false} />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              fill="var(--mest-teal)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary numbers */}
      <div className="grid grid-cols-5 gap-4 mt-6 text-center">
        {Array.isArray(data) &&
          data.map((d) => (
            <div key={d.name}>
              <div className="text-teal-600 font-bold">{d.value}</div>
              <div className="text-xs text-gray-500">{d.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
