import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { FaSearch, FaFilter, FaPlus, FaEye, FaBuilding, FaBriefcase, FaCheckCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router";
import AdminSecondStatsGrid from "../../components/AdminSecondStatsGrid";

const statsData = [
  {
    label: "Total Employers",
    value: "1,247",
    color: "#28BBBB",
    icon: <FaBuilding />,
  },
  {
    label: "Verified Employers",
    value: "1,247",
    color: "#00CA9B",
    icon: <FaCheckCircle />,
  },
  {
    label: "Pending Verification",
    value: "1,247",
    color: "#FF6221",
    icon: <FaClock />,
  },
  {
    label: "Total Open Positions",
    value: "1,247",
    color: "#B627A1",
    icon: <FaBriefcase />,
  },
];

export default function EmployersManagement() {
  return (
    <>
      <div className="flex bg-gray-50">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="ml-16 md:ml-64 flex-1 min-h-screen">

          <AdminDashboardHeader
            title="Employers Management"
            subtitle="Overview of all employers, job openings and hiring activity"
            user={{ fullName: "John Admin" }}
          />

          {/* PAGE CONTENT */}
          <div className="p-4">

            {/* Top Cards */}
            <div className="">
              <AdminSecondStatsGrid stats={statsData} />
            </div>

            {/* Search + Filter + Buttons */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6 border p-4 bg-white rounded-lg shadow-sm">

              {/* Left side */}
              <div className="flex flex-col md:flex-row items-center gap-3">

                {/* Search */}
                <div className="flex items-center bg-white px-3 py-2 w-full md:w-64 border rounded-md text-sm">
                  <FaSearch size={18} className="text-gray-500" />
                  <input
                    placeholder="Search employers by name"
                    className="ml-2 w-full outline-none text-sm"
                  />
                </div>

                {/* Filter */}
                <div className="flex items-center bg-white px-3 py-2 border rounded-md text-sm cursor-pointer">
                  <FaFilter size={18} className="text-gray-600" />
                  <select className="ml-2 text-sm outline-none bg-transparent">
                    <option>Verification Status</option>
                    <option>Verified</option>
                    <option>Unverified</option>
                  </select>
                </div>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center gap-3">
                <Link to={"/admin-more-employers-management"} className="px-4 py-2 border border-[#28BBBB] hover:bg-[#28BBBB] hover:text-white transition rounded-md text-sm font-medium text-[#28BBBB] flex items-center gap-2">
                  <FaEye size={16} /> View More
                </Link>

                <Link to={"/admin-add-employer"} className="px-4 py-2 bg-[#28BBBB] border border-[#28BBBB] text-white rounded-md text-sm flex items-center gap-2">
                  <FaPlus size={16} /> Add Employer
                </Link>
              </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Table Area */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Employers List</h3>

                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b text-gray-500 text-sm">
                      <th className="py-2">Employer Info</th>
                      <th>Verification Status</th>
                      <th>Open Positions</th>
                      <th>Total Hires</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        name: "TechCorp Inc.",
                        contact: "John Smith",
                        email: "john@techcorp.com",
                        status: "Verified",
                        positions: 12,
                        hires: 23,
                      },
                      {
                        name: "DataSoft Solutions",
                        contact: "Sarah Johnson",
                        email: "sarah@datasoft.com",
                        status: "Pending",
                        positions: 8,
                        hires: 12,
                      },
                      {
                        name: "Global Innovations",
                        contact: "Michael Chen",
                        email: "michael@global-inn.com",
                        status: "Verified",
                        positions: 15,
                        hires: 45,
                      },
                    ].map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-3">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.contact}</p>
                          <p className="text-xs text-gray-400">{item.email}</p>
                        </td>
                        <td>
                          <span
                            className={`px-3 py-1 rounded-full text-sm text-white ${item.status === "Verified"
                              ? "bg-[#28BBBB]"
                              : "bg-[#FF6221]"
                              }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="font-medium text-gray-700">{item.positions}</td>
                        <td className="font-medium text-[#28BBBB]">{item.hires}</td>
                        <td>
                          <Link to={"/admin-employer-profile"} className="text-[#28BBBB] font-semibold">
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right Action Panel */}
              <div className="bg-white rounded-xl shadow p-4">
                <h3 className="font-semibold mb-3 text-gray-700">Action Center</h3>

                {/* Pending Verifications */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Pending Verifications</p>

                  <div className="space-y-2">
                    <div className="p-3 bg-orange-100 border-l-4 border-orange-500">
                      InnovateSoft <br />
                      <span className="text-xs text-gray-500">Awaiting verification</span>
                    </div>

                    <div className="p-3 bg-orange-100 border-l-4 border-orange-500">
                      NextGen Solutions <br />
                      <span className="text-xs text-gray-500">Awaiting verification</span>
                    </div>
                  </div>
                </div>

                {/* New Job Openings */}
                <p className="text-sm text-gray-500 mb-2 font-medium">New Job Openings</p>

                <div className="space-y-2">
                  <div className="p-3 bg-purple-100 border-l-4 border-purple-500">
                    <span className="font-medium text-gray-700">Senior Developer</span> <br />
                    <span className="text-gray-700">TechCorp Inc.</span>
                  </div>

                  <div className="p-3 bg-purple-100 border-l-4 border-purple-500">
                    <span className="font-medium text-gray-700">Product Manager</span> <br />
                    <span className="text-gray-700">DataSystems Ltd</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}