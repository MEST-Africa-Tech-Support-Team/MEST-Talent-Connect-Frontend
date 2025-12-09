import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import AdminFirstStatsGrid from "../../components/AdminFirstStatsGrid";
import { FaCalendar, FaUsers, FaFileAlt, FaBook, FaCheck, FaFile, FaPlus, FaUserPlus, FaSearch } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { IoMegaphone } from "react-icons/io5";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router";

const overviewStats = [
  {
    title: "Total Users",
    value: "1,205",
    meta: "+12% from last month",
    icon: <FaUsers className="text-white text-lg" />,
    iconBg: "bg-[#B627A1]",
  },
  {
    title: "Applications",
    value: "342",
    meta: "This month",
    icon: <FaFileAlt className="text-white text-lg" />,
    iconBg: "bg-[#FF6221]",
  },
  {
    title: "Next Event",
    value: "Tech Bootcamp",
    meta: "Nov 14, 2024",
    icon: <FaCalendar className="text-white text-lg" />,
    iconBg: "bg-[#28BBBB]",
  },
  {
    title: "Total Employers",
    value: "4",
    meta: "2 starting soon",
    icon: <FaBook className="text-white text-lg" />,
    iconBg: "bg-[#FFBC45]",
  },
];

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const initialEmployers = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@company.com",
    role: "Backend Developer",
    skills: "Node.js, MongoDB, Express",
    deadline: "Jan 15, 2025",
    status: "In Review",
    submitted: "Dec 15, 2024",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@startup.io",
    role: "Frontend Developer",
    skills: "React, Angular",
    deadline: "Mar 22, 2025",
    status: "Expiring Soon",
    submitted: "Jul 08, 2025",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@techcorp.com",
    role: "Product Designer",
    skills: "Figma, UX/UI, Design Systems",
    deadline: "May 10, 2025",
    status: "Pending",
    submitted: "Feb 14, 2025",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "e.rodriguez@innovate.co",
    role: "Full-Stack Developer",
    skills: "React, Node.js, PostgreSQL",
    deadline: "Jul 08, 2025",
    status: "Shortlisted",
    submitted: "Jan 15, 2025",
  },
  {
    id: 5,
    name: "David Thompson",
    email: "d.thompson@gov.org",
    role: "Data Scientist",
    skills: "Python, Pandas, Power BI",
    deadline: "Sep 15, 2025",
    status: "Completed",
    submitted: "May 10, 2025",
  },
  {
    id: 6,
    name: "Anna Bell",
    email: "anna.bell@alpha.io",
    role: "Frontend Developer",
    skills: "Vue, React",
    deadline: "Aug 21, 2025",
    status: "Pending",
    submitted: "Jun 02, 2025",
  },
  {
    id: 7,
    name: "Sam Patel",
    email: "sam.patel@beta.co",
    role: "Backend Developer",
    skills: "Go, MongoDB",
    deadline: "Oct 01, 2025",
    status: "In Review",
    submitted: "Aug 10, 2025",
  },
];

export default function Overview() {
  // Search and filter state
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // Chart monthly data (functional)
  const chartData = useMemo(() => {
    return {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      datasets: [
        {
          label: "Applications",
          data: [150, 220, 180, 250, 280, 320],
          backgroundColor: "#28BBBB",   // teal-600
          borderColor: "#0f766e",
          borderRadius: 2,
          maxBarThickness: 40,
        },
      ],
    };
  }, []);

  const chartOptions = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }), []);

  // Derived filtered list
  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return initialEmployers.filter((e) => {
      const matchesSearch = !s || e.name.toLowerCase().includes(s);
      const matchesStatus = !statusFilter || e.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  // Reset page if filtered content shrinks
  React.useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      {/* Main content area */}
      <div className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen">
        <AdminDashboardHeader />
        <div className="overflow-x-hidden">
          <div className="">
            <AdminFirstStatsGrid stats={overviewStats} />
          </div>
          {/* Main grid below cards */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
            {/* Left: Applications Trend (span 2 on large) */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Applications Trend</h3>
              <div className="h-56 md:h-72">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
            {/* Right column: Recent Activities + Quick Actions */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h4 className="text-md font-medium mb-3">Recent Activities</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center"><FaCheck /></span>
                    <div>
                      <div className="font-medium">New applicant joined MEST Fellowship 2025</div>
                      <div className="text-xs text-gray-500">Kwame Mensah • 2 hours ago</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center"><FaFile /></span>
                    <div>
                      <div className="font-medium">Techpreneur 2024 applications closed</div>
                      <div className="text-xs text-gray-500">System • 5 hours ago</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                      <FaDollarSign />
                    </span>
                    <div>
                      <div className="font-medium">$5,000 funding disbursed to AgriLink</div>
                      <div className="text-xs text-gray-500">Finance Team • 1 day ago</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h4 className="text-md font-medium mb-3">Quick Actions</h4>
                <div className="flex flex-col gap-3">
                  <Link to={"/admin-employers-management"} className="w-full text-left px-4 py-3 rounded-lg text-[#28BBBB] border-2 border-[#28BBBB] hover:bg-[#28BBBB] transition hover:text-white font-medium  flex gap-2 items-center"><FaUserPlus /> Approve Employer</Link>
                  <Link to={"/create-event"} className="w-full text-left px-4 py-3 rounded-lg text-[#28BBBB] border-2 border-[#28BBBB] hover:bg-[#28BBBB] transition hover:text-white font-medium flex gap-2 items-center"><FaPlus /> New Event</Link>
                  <button className="w-full text-left px-4 py-3 rounded-lg text-[#28BBBB] border-2 border-[#28BBBB] hover:bg-[#28BBBB] transition hover:text-white font-medium  flex gap-2 items-center"><FaSearch /> Review Apps</button>
                  <button className="w-full text-left px-4 py-3 rounded-lg text-[#28BBBB] border-2 border-[#28BBBB] hover:bg-[#28BBBB] transition hover:text-white font-medium  flex gap-2 items-center"><IoMegaphone />Send Alert</button>
                </div>
              </div>
            </div>
          </div>
          {/* Filter/search and table */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-4 m-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 justify-between">
              <div className="flex items-center gap-3 w-full md:w-auto">
                <select
                  className="border rounded-md px-3 py-2 text-sm"
                  value={statusFilter}
                  onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                >
                  <option value="">All Status</option>
                  <option>Pending</option>
                  <option>In Review</option>
                  <option>Expiring Soon</option>
                  <option>Shortlisted</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="w-full md:w-1/3">
                <input
                  type="search"
                  placeholder="Search employers..."
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                />
              </div>
            </div>
            {/* Table: horizontally scrollable on small screens */}
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[900px] w-full text-left">
                <thead className="text-sm text-gray-500">
                  <tr>
                    <th className="py-3 pr-6">Employers</th>
                    <th className="py-3 pr-6">Roles</th>
                    <th className="py-3 pr-6">Skills Needed</th>
                    <th className="py-3 pr-6">Deadline</th>
                    <th className="py-3 pr-6">Status</th>
                    <th className="py-3 pr-6">Date Submitted</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {paged.map((r) => (
                    <tr key={r.id} className="border-t">
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                            {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </div>
                          <div>
                            <div className="font-medium">{r.name}</div>
                            <div className="text-xs text-gray-500">{r.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-6">{r.role}</td>
                      <td className="py-4 pr-6">{r.skills}</td>
                      <td className="py-4 pr-6">{r.deadline}</td>
                      <td className="py-4 pr-6">
                        <StatusBadge status={r.status} />
                      </td>
                      <td className="py-4 pr-6">{r.submitted}</td>
                    </tr>
                  ))}
                  {paged.length === 0 && (
                    <tr>
                      <td colSpan="6" className="py-6 text-center text-gray-500">No results</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between border-t p-3">
              <div className="text-sm text-gray-500">
                Showing {Math.min((page - 1) * pageSize + 1, filtered.length)} to {Math.min(page * pageSize, filtered.length)} of {filtered.length} results
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
        </div>
      </div>
    </div>
  );
}

// Component: StatusBadge
function StatusBadge({ status }) {
  const map = {
    "Pending": "bg-yellow-50 text-yellow-700",
    "In Review": "bg-indigo-50 text-indigo-700",
    "Expiring Soon": "bg-orange-50 text-orange-700",
    "Shortlisted": "bg-teal-50 text-teal-700",
    "Completed": "bg-green-50 text-green-700",
  };
  return <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${map[status] || "bg-gray-100 text-gray-700"}`}>{status}</span>;
}