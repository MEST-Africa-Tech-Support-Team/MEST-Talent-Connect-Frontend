import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import { FaMapMarkerAlt, FaBuilding, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const MOCK = [
  {
    id: 1,
    company: "TechCorp Solutions",
    industry: "Technology",
    city: "Nairobi",
    contactName: "Sarah Johnson",
    contactRole: "HR Manager",
    email: "sarah.j@globaltech.com",
    status: "Verified",
    openPositions: 24,
  },
  {
    id: 2,
    company: "FinServe Africa",
    industry: "Finance",
    city: "Lagos",
    contactName: "Michael Okonkwo",
    contactRole: "Recruitment Lead",
    email: "m.okonkwo@finserve.ng",
    status: "Verified",
    openPositions: 18,
  },
  {
    id: 3,
    company: "NextGen Innovations",
    industry: "Technology",
    city: "Cape Town",
    contactName: "Amara Nkosi",
    contactRole: "Talent Acquisition",
    email: "amara@nextgen.co.za",
    status: "Pending",
    openPositions: 12,
  },
  {
    id: 4,
    company: "BrightSoft Digital",
    industry: "Technology",
    city: "Accra",
    contactName: "Kwame Mensah",
    contactRole: "CEO",
    email: "kwame@brightsoft.gh",
    status: "Verified",
    openPositions: 31,
  },
  // add more rows for pagination
  ...Array.from({ length: 40 }).map((_, i) => {
    const industries = ["Technology", "Finance", "Health", "Education", "Retail"];
    const cities = ["Accra", "Lagos", "Nairobi", "Cape Town", "Kigali", "Abuja", "Kampala"];
    const statuses = ["Verified", "Pending"];
    return {
      id: 5 + i,
      company: `Company ${i + 5}`,
      industry: industries[i % industries.length],
      city: cities[i % cities.length],
      contactName: `Contact ${i + 5}`,
      contactRole: ["HR", "CTO", "Talent Manager", "CEO"][i % 4],
      email: `contact${i + 5}@example.com`,
      status: statuses[i % statuses.length],
      openPositions: Math.floor(Math.random() * 40),
    };
  }),
];

const allLocations = Array.from(new Set(MOCK.map((m) => m.city))).sort();
const allIndustries = Array.from(new Set(MOCK.map((m) => m.industry))).sort();

export default function MoreEmployersManagement() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [sortBy, setSortBy] = useState("Newest First");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  // Filtering & searching
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let rows = MOCK.slice();

    if (statusFilter) rows = rows.filter((r) => r.status === statusFilter);
    if (locationFilter) rows = rows.filter((r) => r.city === locationFilter);
    if (industryFilter) rows = rows.filter((r) => r.industry === industryFilter);

    if (q) rows = rows.filter((r) => r.company.toLowerCase().includes(q));

    // sort
    if (sortBy === "A → Z") rows = rows.sort((a, b) => a.company.localeCompare(b.company));
    else if (sortBy === "Z → A") rows = rows.sort((a, b) => b.company.localeCompare(a.company));
    else if (sortBy === "Most Openings") rows = rows.sort((a, b) => b.openPositions - a.openPositions);
    else rows = rows.sort((a, b) => b.id - a.id); // Newest First (by id / mock)

    return rows;
  }, [search, statusFilter, locationFilter, industryFilter, sortBy]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  function clearFilters() {
    setSearch("");
    setStatusFilter("");
    setLocationFilter("");
    setIndustryFilter("");
    setPage(1);
  }

  const appliedCount =
    (search ? 1 : 0) +
    (statusFilter ? 1 : 0) +
    (locationFilter ? 1 : 0) +
    (industryFilter ? 1 : 0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content (account for sidebar width on larger screens) */}
      <div className="flex-1 min-w-0 ml-16 md:ml-64">
        <AdminDashboardHeader
          title="Employers Management"
          subtitle="Manage and monitor all employer accounts"
          user={{ fullName: "John Admin" }}
        />

        <main className="p-6">
          {/* This container controls the overall layout: stacks vertically on mobile, switches to two columns on large screens (lg) */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* 1. LEFT SIDE (Filters + Table): Takes up remaining space on desktop, 100% width on mobile. */}
            <div className="flex-1 min-w-0">

              {/* Back nav */}
              <div className="mb-4 flex justify-between align-top">
                <Link to={"/admin-employers-management"} className="flex items-center text-teal-600 text-sm font-medium hover:underline">
                  <FaArrowLeft size={12} className="mr-2" />
                  Back to Employer Management
                </Link>

                <Link to={"/admin-add-employer"}
                  className="flex items-center gap-2 bg-teal-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
                >
                  <FiPlus /> Add Employer
                </Link>
              </div>

              {/* Filters row */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-col lg:flex-row gap-3 lg:items-center">
                  {/* search */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <FiSearch />
                      </span>
                      <input
                        className="pl-10 pr-3 py-2 border rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
                        placeholder="Search employers..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                      />
                    </div>
                  </div>

                  {/* status */}
                  <select
                    className="text-sm border rounded-lg px-3 py-2 bg-white"
                    value={statusFilter}
                    onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                  >
                    <option value="">All Status</option>
                    <option value="Verified">Verified</option>
                    <option value="Pending">Pending</option>
                  </select>

                  {/* location */}
                  <select
                    className="text-sm border rounded-lg px-3 py-2 bg-white"
                    value={locationFilter}
                    onChange={(e) => { setLocationFilter(e.target.value); setPage(1); }}
                  >
                    <option value="">All Locations</option>
                    {allLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>

                  {/* industry */}
                  <select
                    className="text-sm border rounded-lg px-3 py-2 bg-white"
                    value={industryFilter}
                    onChange={(e) => { setIndustryFilter(e.target.value); setPage(1); }}
                  >
                    <option value="">All Industries</option>
                    {allIndustries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* second row: filters applied / clear all */}
                <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                  <div className="whitespace-nowrap">
                    {appliedCount > 0 ? (
                      <div>
                        <span className="font-medium">{appliedCount}</span> filters applied{" "}
                        <button onClick={clearFilters} className="ml-2 text-teal-600 hover:underline">Clear all</button>
                      </div>
                    ) : (
                      <div className="text-gray-400">No filters applied</div>
                    )}
                  </div>

                  <div className="md:flex md:gap-4">
                    {/* right side: Add Employer / sort */}
                    <div className="ml-auto flex items-center gap-3">

                      <select
                        className="text-sm border rounded-lg px-3 py-2 bg-white"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option>Newest First</option>
                        <option>A → Z</option>
                        <option>Z → A</option>
                        <option>Most Openings</option>
                      </select>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
                      <div>Show</div>
                      <select
                        className="border rounded px-2 py-1"
                        value={pageSize}
                        onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                      >
                        <option value={4}>4</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                      </select>
                      <div>per page</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table container */}
              <div className="mt-6">
                <div className="bg-white rounded-lg shadow-sm p-4 overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="text-sm text-gray-500 border-b">
                        <th className="py-3">Employer Info</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Open Positions</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {paged.map((r) => (
                        <tr key={r.id} className="border-b hover:bg-gray-50">
                          <td className="py-4">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                                <FaBuilding />
                              </div>

                              <div className="min-w-0">
                                <div className="font-medium text-gray-700 text-sm">{r.company}</div>
                                <div className="text-xs text-gray-500 gap-2 mt-1 grid align-text-center">
                                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{r.industry}</span>
                                  <span className="flex items-center gap-1 px-2">
                                    <FaMapMarkerAlt className="text-gray-400" /> {r.city}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="text-sm font-medium text-gray-700">{r.contactName}</div>
                            <div className="text-xs text-gray-500">{r.contactRole}</div>
                          </td>

                          <td className="text-xs text-gray-600">{r.email}</td>

                          <td>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${r.status === "Verified"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-orange-100 text-orange-700"
                                }`}
                            >
                              {r.status}
                            </span>
                          </td>

                          <td className="text-sm font-medium text-gray-700">{r.openPositions}</td>

                          <td>
                            <div className="flex items-center gap-2">
                              <button className="px-3 py-1 border rounded-md text-sm">
                                <Link to={""} className="text-[#28BBBB] font-semibold">
                                  View
                                </Link>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}

                      {paged.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-sm text-gray-500">
                            No results found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-sm text-gray-600">
                      Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, total)} of {total} employers
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 border rounded disabled:opacity-50"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                      >
                        <FiChevronLeft />
                      </button>

                      <div className="hidden sm:flex items-center gap-1">
                        {Array.from({ length: pageCount }).slice(0, 7).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded ${page === i + 1 ? "bg-teal-600 text-white" : "border text-sm"
                              }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        {pageCount > 7 && <span className="px-2 text-sm">... {pageCount}</span>}
                      </div>

                      <button
                        className="p-2 border rounded disabled:opacity-50"
                        onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                        disabled={page === pageCount}
                      >
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div> {/* END LEFT SIDE */}

            {/* 2. RIGHT SIDE (Action Center): Full width on mobile, fixed width (320px) and sticky on desktop. */}
            <div className="w-full lg:w-[250px]">
              <aside className="lg:sticky lg:top-8">
                <div className="bg-white rounded-lg shadow-sm p-4 w-full">
                  <h3 className="font-semibold mb-3">Action Center</h3>

                  {/* Pending Verifications (unchanged content) */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Pending Verifications</div>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-orange-50 flex items-center justify-between">
                        <div>
                          <div className="font-medium">TechStart Solutions</div>
                          <div className="text-xs text-gray-500">2 days ago</div>
                        </div>
                        <div className="text-teal-600">→</div>
                      </div>

                      <div className="p-3 rounded-lg bg-orange-50 flex items-center justify-between">
                        <div>
                          <div className="font-medium">Digital Horizons</div>
                          <div className="text-xs text-gray-500">1 day ago</div>
                        </div>
                        <div className="text-teal-600">→</div>
                      </div>
                    </div>
                  </div>

                  {/* New Job Openings (unchanged content) */}
                  <div>
                    <div className="text-sm text-gray-500 mb-2">New Job Openings</div>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-purple-50 flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">Senior Developer</div>
                          <div className="text-xs text-gray-500">GlobalTech Ltd • 2 hours ago</div>
                        </div>
                        <div className="text-teal-600">→</div>
                      </div>

                      <div className="p-3 rounded-lg bg-purple-50 flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">UX Designer</div>
                          <div className="text-xs text-gray-500">BrightSoft Digital • 4 hours ago</div>
                        </div>
                        <div className="text-teal-600">→</div>
                      </div>

                      <div className="p-3 rounded-lg bg-purple-50 flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">Data Analyst</div>
                          <div className="text-xs text-gray-500">NextGen Innovations • 6 hours ago</div>
                        </div>
                        <div className="text-teal-600">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div> {/* END RIGHT SIDE */}
          </div>
        </main>

      </div>
    </div>
  );
}