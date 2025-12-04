// src/pages/admin/FeedbackManagement.jsx
import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import AdminSecondStatsGrid from "../../components/AdminSecondStatsGrid";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaRegCommentDots, FaClipboardList, FaUsers, FaExclamationTriangle } from "react-icons/fa";

const MOCK_FEEDBACK = [
  {
    id: 1,
    talent: { name: "Prince Tagoe", cohort: "Specialization" },
    employer: "DataSoft Solutions",
    score: 90,
    feedback:
      "Excellent performance from Sarah. She exceeded all expectations in the first 30 days and delivered on the initial project milestones with exceptional quality.",
    submittedOn: new Date("2024-12-15T14:30:00"),
    status: "Excellent",
  },
  {
    id: 2,
    talent: { name: "Sandra Otu", cohort: "Cohort 6" },
    employer: "POQA Company LTD",
    score: 20,
    feedback:
      "Communication issues with talent. Multiple missed deadlines in first month. Needs coaching and clear task definitions before next sprint.",
    submittedOn: new Date("2024-12-14T16:15:00"),
    status: "Action Required",
  },
  {
    id: 3,
    talent: { name: "Michael Kwame", cohort: "Cohort 4" },
    employer: "TechCorp Solutions",
    score: 85,
    feedback:
      "Great company culture and supportive team. Learning opportunities are excellent and the talent adapted quickly to the codebase.",
    submittedOn: new Date("2024-12-13T10:20:00"),
    status: "Excellent",
  },
  // ... add more mocks for pagination
  ...Array.from({ length: 28 }).map((_, i) => ({
    id: 4 + i,
    talent: { name: `Candidate ${i + 4}`, cohort: `Cohort ${i % 10}` },
    employer: ["Alpha Inc", "Beta LLC", "Gamma Co"][i % 3],
    score: Math.round(Math.random() * 100),
    feedback: `Sample feedback text for candidate ${i + 4}. This is an example feedback that may be long and should be truncated to three lines in the UI.`,
    submittedOn: new Date(2024, 11, 10 + (i % 20), 9 + (i % 8), 30),
    status: i % 4 === 0 ? "Action Required" : "Excellent",
  })),
];

export default function FeedbackManagement() {
  // filters & pagination
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Recent");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);

  // Stats cards data (use AdminSecondStatsGrid)
  const stats = [
    { icon: <FaRegCommentDots />, value: "2,847", label: "Total Feedback Entries", tag: "+124 this month", color: "#13C296" },
    { icon: <FaClipboardList />, value: "96", label: "Avg. Employer Satisfaction", tag: "", color: "#06B6D4" },
    { icon: <FaUsers />, value: "99", label: "Avg. Talent Performance", tag: "", color: "#8B5CF6" },
    { icon: <FaExclamationTriangle />, value: "18", label: "Negative Feedback Alerts", tag: "Requires immediate attention", color: "#FB923C" },
  ];

  // filter + search
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let rows = MOCK_FEEDBACK.slice();

    if (q) {
      rows = rows.filter((r) => {
        return (
          r.talent.name.toLowerCase().includes(q) ||
          r.employer.toLowerCase().includes(q) ||
          r.feedback.toLowerCase().includes(q)
        );
      });
    }

    // sort
    if (sortBy === "Recent") {
      rows.sort((a, b) => b.submittedOn - a.submittedOn);
    } else if (sortBy === "Oldest") {
      rows.sort((a, b) => a.submittedOn - b.submittedOn);
    } else if (sortBy === "Score: High → Low") {
      rows.sort((a, b) => b.score - a.score);
    } else if (sortBy === "Score: Low → High") {
      rows.sort((a, b) => a.score - b.score);
    }

    return rows;
  }, [search, sortBy]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  // helper to format date/time nicely
  function formatDateTime(dt) {
    const date = dt.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    const time = dt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    return { date, time };
  }

  // clear page when pageSize or filters change
  React.useEffect(() => setPage(1), [pageSize, search, sortBy]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 min-w-0 ml-16 md:ml-64">
        <AdminDashboardHeader title="Feedback Management" subtitle="Monitor and manage all feedback entries" user={{ fullName: "John Admin" }} />

        <main className="p-6">
          {/* Stats Grid */}
          <AdminSecondStatsGrid stats={stats} />

          {/* Toolbar: Title + Search + Sort */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Feedback Entries</h2>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FiSearch /></span>
                <input
                  className="pl-10 pr-3 py-2 border rounded-lg w-full md:w-72 text-sm focus:ring-1 focus:ring-teal-300"
                  placeholder="Search talents, employers, feedback..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                className="border rounded-lg px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Recent</option>
                <option>Oldest</option>
                <option>Score: High → Low</option>
                <option>Score: Low → High</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-x-auto">
            <table className="min-w-[900px] w-full text-center">
              <thead className="text-sm text-gray-500">
                <tr>
                  <th className="py-3">Most Talents</th>
                  <th>Employer</th>
                  <th>Satisfactory Score</th>
                  <th className="w-[320px]">Feedback Summary</th>
                  <th>Submitted On</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {paged.map((r) => {
                  const dt = formatDateTime(r.submittedOn);
                  return (
                    <tr key={r.id} className="border-t align-top">
                      <td className="py-4">
                        <div className="flex items-center gap-3 justify-center">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
                            {r.talent.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{r.talent.name}</div>
                            <div className="text-xs text-gray-500">{r.talent.cohort}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 text-gray-700">{r.employer}</td>

                      <td className="py-4 font-semibold text-gray-800">{r.score}</td>

                      {/* Feedback summary clipped to 3 lines */}
                      <td className="py-4 text-left px-4">
                        <div
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          className="text-sm text-gray-700"
                        >
                          {r.feedback}
                        </div>
                      </td>

                      {/* Submitted on: date + time centered */}
                      <td className="py-4">
                        <div className="text-sm text-gray-700">{dt.date}</div>
                        <div className="text-xs text-gray-500">{dt.time}</div>
                      </td>

                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            r.status === "Excellent" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>

                      <td className="py-4">
                        <button className="text-teal-600 text-sm font-medium">View</button>
                      </td>
                    </tr>
                  );
                })}

                {paged.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-gray-500">No feedback found</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-sm text-gray-600">
                Show{" "}
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={pageSize}
                  onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                >
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                </select>{" "}
                per page
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  <FiChevronLeft />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: pageCount }).map((_, i) => {
                    const p = i + 1;
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 rounded ${page === p ? "bg-teal-600 text-white" : "border text-sm"}`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  disabled={page === pageCount}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}