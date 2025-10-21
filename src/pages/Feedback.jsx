import React from "react";
import { FaExclamationTriangle, FaStar } from "react-icons/fa";

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
                className={`mt-1 text-sm font-medium ${
                  person.due.includes("Overdue") || person.due.includes("Due")
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {person.due}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {person.checkinType}
              </p>
              <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg text-sm font-medium">
                Submit Feedback
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Talent History Table */}
      <div className="bg-white rounded-xl shadow-sm mt-8 p-6 overflow-x-auto">
        <h2 className="font-semibold text-gray-800 mb-4">
          Hired Talent History
        </h2>

        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="border-b text-gray-500 text-sm">
            <tr>
              <th className="py-3 px-4">Talent Name</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Date Hired</th>
              <th className="py-3 px-4">Last Check-in</th>
              <th className="py-3 px-4">Next Check-in</th>
              <th className="py-3 px-4">Satisfaction</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTalentHistory.map((talent, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-all duration-200"
              >
                <td className="py-3 px-4 font-medium">{talent.name}</td>
                <td className="py-3 px-4">{talent.role}</td>
                <td className="py-3 px-4">{talent.dateHired}</td>
                <td className="py-3 px-4">{talent.lastCheckin}</td>
                <td className="py-3 px-4 text-red-500 font-medium">
                  {talent.nextCheckin}
                </td>
                <td className="py-3 px-4 flex items-center">
                  {Array.from({ length: Math.floor(talent.satisfaction) }).map(
                    (_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    )
                  )}
                  {talent.satisfaction % 1 !== 0 && (
                    <FaStar className="text-yellow-300 opacity-50 mr-1" />
                  )}
                </td>
                <td className="py-3 px-4">
                  <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold">
                    {talent.status}
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
