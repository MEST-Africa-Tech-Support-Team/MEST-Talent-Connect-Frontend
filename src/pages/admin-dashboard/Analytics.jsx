import React, { useMemo } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaBuilding, FaUsers, FaHandshake, FaPercent } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Analytics() {
  // Sample stats for the top 4 cards
  const stats = [
    {
      id: "employers",
      title: "1,247",
      subtitle: "Total Employers",
      meta: "+12.5%",
      icon: <FaBuilding className="text-white" />,
      iconWrap: "bg-purple-100",
      iconBg: "bg-[#B627A1]",
    },
    {
      id: "talents",
      title: "345",
      subtitle: "Talents Added within the week",
      meta: "+8.3%",
      icon: <FaUsers className="text-white" />,
      iconBg: "bg-[#FF6221]",
    },
    {
      id: "open",
      title: "789",
      subtitle: "Total Open Positions",
      meta: "+15.7%",
      icon: <FaHandshake className="text-white" />,
      iconBg: "bg-[#FFBC45]",
    },
    {
      id: "calls",
      title: "74.5%",
      subtitle: "Calls requested per day",
      meta: "+2.1%",
      icon: <FaPercent className="text-white" />,
      iconBg: "bg-[#28BBBB]",
    },
  ];

  // Chart data for Hiring Pipeline
  const chartData = useMemo(
    () => ({
      labels: ["Shortlisted", "Screening", "Interview", "Offer", "Placed"],
      datasets: [
        {
          label: "Candidates",
          data: [24, 18, 12, 6, 4],
          backgroundColor: "#14B8A6", // teal-400 / tailwind style
          borderColor: "#0F766E",
          borderWidth: 0,
          borderRadius: 6,
          barPercentage: 0.6,
        },
      ],
    }),
    []
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#475569" }, // Gray-600
        },
        y: {
          beginAtZero: true,
          grid: { color: "#EEF2F7" }, // Subtle grid
          ticks: { color: "#475569" },
        },
      },
    }),
    []
  );

  // Skill data for right-hand panel
  const skills = [
    { name: "React.js", pct: 80 },
    { name: "Node.js", pct: 70 },
    { name: "Python", pct: 60 },
    { name: "UI/UX Design", pct: 50 },
  ];

  // Top industries
  const industries = [
    { name: "FinTech", hires: 234, pct: 32 },
    { name: "E-commerce", hires: 189, pct: 26 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen overflow-x-hidden">
        <AdminDashboardHeader
          title="Analytics"
          subtitle="Overview of hiring, pipeline, and requested skills"
          user={{ fullName: "John Admin" }}
        />

        {/* Top stat cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {stats.map((s) => (
            <div key={s.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{s.subtitle}</p>
                <p className="text-2xl font-semibold mt-1">{s.title}</p>
                <p className="text-xs text-green-500 mt-2">{s.meta}</p>
              </div>
              <div className={`${s.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}>{s.icon}</div>
            </div>
          ))}
        </div>

        {/* Main grid: Hiring Pipeline (left) and right panels */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          {/* Left: Chart area spans 2 columns on large screens */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-gray-800">Hiring Pipeline</h3>
              <div>
                <select className="border rounded-md px-3 py-2 text-sm">
                  <option>All Positions</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <div className="h-64 md:h-72">
                <Bar data={chartData} options={chartOptions} />
              </div>

              {/* Summary counts under chart */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <SummaryBox label="Shortlisted" value="24" accent="text-teal-600" />
                <SummaryBox label="Screening" value="18" accent="text-indigo-600" />
                <SummaryBox label="Interview" value="12" accent="text-yellow-600" />
                <SummaryBox label="Offer" value="6" accent="text-pink-600" />
                <SummaryBox label="Placed" value="4" accent="text-green-600" />
              </div>
            </div>
          </div>

          {/* Right column: Skills + Industries */}
          <div className="space-y-6">
            {/* Top Requested Skills */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="text-md font-medium mb-3">Top Requested Skills</h4>
              <div className="space-y-3">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm text-gray-700">{s.name}</div>
                      <div className="text-sm text-gray-500">{s.pct}%</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${s.pct}%`, background: "#14B8A6" }} /* teal */
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Hiring Industries */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="text-md font-medium mb-3">Top Hiring Industries</h4>
              <div className="space-y-3">
                {industries.map((ind) => (
                  <div key={ind.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center">
                        <FaBuilding className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{ind.name}</div>
                        <div className="text-xs text-gray-500">{ind.hires} hires</div>
                      </div>
                    </div>
                    <div className="text-sm text-teal-600">{ind.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Card components ---------- */

function SummaryBox({ label, value, accent = "text-teal-600" }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-100">
      <div className={`text-xl font-semibold ${accent}`}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}