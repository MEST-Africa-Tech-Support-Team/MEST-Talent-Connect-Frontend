import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MatchingTalent() {

  const initialTalents = [
    {
      id: 1,
      name: "Daniel Mensah",
      role: "Senior Developer",
      avatar: "/avatars/user1.jpg",
      skills: ["React", "Next.js", "TypeScript", "Node.js"],
      experience: "5 years",
      salary: "GHC 8,500",
      score: "95%",
      status: "Available",
    },
    {
      id: 2,
      name: "Sarah Osei",
      role: "Frontend Developer",
      avatar: "/avatars/user2.jpg",
      skills: ["React", "JavaScript", "CSS", "Figma"],
      experience: "3 years",
      salary: "GHC 6,200",
      score: "88%",
      status: "Available",
    },
    {
      id: 3,
      name: "Kwame Asante",
      role: "Full Stack Developer",
      avatar: "/avatars/user3.jpg",
      skills: ["React", "Node.js", "MongoDB"],
      experience: "4 years",
      salary: "GHC 7,800",
      score: "85%",
      status: "1 Month",
    },
  ];

  const [matchingTalents, setMatchingTalents] = useState(initialTalents);
  const [matchedTalents, setMatchedTalents] = useState([]);

  // MATCH TALENT ACTION
  const handleMatchTalent = (talent) => {
    setMatchedTalents((prev) => [
      ...prev,
      {
        ...talent,
        matchedOn: "Nov 14, 2024",
        recruiter: "Sarah Johnson",
      },
    ]);

    setMatchingTalents((prev) => prev.filter((t) => t.id !== talent.id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Layout */}
      <div className="flex-1 min-w-0 ml-16 md:ml-64">
        {/* Header */}
        <AdminDashboardHeader
          title="Match Talent"
          subtitle="Match talents to employers"
          user={{ fullName: "John Admin" }}
        />

        {/* Main Content */}
        <main className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT SIDE */}
            <div className="flex-1 min-w-0">
              {/* BACK NAV */}
              <div className="mb-4">
                <Link
                  to={"/admin-employers-management"}
                  className="flex items-center text-teal-600 text-sm font-medium hover:underline"
                >
                  <FaArrowLeft size={12} className="mr-2" />
                  Back to Employers Management
                </Link>
              </div>

              {/* MATCHING TALENTS TABLE */}
              <div className="bg-white rounded-lg shadow-sm p-4 border">
                <h2 className="font-semibold mb-3 text-gray-700">
                  Matching Talents ({matchingTalents.length} found)
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead className="text-gray-500 text-sm border-b">
                      <tr>
                        <th className="py-3">Talent Name</th>
                        <th className="mx-auto">Key Skills</th>
                        <th>Experience</th>
                        <th>Expected <br/> Salary</th>
                        <th>Match <br/> Score</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="text-sm">
                      {matchingTalents.map((t) => (
                        <tr key={t.id} className="border-t">
                          {/* Name + Role */}
                          <td className="py-4 flex items-center gap-2 min-w-[150px]">
                            <img
                              src={t.avatar}
                              alt={t.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-700">{t.name}</p>
                              <p className="text-gray-500 text-xs">{t.role}</p>
                            </div>
                          </td>

                          {/* Skills */}
                          <td className="w-[130px]">
                            <div className="flex flex-wrap gap-2">
                              {t.skills.slice(0, 3).map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-teal-50 text-teal-700 px-2 py-1 rounded text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </td>

                          <td className="text-gray-700 px-4">{t.experience}</td>
                          <td className="text-gray-700 px-4">{t.salary}</td>
                          <td className="font-semibold px-4">{t.score}</td>

                          <td className="px-4">
                            <span
                              className={`px-2 py-1 rounded text-xs ${t.status === "Available"
                                  ? "bg-green-50 text-green-600"
                                  : "bg-yellow-50 text-yellow-700"
                                }`}
                            >
                              {t.status}
                            </span>
                          </td>

                          {/* MATCH BUTTON */}
                          <td>
                            <button
                              onClick={() => handleMatchTalent(t)}
                              className="px-2 py-1 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 whitespace-nowrap"
                            >
                              Match Talent
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Show{" "}
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>3</option>
                      <option>5</option>
                      <option>10</option>
                    </select>{" "}
                    per page
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-teal-500 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">
                      2
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* MATCHED TALENTS TABLE */}
              <div className="bg-white rounded-lg shadow-sm p-4 mt-6 border">
                <h2 className="font-semibold mb-3 text-gray-700">
                  <span></span>Matched Talents ({matchedTalents.length})
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead className="text-gray-500 text-sm border-b">
                      <tr>
                        <th className="py-3">Talent</th>
                        <th>Status</th>
                        <th>Matched On</th>
                        <th>Recruiter</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody className="text-sm">
                      {matchedTalents.length === 0 ? (
                        <tr>
                          <td
                            colSpan="5"
                            className="py-6 text-center text-gray-500"
                          >
                            No matched talents yet
                          </td>
                        </tr>
                      ) : (
                        matchedTalents.map((t) => (
                          <tr key={t.id} className="border-t">
                            <td className="py-4 flex items-center gap-3">
                              <img
                                src={t.avatar}
                                className="w-10 h-10 rounded-full"
                                alt=""
                              />
                              <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-gray-500 text-xs">
                                  {t.role}
                                </p>
                              </div>
                            </td>

                            <td>
                              <span className="px-2 py-1 rounded bg-purple-100 text-purple-600 text-xs">
                                Interview Scheduled
                              </span>
                            </td>

                            <td>{t.matchedOn}</td>
                            <td>{t.recruiter}</td>

                            <td>
                              <button className="text-teal-600 hover:underline text-sm">
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Show{" "}
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>2</option>
                      <option>5</option>
                      <option>10</option>
                    </select>{" "}
                    per page
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-teal-500 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 bg-gray-100 rounded text-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (JOB SUMMARY) */}
            <div className="w-full lg:w-[250px]">
              <aside className="lg:sticky lg:top-8">
                <div className="bg-white rounded-lg shadow-sm p-4 border">

                  <h3 className="font-semibold text-gray-800 mb-3">
                    Job Summary
                  </h3>

                  <p className="text-gray-700 font-semibold">
                    Senior Frontend Developer
                  </p>

                  <p className="text-sm text-gray-500 mb-2">
                    Full-time • Remote
                  </p>

                  <h4 className="font-semibold mt-4 mb-1 text-gray-700">
                    Responsibilities
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li>Develop responsive web applications</li>
                    <li>Collaborate with design teams</li>
                    <li>Code review and mentoring</li>
                    <li>Performance optimization</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-1 text-gray-700">
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "TypeScript", "Next.js"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-teal-50 text-teal-700 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>

                  <h4 className="font-semibold mt-4 mb-1 text-gray-700">
                    Preferred Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "AWS", "GraphQL"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p className="flex justify-between">
                      <span>Location:</span><span className="font-bold">Remote</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Posted:</span><span className="font-bold">Nov 15, 2024</span>
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}