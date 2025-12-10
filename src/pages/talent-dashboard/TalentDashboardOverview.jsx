import TalentSidebar from "../../components/TalentSidebar";
import TalentDashboardHeader from "../../components/TalentDashboardHeader";
import {
  FaStar,
  FaFileAlt,
  FaCalendar,
  FaChartLine,
  FaClock,
  FaDollarSign,
  FaGlobe,
  FaChevronDown,
  FaExclamation,
  FaArrowRight,
  FaBell,
  FaPaperPlane,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router";
import AdminSecondStatsGrid from "../../components/AdminSecondStatsGrid";

const statsData = [
  {
    label: "Interviews Scheduled",
    value: "3",
    color: "#B627A1",
    icon: <FaCalendar />,
  },
  {
    label: "Active Applications",
    value: "7",
    color: "#28BBBB",
    icon: <FaFileAlt />,
  },
  {
    label: "Profile Match Score",
    value: "87%",
    color: "#FF6221",
    icon: <FaStar />,
  },
  {
    label: "Profile Views",
    value: "142",
    color: "#28BBBB",
    icon: <FaChartLine />,
  },
];

export default function TalentDashboardOverview() {
  return (
    <>
      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <TalentSidebar />

        {/* MAIN CONTENT */}
        <div className="ml-16 md:ml-64 flex-1">
          <TalentDashboardHeader
            title="Dashboard Overview"
            subtitle="Overview of the talent dashboard"
            user={{ fullName: "John Doe" }}
          />

          <div className="p-4 md:p-6">
            {/* Greeting */}
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                <span>Good afternoon</span>, <span>John Doe!</span>
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back to your MEST Talent Connect hub.
              </p>
            </div>

            {/* Stats Cards */}
            <AdminSecondStatsGrid stats={statsData} />

            {/* TWO COLUMN LAYOUT */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT — CURRENT AVAILABILITY CARD */}
              <div className="bg-[#28BBBB] rounded-xl shadow-sm p-5 border border-gray-100">
                <h2 className="text-white font-semibold mb-4">
                  Your Current Availability Status
                </h2>

                <div className="text-white rounded-lg p-4">
                  {/* Status Row */}
                  <div className="bg-white/30 border border-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Current Status</span>
                      <span className="text-xs px-2 py-1 bg-[#22C55E] text-white rounded-full">
                        Active
                      </span>
                    </div>
                    {/* Dropdown (static UI) */}
                    <div className="mt-3 bg-white text-gray-700 rounded-lg p-2 flex justify-between items-center text-sm cursor-pointer">
                      Actively Looking
                      <span><FaChevronDown /></span>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="mt-4 space-y-3 text-white text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-lg p-1 bg-white/30 border-white/20 rounded"><FaGlobe className=""/></span> Remote Preferred
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg p-1 bg-white/30 border-white/20 rounded"><FaClock className=""/></span> Full-time Positions
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg p-1 bg-white/30 border-white/20 rounded"><FaDollarSign className=""/></span> $80k - $120k Range
                    </div>
                  </div>

                  <button className="mt-5 w-full bg-white text-[#28BBBB] font-medium py-2 rounded-lg shadow hover:bg-gray-100 text-sm">
                    View My Visibility Profile
                  </button>
                </div>
              </div>

              {/* RIGHT — NOTIFICATIONS */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h2 className="text-lg font-bold mb-4 text-gray-700">
                  Recent MEST Notifications & Activity Timeline
                </h2>

                {/* TODAY SECTION */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Today
                  </h3>

                  {/* Notification 1 */}
                  <div className="flex items-start gap-3 mb-5">
                    <span className="text-[#28BBBB] text-lg bg-[#28BBBB]/10 p-2 rounded-full">
                      <FaCalendar />
                    </span>

                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        Interview Scheduled: Senior Dev Role at TechCorp
                      </p>
                      <p className="text-xs text-gray-500">Tomorrow at 2:00 PM</p>

                      <Link
                        to="#"
                        className="text-[#28BBBB] text-sm font-medium mt-1 flex gap-1 items-center"
                      >
                        View Details <FaArrowRight />
                      </Link>
                    </div>
                  </div>

                  {/* Notification 2 */}
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-500 text-lg bg-yellow-500/10 p-2 rounded-full">
                      <FaExclamation />
                    </span>

                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        Action Required: Your Profile is 80% Complete
                      </p>
                      <p className="text-xs text-gray-500">
                        Complete your profile to increase visibility
                      </p>

                      <button className="mt-2 bg-[#28BBBB] text-white text-sm px-3 py-1 rounded-sm">
                        Complete Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* LAST WEEK SECTION */}
                <h3 className="text-sm font-semibold text-gray-500 mb-4">
                  Last Week
                </h3>

                {/* Notification 3 */}
                <div className="flex items-start gap-3 mb-5">
                  <span className="text-purple-500 text-lg bg-purple-500/10 p-2 rounded-full">
                    <FaBell />
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      Event Alert: MEST Alumni Mixer registration is now open
                    </p>
                    <p className="text-xs text-gray-500">
                      December 15, 2024 at 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Notification 4 */}
                <div className="flex items-start gap-3 mb-5">
                  <span className="text-green-500 text-lg bg-green-500/20 p-2 rounded-full">
                    <FaMessage />
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      New Feedback received from your screening interview
                    </p>
                    <p className="text-xs text-gray-500">December 1, 2024</p>

                    <Link
                      to="#"
                      className="text-teal-600 text-sm font-medium mt-1 flex gap-1 items-center"
                    >
                      Read Feedback <FaArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Notification 5 */}
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg bg-blue-500/10 p-2 rounded-full">
                    <FaPaperPlane />
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      Application Submitted: Full Stack Developer at StartupXYZ
                    </p>
                    <p className="text-xs text-gray-500">November 28, 2024</p>
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