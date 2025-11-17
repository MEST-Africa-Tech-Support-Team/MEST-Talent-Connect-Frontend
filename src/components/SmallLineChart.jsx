import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchHiringStatistics } from "../../api/client";

export default function SmallLineChart({ data: dashboardData }) {
  const [data, setData] = useState(dashboardData?.trends || []);
  const [successRate, setSuccessRate] = useState(0);
  const [qualityScore, setQualityScore] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        // Use dashboard data if already provided
        if (dashboardData && dashboardData.trends?.length) {
          setData(dashboardData.trends);
          setSuccessRate(dashboardData.successRate || 95);
          setQualityScore(dashboardData.qualityScore || 4.8);
          return;
        }

        // Otherwise fetch directly from API
        const res = await fetchHiringStatistics();
        const stats = res.stats || [];

        const formattedData = stats.map((item) => ({
          period: item.period,
          hiresCount: item.hiresCount || 0,
          qualityScore: item.qualityScore ?? 0,
        }));

        setData(formattedData);
        setSuccessRate(
          Math.min(100, formattedData.reduce((sum, s) => sum + s.hiresCount, 0))
        );
        setQualityScore(
          formattedData[formattedData.length - 1]?.qualityScore ?? 0
        );
      } catch (err) {
        console.error("Error fetching hiring statistics:", err);
      }
    };

    loadStats();
  }, [dashboardData]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <h4 className="text-sm font-semibold mb-2">Hiring Statistics</h4>

      <div style={{ height: 110 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="period" axisLine={false} tick={{ fontSize: 11 }} />
            <YAxis hide />
            <Tooltip
              formatter={(value, name) =>
                name === "hiresCount"
                  ? [`${value} Hires`, "Hires"]
                  : [`${value || 0}`, "Quality Score"]
              }
            />
            <Line
              type="monotone"
              dataKey="hiresCount"
              stroke="#14b8a6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="qualityScore"
              stroke="#E879F9"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="text-2xl font-bold text-green-600">{successRate}%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-pink-600">{qualityScore}</div>
          <div className="text-xs text-gray-400">Quality Score</div>
        </div>
      </div>
    </div>
  );
}
