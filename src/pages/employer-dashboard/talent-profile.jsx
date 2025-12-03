import { FiArrowLeft, FiUser, FiFileText } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PlacementProfile() {
    const navigate = useNavigate();
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Back */}
      {/* <div className="flex items-center gap-2 text-teal-700 cursor-pointer mb-4">
        <FiArrowLeft />
        <span>Back to Hired Talent History</span>
      </div> */}

      {/* <div className="flex items-center gap-2 text-teal-700 cursor-pointer mb-4">
        <FiArrowLeft />
        <button>
            <a href="/employer/feedback">Back to Hired Talent History</a>
        </button>
      </div> */}


        <div onClick={() => navigate('/employer/hiring-analytics')} className="flex items-center gap-2 text-teal-700 cursor-pointer mb-4">
        <FiArrowLeft />
        <span>Back to Hired Talent History</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold">Sarah Johnson - Placement Profile</h1>
      <p className="text-gray-600 mb-6">Comprehensive placement tracking and performance history</p>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-white border rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">Sarah Johnson</h2>
                <p className="text-gray-600 text-sm">Senior Software Engineer</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-green-700 bg-green-100 px-2 py-1 rounded-full">Ongoing Placement</span>
                  <span className="text-red-700 bg-red-100 px-2 py-1 rounded-full">Unavailable / Engaged</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md flex items-center gap-2 text-sm">
              <FiUser /> View Full Profile
            </button>
          </div>

          {/* Placement Details */}
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Placement Details</h3>
            <div className="grid grid-cols-3 text-sm">
              <div>
                <p className="text-gray-500">Hiring Company</p>
                <p className="font-semibold">TechCorp Solutions</p>
              </div>
              <div>
                <p className="text-gray-500"> </p>
                <p className="text-teal-700 font-medium">Full-time</p>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-6 text-sm">
              <div>
                <p className="text-gray-500">Hire Date</p>
                <p className="font-semibold">March 15, 2024</p>
              </div>
              <div>
                <p className="text-gray-500">Contract End Date</p>
                <p className="font-semibold">March 15, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-teal-700 mt-6 text-sm cursor-pointer">
              <FiFileText /> View Signed Contract
            </div>
          </div>

          {/* Key Placement Metrics */}
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Key Placement Metrics</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold">225</p>
                <p className="text-gray-600 text-sm mt-1">Days on Contract</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold">5</p>
                <p className="text-gray-600 text-sm mt-1">Total Check-ins</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-teal-700 flex justify-center items-center gap-1">
                  4.6 <FaStar className="text-teal-600" />
                </p>
                <p className="text-gray-600 text-sm mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white border rounded-xl p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Performance Check-in Timeline</h3>

          <div className="flex flex-col gap-6">
            {[
              {
                date: "October 15, 2025",
                label: "Check-in",
                title: "Quarterly Performance Review",
                rating: 5.0,
                color: "bg-green-500",
              },
              {
                date: "July 20, 2025",
                label: "Mid-point Review",
                title: "6-Month Performance Assessment",
                rating: 4.5,
                color: "bg-blue-500",
              },
              {
                date: "June 5, 2025",
                label: "Issue Logged",
                title: "Minor Communication Concern",
                rating: 4.0,
                color: "bg-yellow-500",
              },
              {
                date: "April 10, 2025",
                label: "Check-in",
                title: "30-Day Onboarding Review",
                rating: 5.0,
                color: "bg-green-500",
              },
              {
                date: "March 15, 2024",
                label: "Placement Start",
                title: "Contract Initiated",
                rating: null,
                color: "bg-gray-500",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-6">
                <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${item.color}`}></div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full mt-1 inline-block">{item.label}</span>
                  <p className="font-semibold mt-2 text-sm">{item.title}</p>

                  {item.rating && (
                    <div className="flex items-center gap-1 mt-2 text-yellow-500">
                      <FaStar />
                      <span className="text-sm text-gray-700 font-medium">{item.rating}</span>
                    </div>
                  )}

                  <p className="text-teal-700 text-sm mt-2 cursor-pointer">View Detailed Feedback →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
