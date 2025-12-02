import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { FaArrowLeft, FaPlus, FaBan, FaBuilding, FaCheck, FaEye, FaBriefcase, FaClock, FaUserCheck, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EmployerProfile() {
  return (
    <>
      <div className="flex bg-gray-50 min-h-screen">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="ml-16 md:ml-64 flex-1 min-h-screen">

          {/* Header */}
          <AdminDashboardHeader
            title="Employer Profile"
            subtitle="Manage your MEST employer profile"
            user={{ fullName: "John Admin" }}
          />

          {/* Page Content */}
          <div className="p-4 space-y-6">

            {/* Top Navigation Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

              {/* Back link */}
              <Link to={"/admin-employers-management"} className="flex items-center text-teal-600 text-sm font-medium hover:underline">
                <FaArrowLeft size={12} className="mr-2" />
                Back to Employer Management
              </Link>

              {/* Buttons */}
              <div className="flex items-center gap-2 md:gap-3">
                <button className="px-2 py-1 md:px-4 md:py-2 bg-[#28BBBB] text-white text-xs md:text-sm rounded-sm flex items-center gap-1 md:gap-2">
                  <FaPlus size={16} /> Add New Job
                </button>

                <button className="px-2 py-1 md:px-4 md:py-2 bg-[#FFBC45] text-white text-xs md:text-sm rounded-sm flex items-center gap-1 md:gap-2">
                  <FaCheck size={16} /> Verify Employer
                </button>

                <button className="px-2 py-1 md:px-4 md:py-2 bg-[#FF6221] text-white text-xs md:text-sm rounded-sm flex items-center gap-1 md:gap-2">
                  <FaBan size={16} /> Suspend Employer
                </button>
              </div>
            </div>

            {/* Main Layout (Left Cards + Right Table Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* LEFT COLUMN (Cards) */}
              <div className="lg:col-span-1 space-y-6">

                {/* Company Overview */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="font-semibold text-gray-700 text-lg mb-4">Company Overview</h3>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-[#28BBBB] flex items-center justify-center">
                      <span className="font-bold text-white text-xl"><FaBuilding /></span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700">TechCorp Solutions</p>
                      <p className="text-sm text-gray-500">Technology & Software</p>
                    </div>
                  </div>

                  <div className="text-sm mb-2 text-gray-700">
                    <p className="font-medium text-gray-500">Location:</p>
                    <p>San Francisco, CA, USA</p>
                  </div>

                  <div className="text-sm mb-2 text-gray-500">
                    <p className="font-medium">Website:</p>{" "}
                    <a href="#" className="text-teal-600">www.techcorp.com</a>
                  </div>

                  <div className="text-sm text-gray-500">
                    <p className="font-medium">Description</p>
                    <p className="text-gray-700">
                      Leading technology company specializing in innovative software
                      solutions for enterprise clients.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="font-semibold text-lg mb-4 text-gray-700">Contact Information</h3>

                  <p className="text-sm mb-2">
                    <span className="font-medium text-gray-500">Primary Contact</span><br />
                    <span className="font-bold text-gray-700">Sarah Johnson</span> <br />
                    <span className="text-gray-500">HR Director</span>
                  </p>

                  <p className="text-sm mb-2">
                    <span className="font-medium text-gray-500">Email:</span><br />
                    <span className="font-bold text-gray-500">sarah.johnson@techcorp.com</span>
                  </p>

                  <p className="text-sm">
                    <span className="text-gray-500 font-medium">Phone:</span><br />
                    <span className="font-bold text-gray-500">+1 (555) 123-4567</span>
                  </p>
                </div>

                {/* Verification & Status */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="font-semibold text-lg mb-4 text-gray-700">Verification & Status</h3>

                  <p className="text-sm mb-3 flex items-center justify-between gap-2">
                    <span className="font-medium text-gray-500">Verification Status:</span>
                    <span className="px-3 py-1 bg-[#00CA9B] text-white text-xs rounded-full">
                      Verified
                    </span>
                  </p>

                  <p className="text-sm mb-3 flex items-center justify-between gap-2">
                    <span className="font-medium text-gray-500">Account Status:</span>
                    <span className="px-3 py-1 bg-[#B627A1] text-white text-xs rounded-full">
                      Active
                    </span>
                  </p>

                  <p className="text-sm text-gray-700 font-medium">
                    <span className="text-gray-500">Date Joined:</span><br />
                    March 15, 2023
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN (Open Positions Table + Activity Box) */}
              <div className="lg:col-span-2 space-y-6">

                {/* Open Positions Table */}
                <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">
                  <h3 className="font-semibold text-lg mb-4 text-gray-700">Open Positions</h3>

                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b text-sm text-gray-500">
                        <th className="py-2">Job Title</th>
                        <th className="pr-4 md:pr-0">Type</th>
                        <th className="pr-4 md:pr-0">Category</th>
                        <th className="pr-4 md:pr-0">Experience</th>
                        <th className="pr-4 md:pr-0">Salary</th>
                        <th className="pr-4 md:pr-0">Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {[
                        {
                          title: "Senior Software Engineer",
                          type: "Full-time",
                          category: "Engineering",
                          exp: "5+ years",
                          salary: "$120k - $150k",
                          status: "Open",
                        },
                        {
                          title: "Product Manager",
                          type: "Remote",
                          category: "Product",
                          exp: "3+ years",
                          salary: "$90k - $120k",
                          status: "Open",
                        },
                        {
                          title: "UX Designer",
                          type: "Contract",
                          category: "Design",
                          exp: "2+ years",
                          salary: "$70k - $90k",
                          status: "Open",
                        },
                        {
                          title: "Data Scientist",
                          type: "Full-time",
                          category: "Data",
                          exp: "4+ years",
                          salary: "$110k - $140k",
                          status: "Open",
                        },
                      ].map((job, index) => (
                        <tr key={index} className="border-b text-sm">
                          <td className="py-3 pr-4 md:pr-0 text-gray-700 font-medium">{job.title}</td>
                          <td className="pr-4 md:pr-0">
                            <span className="px-3 py-1 rounded text-white text-xs bg-[#00CA9B] whitespace-nowrap">
                              {job.type}
                            </span>
                          </td>
                          <td className="text-xs text-gray-500 font-medium pr-4 md:pr-0">{job.category}</td>
                          <td className="text-xs text-gray-500 font-medium pr-4 md:pr-0">{job.exp}</td>
                          <td className="text-xs text-gray-500 font-medium pr-4 md:pr-0 whitespace-nowrap">{job.salary}</td>
                          <td className="pr-4 md:pr-0">
                            <span className="text-xs text-white font-medium bg-[#28BBBB] px-3 py-1 rounded">
                              {job.status}
                            </span>
                          </td>
                          <td>
                            <button className="text-xs text-teal-600 font-medium flex items-center gap-1 align-items-center"><span><FaEye /></span>View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Employer Activity */}
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="font-semibold text-lg mb-4 text-gray-700">Employer Activity</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#28BBBB] text-white flex items-center justify-center rounded-lg mx-auto mb-2">
                        <FaBriefcase />
                      </div>
                      <p className="font-bold text-gray-700">12</p>
                      <p className="text-gray-500 text-sm">Roles Posted</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#00CA9B] text-white flex items-center justify-center rounded-lg mx-auto mb-2">
                        <FaUserCheck size={20} />
                      </div>
                      <p className="font-bold text-gray-700">8</p>
                      <p className="text-gray-500  text-sm">Hires Made</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#FF6221] text-white flex items-center justify-center rounded-lg mx-auto mb-2">
                        <FaCalendar />
                      </div>
                      <p className="font-bold text-gray-700">24</p>
                      <p className="text-gray-500  text-sm">Interviews Scheduled</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#B627A1] text-white flex items-center justify-center rounded-lg mx-auto mb-2">
                        <FaClock />
                      </div>
                      <p className="font-bold text-gray-700">2 days ago</p>
                      <p className="text-gray-500  text-sm">Last Active</p>
                    </div>

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