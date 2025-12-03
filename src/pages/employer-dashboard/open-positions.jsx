import React from "react";
import PositionCard from "../../components/PositionCard.jsx";
import { FiClock } from "react-icons/fi";
import { FaFolderOpen, FaRegCircleCheck } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PostRequirementForm from "./post-requirement.jsx";

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

function TopSummaryCard({ title, value, Icon, bgClass = "bg-sky-100", iconClass = "text-[#FFFFFF]" }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgClass}`}>
        <Icon className={`w-6 h-6 ${iconClass}`} />
      </div>
    </div>
  );
}

function SearchAndFilters() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0 bg-white border rounded-lg p-4 shadow-sm">
      <input
        className="flex-1 bg-white border rounded-lg p-2 shadow-sm w-full"
        placeholder="Search job titles..."
      />

      <div className="flex flex-wrap gap-2 w-full md:w-auto">
        <select className="border rounded-lg p-2 bg-white flex-1 md:flex-none w-full md:w-auto">
          <option>All Status</option>
        </select>
        <select className="border rounded-lg p-2 bg-white flex-1 md:flex-none w-full md:w-auto">
          <option>All Types</option>
        </select>
        <select className="border rounded-lg p-2 bg-white flex-1 md:flex-none w-full md:w-auto">
          <option>All Departments</option>
        </select>
      </div>
    </div>
  );
}

export default function OpenPositions() {

  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex-1 flex flex-col bg-white text-slate-800">

      <main className="p-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-semibold">Open Positions</h1>
            <p className="text-sm text-gray-500">
              Manage your current hiring roles and track candidate pipelines in one view.
            </p>
          </div>

          <button onClick={() => navigate('/employer/post-requirement')} className="bg-[#28BBBB] text-white px-4 py-2 rounded-lg hover:bg-[#20a1a1]">
            + Post New Position
          </button>
          
        </div>

        <hr className="mb-6" />

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <TopSummaryCard title="Total Open Roles" value={12} Icon={FaFolderOpen} bgClass="bg-[#B627A1]" />
          <TopSummaryCard title="Active Candidates" value={47} Icon={FaUserCheck} bgClass="bg-[#FF6221]" />
          <TopSummaryCard title="Positions Filled" value={8} Icon={FaRegCircleCheck} bgClass="bg-[#f59e0b]" />
          <TopSummaryCard title="Pending Reviews" value={15} Icon={FiClock} bgClass="bg-[#16a34a]" />
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



