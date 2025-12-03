import React from "react";
import {
  FiCalendar,
  FiUsers,
  FiClock,
  FiMapPin,
  FiZap
} from "react-icons/fi";

export default function EventsDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] py-10 px-6">
      <div className="max-w-[1250px] mx-auto">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-[32px] font-bold text-gray-800">
              Events & Community Hub
            </h1>
            <p className="text-gray-500 mt-1 text-[15px]">
              Connect with MEST talent through events and community engagement
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md text-[15px] font-semibold">
            <FiZap className="text-lg" />
            Request New Event / Partnership
          </button>
        </div>

        {/* TOP METRICS */}
        <div className="grid grid-cols-12 gap-6 mb-12">

          {/* Card 1 */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow-sm p-6 border-l-4 border-teal-400">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Events Registered</p>
                <h2 className="text-[32px] font-bold text-gray-800 mt-2">12</h2>
                <p className="text-sm text-teal-500 mt-1">+3 from last quarter</p>
              </div>

              <div className="bg-teal-500 text-white p-3 rounded-md shadow">
                <FiCalendar size={22} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow-sm p-6 border-l-4 border-pink-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Events Annually</p>
                <h2 className="text-[32px] font-bold text-gray-800 mt-2">47</h2>
                <p className="text-sm text-teal-500 mt-1">+12 this month</p>
              </div>

              <div className="bg-gray-700 text-white p-3 rounded-md shadow">
                <FiUsers size={22} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-400">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Next Event Date</p>
                <h2 className="text-[32px] font-bold text-gray-800 mt-2 leading-none">
                  Dec 15
                </h2>
                <p className="text-sm text-gray-600 mt-1">Campus Hiring Fair</p>
              </div>

              <div className="bg-orange-500 text-white p-3 rounded-md shadow">
                <FiClock size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* UPCOMING EVENTS SECTION */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              All Events
            </button>
          </div>

          {/* 2x2 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* EVENT CARD TEMPLATE */}
            {[
              {
                tag: "Registered",
                tagColor: "bg-teal-100 text-teal-600",
                title: "Campus Hiring Fair",
                date: "Dec 15, 2024",
                desc:
                  "Meet graduating students and recent alumni for recruitment opportunities across tech roles.",
                location: "MEST Campus",
                time: "2:00 PM",
              },

              {
                tag: "Registered",
                tagColor: "bg-teal-100 text-teal-600",
                title: "Tech Leadership Summit",
                date: "Dec 20, 2024",
                desc:
                  "Exclusive networking event for employers and MEST entrepreneurs to discuss industry trends.",
                location: "Virtual",
                time: "10:00 AM",
              },

              {
                tag: "Registered",
                tagColor: "bg-teal-100 text-teal-600",
                title: "Skills Workshop: AI & ML",
                date: "Jan 10, 2025",
                desc:
                  "Interactive workshop showcasing MEST talent capabilities in artificial intelligence and machine learning.",
                location: "MEST Campus",
                time: "3:00 PM",
              },

              {
                tag: "Invitation Pending",
                tagColor: "bg-orange-100 text-orange-600",
                title: "Employer Roundtable",
                date: "Jan 18, 2025",
                desc:
                  "Exclusive discussion forum for MEST employer partners to share insights and best practices.",
                location: "Virtual",
                time: "4:00 PM",
              },
            ].map((e, i) => (
              <div
                key={i}
                className="border border-gray-200 bg-white rounded-xl p-6 shadow-sm"
              >
                {/* Label + Date */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${e.tagColor}`}
                  >
                    {e.tag}
                  </span>

                  <span className="text-sm text-gray-400">{e.date}</span>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-gray-800 text-[17px] mb-2">
                  {e.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {e.desc}
                </p>

                {/* Location & Time */}
                <div className="flex items-center text-sm text-gray-500 gap-6 mb-5">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-gray-400" />
                    <span>{e.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiClock className="text-gray-400" />
                    <span>{e.time}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2.5 rounded-md font-medium text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
