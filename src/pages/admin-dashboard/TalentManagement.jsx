import React, { useMemo, useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader.jsx";
import {
  FaUsers,
  FaUserCheck,
  FaBriefcase,
  FaClock,
  FaEllipsisV,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const SAMPLE_TALENTS = [
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
  {
    id: 4,
    name: "Aisha Adjei",
    email: "aisha.adjei@mest.africa",
    program: "Frontend Developer",
    status: "Active",
    verification: "Verified",
    employment: "Available",
    lastActive: "5 days ago",
  },
  {
    id: 5,
    name: "Kojo Annan",
    email: "kojo.annan@mest.africa",
    program: "Backend Developer",
    status: "Onboarding",
    verification: "Not Verified",
    employment: "Available",
    lastActive: "7 hours ago",
  },
];

export default function TalentManagement() {
  // Filters & search
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // "", "Active", "Onboarding"
  const [programFilter, setProgramFilter] = useState("");
  // Pagination
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  // Data (would usually come from API)
  const [talents] = useState(SAMPLE_TALENTS);

  // Derive programs for filter options
  const programOptions = useMemo(() => {
    const unique = Array.from(new Set(talents.map((t) => t.program))).sort();
    return unique;
  }, [talents]);

  // Filter & search logic
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return talents.filter((t) => {
      const matchesSearch = !q || t.name.toLowerCase().includes(q);
      const matchesStatus = !statusFilter || t.status === statusFilter;
      const matchesProgram = !programFilter || t.program === programFilter;
      return matchesSearch && matchesStatus && matchesProgram;
    });
  }, [talents, search, statusFilter, programFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Reset page if filters reduce results
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen overflow-x-hidden">
        <AdminDashboardHeader
          title="Talent Management"
          subtitle="Oversee all MEST talent users and maintain quality standards"
          showAddButton={true}
          user={{ fullName: "John Admin" }}
        />

        {/* Four cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <StatCard
            title="Total Talent"
            value="1,247"
            meta="+12% this month"
            icon={<FaUsers className="text-white text-lg" />}
            iconBg="bg-[#B627A1]"
          />

          <StatCard
            title="Verified Profiles"
            value="892"
            meta="71.5% verified"
            icon={<FaUserCheck className="text-white text-lg" />}
            iconBg="bg-[#FFBC45]"
          />

          <StatCard
            title="Employed"
            value="456"
            meta="36.6% placement rate"
            icon={<FaBriefcase className="text-white text-lg" />}
            iconBg="bg-[#28BBBB]"
          />

          <StatCard
            title="Pending Review"
            value="67"
            meta="Needs attention"
            icon={<FaClock className="text-white text-lg" />}
            iconBg="bg-[#FF6221]"
          />
        </div>

        {/* Filters & Search */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4 m-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 text-sm text-gray-700">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h2a1 1 0 011 1v0a1 1 0 001 1h8a1 1 0 001-1v0a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1h-2a1 1 0-01-1-1v0a1 1 0-001-1H8a1 1 0-00-1 1v0a1 1 0-01-1 1H3z"
                  />
                </svg>
                <span className="font-medium">Filters:</span>
              </div>

              {/* Status filter */}
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Onboarding">Onboarding</option>
              </select>

              {/* Program filter */}
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={programFilter}
                onChange={(e) => {
                  setProgramFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All Programs</option>
                {programOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Search and Add talent button */}
            <div className="ml-auto w-full md:w-1/3 flex items-center gap-3">
              <div className="relative flex-1">
                <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search talent..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
                />
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
                + Add Talent
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4 m-4">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-left">
              <thead className="text-sm text-gray-500">
                <tr>
                  <th className="py-3 pr-6 w-8">
                    <input type="checkbox" />
                  </th>
                  <th className="py-3 pr-6">Talent</th>
                  <th className="py-3 pr-6">Program</th>
                  <th className="py-3 pr-6">Status</th>
                  <th className="py-3 pr-6">Verification</th>
                  <th className="py-3 pr-6">Employment</th>
                  <th className="py-3 pr-6">Last Active</th>
                  <th className="py-3 pr-6">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {paged.map((t) => (
                  <tr key={t.id} className="border-t">
                    <td className="py-4 pr-6 align-top">
                      <input type="checkbox" />
                    </td>

                    <td className="py-4 pr-6 align-top">
                      <div className="flex items-center gap-3">
                        <Avatar name={t.name} />
                        <div>
                          <div className="font-medium text-gray-800">{t.name}</div>
                          <div className="text-xs text-gray-500">{t.email}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 pr-6 align-top text-gray-700">{t.program}</td>

                    <td className="py-4 pr-6 align-top">
                      <StatusBadge status={t.status} />
                    </td>

                    <td className="py-4 pr-6 align-top">
                      <VerificationBadge verification={t.verification} />
                    </td>

                    <td className="py-4 pr-6 align-top">{t.employment}</td>

                    <td className="py-4 pr-6 align-top text-gray-500">{t.lastActive}</td>

                    <td className="py-4 pr-6 align-top">
                      <div className="flex items-center gap-3">
                        <a className="text-teal-600 text-sm font-medium" href="#">
                          View
                        </a>
                        <button className="text-gray-400">
                          <FaEllipsisV />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {paged.length === 0 && (
                  <tr>
                    <td colSpan="8" className="py-8 text-center text-gray-500">
                      No results
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination & summary */}
          <div className="mt-4 flex items-center justify-between border-t p-3">
            <div className="text-sm text-gray-500">
              Showing {filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1} to{" "}
              {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} results
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded border disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-3 py-1 rounded ${p === page ? "bg-teal-600 text-white" : "border"}`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                className="px-3 py-1 rounded border disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Small components ---------- */

function StatCard({ title, value, meta, icon, iconBg = "bg-teal-600", iconWrap = "bg-teal-50" }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
        <p className="text-xs text-green-500 mt-1">{meta}</p>
      </div>

      <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}>{icon}</div>
    </div>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((x) => x[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    Active: "bg-teal-50 text-teal-700",
    Onboarding: "bg-purple-50 text-purple-700",
  };
  return <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${map[status] || "bg-gray-100 text-gray-700"}`}>{status}</span>;
}

function VerificationBadge({ verification }) {
  const map = {
    Verified: "text-teal-600",
    "Not Verified": "text-orange-500",
  };
  const label = verification === "Verified" ? "Verified" : "Not Verified";
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={map[verification] === "text-teal-600" ? "text-teal-600" : "text-orange-500"}>
        {verification === "Verified" ? "✓" : "!"}
      </span>
      <span className={`text-sm font-medium ${map[verification]}`}>{label}</span>
    </div>
  );
}