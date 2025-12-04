import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { FiSearch, FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { FaCircle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const MOCK_TALENTS = [
  {
    id: 1,
    name: "John Mensah",
    email: "john.mensah@mest.africa",
    program: "Software Development",
    status: "Active",
    verification: "Verified",
    employment: "Employed",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Amara Okafor",
    email: "amara.okafor@mest.africa",
    program: "Data Science",
    status: "Onboarding",
    verification: "Not Verified",
    employment: "Available",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "David Kimani",
    email: "david.kimani@mest.africa",
    program: "EIT",
    status: "Active",
    verification: "Verified",
    employment: "Available",
    lastActive: "3 hours ago",
  },
  // extra rows to demonstrate pagination
  ...Array.from({ length: 24 }).map((_, i) => ({
    id: 4 + i,
    name: `Candidate ${i + 4}`,
    email: `candidate${i + 4}@example.com`,
    program: ["Software Development", "Data Science", "UX", "Product"][i % 4],
    status: ["Active", "Onboarding", "Inactive"][i % 3],
    verification: i % 2 === 0 ? "Verified" : "Not Verified",
    employment: i % 3 === 0 ? "Employed" : "Available",
    lastActive: `${(i % 24) + 1} hours ago`,
  })),
];

const STATUS_OPTIONS = ["", "Active", "Onboarding", "Inactive"];
const VERIFICATION_OPTIONS = ["", "Verified", "Not Verified"];

export default function MoreTalentManagement() {
  // filters & pagination
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [verificationFilter, setVerificationFilter] = useState("");
  const [pageSize, setPageSize] = useState(7);
  const [page, setPage] = useState(1);

  // derive filtered rows
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let rows = MOCK_TALENTS.slice();

    if (statusFilter) rows = rows.filter((r) => r.status === statusFilter);
    if (verificationFilter) rows = rows.filter((r) => r.verification === verificationFilter);
    if (q)
      rows = rows.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.program.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q)
      );

    return rows;
  }, [search, statusFilter, verificationFilter]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  // helpers
  function clearFilters() {
    setSearch("");
    setStatusFilter("");
    setVerificationFilter("");
    setPage(1);
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (fixed width in wrapper system) */}
      <AdminSidebar />

      {/* Main area: we assume AdminSidebar occupies the left and we offset with ml */}
      <div className="flex-1 min-w-0 ml-16 md:ml-64">
        <AdminDashboardHeader
          title="Manage Talents"
          subtitle="Overview of platform talents, programs and verification status"
          user={{ fullName: "John Admin" }}
        />

        <main className="p-6">
          {/* Back nav */}
          <div className="mb-4">
            <Link to={"/admin-talent-management"} className="flex items-center text-teal-600 text-sm font-medium hover:underline">
              <FaArrowLeft size={12} className="mr-2" />
              Back to Talent Management
            </Link>
          </div>

          {/* Filter Bar (search + status + verification + actions) */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
              {/* Search */}
              <div className="relative flex-1 min-w-0">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FiSearch /></span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search talents..."
                  className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
                />
              </div>

              {/* Status filter */}
              <select
                className="text-sm border rounded-lg px-3 py-2"
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s || "All Status"}</option>
                ))}
              </select>

              {/* Verification filter */}
              <select
                className="text-sm border rounded-lg px-3 py-2"
                value={verificationFilter}
                onChange={(e) => { setVerificationFilter(e.target.value); setPage(1); }}
              >
                {VERIFICATION_OPTIONS.map((v) => (
                  <option key={v} value={v}>{v || "All Verification"}</option>
                ))}
              </select>

              {/* Right actions */}
              <div className="ml-auto flex items-center gap-3">

                <button
                  className="hidden sm:inline-flex items-center gap-2 bg-teal-600 text-white px-3 py-2 rounded-lg text-sm"
                  onClick={() => alert("Open Add Talent modal (stub)")}
                >
                  <FiPlus /> Add Talent
                </button>
              </div>
            </div>

            {/* filters applied line */}
            <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
              <div>
                {(search || statusFilter || verificationFilter) ? (
                  <div>
                    <span className="font-medium">
                      {(search ? 1 : 0) + (statusFilter ? 1 : 0) + (verificationFilter ? 1 : 0)}
                    </span> filters applied
                    <button onClick={clearFilters} className="ml-3 text-teal-600 hover:underline">Clear all</button>
                  </div>
                ) : (
                  <div className="text-gray-400">No filters applied</div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500 hidden sm:block">Show</label>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={pageSize}
                  onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                >
                  <option value={5}>5</option>
                  <option value={7}>7</option>
                  <option value={10}>10</option>
                </select>
                <label className="text-sm text-gray-500 hidden sm:block">per page</label>
              </div>

            </div>
          </div>

          {/* Table and Action area (single column on small, two column on lg) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr] gap-6">
            <div className="bg-white rounded-lg shadow-sm p-4 overflow-x-auto">
              {/* Table with min width so it overflows on small screens */}
              <table className="min-w-[980px] w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-500 border-b">
                    <th className="py-3">Talent</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Verification</th>
                    <th>Employment</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {paged.map((t) => (
                    <tr key={t.id} className="border-b hover:bg-gray-50">
                      {/* Talent column: avatar + name + email */}
                      <td className="py-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-teal-600 flex-shrink-0">
                            {t.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-sm">{t.name}</div>
                            <div className="text-xs text-gray-500">{t.email}</div>
                          </div>
                        </div>
                      </td>

                      <td className="text-sm">{t.program}</td>

                      <td>
                        <span className={`inline-flex items-center gap-2 text-sm`}>
                          <FaCircle className={`text-xs ${t.status === "Active" ? "text-green-500" : t.status === "Onboarding" ? "text-yellow-500" : "text-gray-400"}`} />
                          <span className="font-medium text-sm">{t.status}</span>
                        </span>
                      </td>

                      <td>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${t.verification === "Verified" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                          {t.verification}
                        </span>
                      </td>

                      <td className="text-sm">{t.employment}</td>

                      <td className="text-sm text-gray-500">{t.lastActive}</td>

                      <td>
                        <button className="text-teal-600 text-sm font-medium">View</button>
                      </td>
                    </tr>
                  ))}

                  {paged.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-sm text-gray-500">No talents found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination controls */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-sm text-gray-600">
                  Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2 border rounded disabled:opacity-50"
                    aria-label="Previous"
                  >
                    <FiChevronLeft />
                  </button>

                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: pageCount }).slice(0, 7).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`px-3 py-1 rounded ${page === i + 1 ? "bg-teal-600 text-white" : "border text-sm"}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    {pageCount > 7 && <span className="px-2 text-sm">... {pageCount}</span>}
                  </div>

                  <button
                    onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                    disabled={page === pageCount}
                    className="p-2 border rounded disabled:opacity-50"
                    aria-label="Next"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}