import React from "react";
import Sidebar from "../components/Sidebar";
import PositionCard from "../components/PositionCard";

// Mock data for positions
const positions = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Full-time",
    posted: "Oct 15, 2024",
    deadline: "Nov 15, 2024",
    applicants: 8,
    pipelineText: "5 in review",
    progress: 65,
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Contract",
    posted: "Oct 12, 2024",
    deadline: "Nov 10, 2024",
    applicants: 12,
    pipelineText: "3 in review",
    progress: 48,
  },
  {
    id: 3,
    title: "Marketing Intern",
    type: "Internship",
    posted: "Oct 10, 2024",
    deadline: "Nov 5, 2024",
    applicants: 15,
    pipelineText: "7 in review",
    progress: 85,
  },
  {
    id: 4,
    title: "Backend Engineer",
    type: "Full-time",
    posted: "Oct 8, 2024",
    deadline: "Nov 8, 2024",
    applicants: 6,
    pipelineText: "2 in review",
    progress: 30,
  },
  {
    id: 5,
    title: "Data Scientist",
    type: "Contract",
    posted: "Oct 5, 2024",
    deadline: "Nov 5, 2024",
    applicants: 4,
    pipelineText: "1 in review",
    progress: 20,
  },
  {
    id: 6,
    title: "DevOps Engineer",
    type: "Full-time",
    posted: "Oct 3, 2024",
    deadline: "Nov 3, 2024",
    applicants: 2,
    pipelineText: "1 in review",
    progress: 40,
  },
];

function TopSummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
      <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function SearchAndFilters() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0 bg-white border rounded-lg p-4 shadow-sm">
      <input
        className="flex-1 bg-white border rounded-lg p-2 shadow-sm"
        placeholder="Search job titles..."
      />

      <div className="flex gap-2">
        <select className="border rounded-lg p-2 bg-white">
          <option>All Status</option>
        </select>
        <select className="border rounded-lg p-2 bg-white">
          <option>All Types</option>
        </select>
        <select className="border rounded-lg p-2 bg-white">
          <option>All Departments</option>
        </select>
      </div>
    </div>
  );
}

export default function OpenPositions() {
  return (
    <div className="min-h-screen flex bg-white text-slate-800">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-semibold">Open Positions</h1>
            <p className="text-sm text-gray-500">
              Manage your current hiring roles and track candidate pipelines in one view.
            </p>
          </div>

          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">
            + Post New Position
          </button>
        </div>

        <hr className="mb-6" />

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <TopSummaryCard title="Total Open Roles" value={12} />
          <TopSummaryCard title="Active Candidates" value={47} />
          <TopSummaryCard title="Positions Filled" value={8} />
          <TopSummaryCard title="Pending Reviews" value={15} />
        </section>

        <section className="mb-6">
          <SearchAndFilters />
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((p) => (
              <PositionCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
