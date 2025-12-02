import React from "react";
import { FiCalendar, FiUsers, FiClock, FiFileText, FiArrowRight } from "react-icons/fi";


export default function EventsDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">Events & Community Hub</h1>
            <p className="text-gray-500 mt-1">Connect with MEST talent through events and community engagement</p>
          </div>

          <button className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-5 py-3 rounded-full shadow-lg">
            <FiArrowRight />
            <span className="font-semibold">Request New Event / Partnership</span>
          </button>
        </div>

        {/* Top metrics */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow p-6 relative border-l-4 border-teal-400">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Events Attended (YTD)</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-3">12</h2>
                <p className="text-sm text-teal-500 mt-2">+3 from last quarter</p>
              </div>
              <div className="bg-teal-500 text-white p-3 rounded-md shadow">
                <FiCalendar size={22} />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow p-6 relative border-l-4 border-pink-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Annual Events</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-3">47</h2>
                <p className="text-sm text-teal-500 mt-2">+12 this month</p>
              </div>
              <div className="bg-gray-700 text-white p-3 rounded-md shadow">
                <FiUsers size={22} />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow p-6 relative border-l-4 border-orange-400">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Next Event Date</p>
                <h2 className="text-2xl font-extrabold text-gray-800 mt-3">Dec 15</h2>
                <p className="text-sm text-gray-600 mt-1">Campus Hiring Fair</p>
              </div>
              <div className="bg-orange-500 text-white p-3 rounded-md shadow">
                <FiClock size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left: Upcoming events big card */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-md">All Events</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "Registered",
                    title: "Campus Hiring Fair",
                    date: "Dec 15, 2024",
                    desc: "Meet graduating students and recent alumni for recruitment opportunities across tech roles.",
                    location: "MEST Campus",
                    time: "2:00 PM",
                  },
                  {
                    tag: "Registered",
                    title: "Tech Leadership Summit",
                    date: "Dec 20, 2024",
                    desc: "Exclusive networking event for employers and MEST entrepreneurs to discuss industry trends.",
                    location: "Virtual",
                    time: "10:00 AM",
                  },
                  {
                    tag: "Registered",
                    title: "Skills Workshop: AI & ML",
                    date: "Jan 10, 2025",
                    desc: "Interactive workshop showcasing MEST talent capabilities in artificial intelligence and machine learning.",
                    location: "MEST Campus",
                    time: "3:00 PM",
                  },
                  {
                    tag: "Invitation Pending",
                    title: "Employer Roundtable",
                    date: "Jan 18, 2025",
                    desc: "Exclusive discussion forum for MEST employer partners to share insights and best practices.",
                    location: "Virtual",
                    time: "4:00 PM",
                  },
                ].map((e, i) => (
                  <div key={i} className="border rounded-lg p-4 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${e.tag === 'Registered' ? 'bg-teal-100 text-teal-600' : 'bg-orange-100 text-orange-600'}`}>{e.tag}</span>
                      <span className="text-sm text-gray-400">{e.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{e.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{e.desc}</p>

                    <div className="flex items-center text-sm text-gray-400 gap-4 mb-4">
                      <div className="flex items-center gap-2"><FiUsers /> <span>{e.location}</span></div>
                      <div className="flex items-center gap-2"><FiClock /> <span>{e.time}</span></div>
                    </div>

                    <button className="w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-md">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white rounded-lg shadow p-5">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-3 rounded-md text-teal-600">
                  <FiUsers size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Community Connect</h4>
                  <p className="text-sm text-gray-500 mt-1">Join the MEST Connect Chat to engage with talent, alumni, and other employers in real-time.</p>
                  <button className="mt-4 w-full border border-teal-200 rounded-md py-2 text-teal-600">→ Go to MEST Connect Chat</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold text-gray-800 mb-4">Partnership Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiFileText />
                    <span>Employer Partnership Guide</span>
                  </div>
                  <span className="text-gray-300">›</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiFileText />
                    <span>Event Hosting Guidelines</span>
                  </div>
                  <span className="text-gray-300">›</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiFileText />
                    <span>Co-Branding Assets</span>
                  </div>
                  <span className="text-gray-300">›</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FiFileText />
                    <span>Success Stories</span>
                  </div>
                  <span className="text-gray-300">›</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold text-gray-800 mb-4">Quick Stats</h4>
              <div className="text-sm text-gray-600 mb-3">Active Partnerships <span className="float-right text-gray-800 font-semibold">8</span></div>
              <div className="h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-teal-400 rounded-full w-3/4"></div>
              </div>
              <div className="text-sm text-gray-600 mb-3">Event Engagement Rate <span className="float-right text-gray-800 font-semibold">92%</span></div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-teal-400 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
