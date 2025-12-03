import React from "react";
import { FaExclamationTriangle, FaStar } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom"

const mockPendingCheckins = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    due: "Due in 2 days",
    checkinType: "30-Day Check-in",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    due: "Overdue",
    checkinType: "90-Day Review",
  },
  {
    id: 3,
    name: "Amara Osei",
    role: "Product Manager",
    due: "Due today",
    checkinType: "60-Day Check-in",
  },
  {
    id: 4,
    name: "Amara Osei",
    role: "Product Manager",
    due: "Due today",
    checkinType: "60-Day Check-in",
  },
];

const mockTalentHistory = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    dateHired: "Sep 15, 2024",
    lastCheckin: "Sep 12, 2024",
    nextCheckin: "Oct 20, 2024",
    satisfaction: 4,
    status: "Active",
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    dateHired: "Jul 28, 2024",
    lastCheckin: "Sep 28, 2024",
    nextCheckin: "Oct 22, 2024",
    satisfaction: 5,
    status: "Active",
  },
  {
    name: "Emma Williams",
    role: "Data Analyst",
    dateHired: "Aug 12, 2024",
    lastCheckin: "Sep 12, 2024",
    nextCheckin: "Oct 25, 2024",
    satisfaction: 4.5,
    status: "Active",
  },
  {
    name: "James Rodríguez",
    role: "Full Stack Developer",
    dateHired: "Jun 05, 2024",
    lastCheckin: "Oct 05, 2024",
    nextCheckin: "Jan 05, 2025",
    satisfaction: 5,
    status: "Active",
  },
];

export default function Feedback() {
  const navigate = useNavigate();



  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-6 md:p-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Performance Tracking & Feedback
        </h1>
        <p className="text-gray-500 mt-1">
          Monitor your placed talent and complete automated check-ins to ensure
          retention success.
        </p>
      </div>

      {/* Pending Check-ins */}
      <div className="bg-white rounded-xl shadow-sm mt-8 p-6">
        <div className="flex items-center gap-2 mb-5">
          <FaExclamationTriangle className="text-pink-500 text-lg" />
          <h2 className="font-semibold text-gray-800">
            Action Required: Pending Check-ins
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockPendingCheckins.map((person) => (
            <div
              key={person.id}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-800">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
              <p
                className={`mt-1 text-sm font-medium ${person.due.includes("Overdue") || person.due.includes("Due")
                    ? "text-red-500"
                    : "text-gray-500"
                  }`}
              >
                {person.due}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {person.checkinType}
              </p>
              <button onClick={() => navigate('/employer/feedback-form')} className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg text-sm font-medium">
                Submit Feedback
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Talent History Table */}
      {/* Hired Talent */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Hired Talent History</h2>


        <div className="flex items-center justify-between mt-4">
          {/* <div className="flex items-center gap-2 text-gray-700">
            <FiMenu />
          </div> */}
          <input
            type="text"
            placeholder="Search talents, companies..."
            className="border p-2 rounded-md w-64 text-sm"
          />
          <button onClick={() => navigate('/employer/hiring-analytics') } className="border px-4 py-2 rounded-md bg-white text-sm">
            View All
          </button>
        </div>


        <table className="w-full mt-6 bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-4 text-left">Talent Name</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Date Hired</th>
              <th className="p-4 text-left">Last Check-in</th>
              <th className="p-4 text-left">Next Check-in</th>
              <th className="p-4 text-left">Satisfaction</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTalentHistory.map((h, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="p-4">{h.name}</td>
                <td className="p-4 text-gray-600">{h.role}</td>
                <td className="p-4 text-gray-700">{h.dateHired}</td>
                <td className="p-4 text-gray-700">{h.lastCheckin}</td>
                <td className="p-4 text-gray-700">{h.nextCheckin}</td>
                <td className="p-4 flex items-center gap-1">
                  {Array.from({ length: Math.round(h.satisfaction) }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {h.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
