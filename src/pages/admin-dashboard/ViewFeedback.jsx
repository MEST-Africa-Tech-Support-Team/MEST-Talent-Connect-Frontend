import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import {
  FaArrowLeft,
  FaLink,
  FaRegStar,
  FaStar,
  FaCalendarAlt,
  FaDownload,
  FaUser,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";
import { FaChartLine, FaMessage } from "react-icons/fa6";

export default function ViewFeedback() {
  // Mock data (replace with props or API data as needed)
  const feedback = {
    talent: {
      fullName: "Sarah Mitchell",
      phone: "+1 (555) 123-4567",
      email: "sarah.mitchell@email.com",
      role: "Senior Full-Stack Developer",
    },
    employer: {
      name: "TechVision Solutions Inc.",
      phone: "+1 (555) 987-6543",
      email: "hr@techvision.com",
      relationship: "Linked Job Opening – Senior Developer Position",
    },
    ratings: {
      technical: "Very High", // options: Very High, High, Neutral, Low
      cultural: "High",
      communication: "Very High",
      overall: "Very High",
    },
    details: {
      achievements:
        "Sarah consistently demonstrated exceptional technical proficiency throughout her engagement with our team. She successfully led the migration of our legacy system to a modern microservices architecture, reducing system downtime by 40% and improving overall performance metrics significantly. Her ability to mentor junior developers and share knowledge across the team has been invaluable.",
      growth:
        "While Sarah excels in technical execution, there are opportunities for growth in project management and stakeholder communication. Occasionally, technical decisions were made without fully consulting business stakeholders, leading to minor misalignments. With additional training in Agile project management methodologies and business analysis, Sarah could transition into a technical leadership role.",
      summary:
        "Sarah Mitchell is an outstanding technical professional who has made significant contributions to our organization. Her technical expertise, problem-solving abilities, and collaborative spirit make her a valuable asset to any team. We highly recommend Sarah for senior developer roles and would welcome the opportunity to work with her again.",
    },
    submittedOn: new Date("2024-12-15T14:30:00"),
    status: "Excellent",
    stars: 4, // out of 5
  };

  const formatDate = (d) =>
    d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

  const formatTime = (d) => d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <div className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen">
        <AdminDashboardHeader />

        <main className="p-6 lg:p-8">
          {/* Back nav + header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <Link to="/admin-feedback" className="text-[#28BBBB] text-sm font-medium flex items-center gap-2 hover:underline">
                <FaArrowLeft /> Back to Feedback
              </Link>

              <h1 className="mt-4 text-2xl font-semibold text-gray-800">Talent Feedback Details</h1>
              <p className="mt-1 text-sm text-gray-500">Employer-submitted performance review</p>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-3 self-start md:self-center">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < feedback.stars ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  )
                )}
              </div>
              <div className="text-sm text-gray-500">({feedback.stars}/5)</div>
            </div>
          </div>

          {/* Cards stack */}
          <div className="space-y-6">
            {/* Talent Details */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                <FaUser className="text-[#28BBBB]" /> <span>Talent Details</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <div className="font-medium text-gray-800">{feedback.talent.fullName}</div>
                  <p className="text-xs text-gray-500 mt-3">Phone Number</p>
                  <div className="text-gray-700">{feedback.talent.phone}</div>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Talent Email</p>
                  <div className="font-medium text-gray-800">{feedback.talent.email}</div>
                  <p className="text-xs text-gray-500 mt-3">Current Role / Specialization</p>
                  <div className="text-gray-700">{feedback.talent.role}</div>
                </div>
              </div>
            </section>

            {/* Employer Information */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                <FaBuilding className="text-[#28BBBB]" /> <span>Employer Information</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Employer</p>
                  <div className="font-medium text-gray-800">{feedback.employer.name}</div>
                  <p className="text-xs text-gray-500 mt-3">Employer Phone</p>
                  <div className="text-gray-700">{feedback.employer.phone}</div>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Employer Email</p>
                  <div className="font-medium text-gray-800">{feedback.employer.email}</div>
                  <p className="text-xs text-gray-500 mt-3">Relationship Context</p>
                  <div className="text-sm text-[#28BBBB] flex items-center gap-2">
                    <FaLink className="text-[#28BBBB]" />
                    <span className="text-gray-700">{feedback.employer.relationship}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Ratings */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                <FaChartLine className="text-[#28BBBB]"/>
                <span>Performance Ratings</span>
              </h3>

              <div className="space-y-4 font-medium text-gray-500">
                {[
                  { label: "Technical Skill Proficiency", value: feedback.ratings.technical },
                  { label: "Cultural Fit & Team Integration", value: feedback.ratings.cultural },
                  { label: "Communication Quality", value: feedback.ratings.communication },
                  { label: "Overall Performance & Impact", value: feedback.ratings.overall },
                ].map((r) => (
                  <div key={r.label}>
                    <p className="text-sm text-gray-700 mb-2">{r.label}</p>

                    {/* Options row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Very High", "High", "Neutral", "Low"].map((opt) => {
                        const active = opt === r.value;
                        return (
                          <div
                            key={opt}
                            className={`py-2 text-center rounded-lg text-sm font-medium ${active ? "bg-[#28BBBB] text-white" : "bg-gray-100 text-gray-600"}`}
                          >
                            {opt}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Feedback */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
                <FaMessage className="text-[#28BBBB]"/>
                <span>Detailed Feedback</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-[#28BBBB] font-medium mb-2">Key Achievements & Strengths</p>
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded text-sm text-gray-700 leading-relaxed">
                    {feedback.details.achievements}
                  </div>
                </div>

                <div>
                  <p className="text-[#28BBBB] font-medium mb-2">Areas for Growth / Support Needed</p>
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded text-sm text-gray-700 leading-relaxed">
                    {feedback.details.growth}
                  </div>
                </div>

                <div>
                  <p className="text-[#28BBBB] font-medium mb-2">Feedback Summary</p>
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded text-sm text-gray-700 leading-relaxed">
                    {feedback.details.summary}
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom row: date submitted, status, export */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 p-4 border-r-2 pr-8">
                  <FaCalendarAlt className="text-[#28BBBB]" />
                  <div>
                    <div className="text-xs text-gray-500">Date Submitted</div>
                    <div className="text-sm font-medium text-gray-700">{formatDate(feedback.submittedOn)}</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="text-xs text-gray-500">Status</div>
                  <div className="text-sm font-medium text-[#28BBBB] flex items-center-safe gap-1"><FaCheckCircle />{feedback.status}</div>
                </div>
              </div>

              <div className="ml-auto p-4">
                <button
                  onClick={() => alert("Export PDF (stub)")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#28BBBB] text-white rounded-lg hover:bg-teal-700 text-sm"
                >
                  <FaDownload /> Export PDF
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}