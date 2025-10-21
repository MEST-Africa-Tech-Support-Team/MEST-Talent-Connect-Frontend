import React from "react";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import HiringPipelineChart from "../components/HiringPipelineChart";
import SmallLineChart from "../components/SmallLineChart";
import GaugeChart from "../components/GaugeChart";
import { FiUsers, FiCheckSquare, FiClock, FiStar } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 md:p-8 lg:p-10">
          {/* welcome banner */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-xl p-6 md:p-8 mb-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold">Welcome back, Jessica from TechNova!</h2>
            <p className="mt-2 text-sm opacity-90">You have 5 new candidate applications and 2 upcoming interviews scheduled. MEST has added 12 new verified developers to the talent pool this week.</p>
          </div>

          {/* stat row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard title="Active Candidates" value="24" sub="+12% from last month" icon={<FiUsers />} accent="var(--mest-teal)" />
            <StatCard title="Successful Placements" value="8" sub="+3 this quarter" icon={<FiCheckSquare />} accent="#FF7A45" />
            <StatCard title="Pending Feedback" value="3" sub="Action needed" icon={<FiClock />} accent="#C084FC" />
            <StatCard title="New Talent Added" value="12" sub="This week" icon={<FiStar />} accent="#FFB020" />
          </div>

          {/* main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <HiringPipelineChart />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <SmallLineChart />
                <GaugeChart />
              </div>
            </div>

            <aside className="space-y-6">
              {/* quick actions */}
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg mb-3">🔍 Browse Talent</button>
                <button className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg">+ New Post</button>
              </div>

              {/* upcoming events */}
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <h4 className="font-semibold mb-4">Upcoming Events</h4>
                <div className="space-y-3">
                  <div className="p-3 border border-gray-100 rounded-md">
                    <div className="font-medium">Tech Talent Showcase</div>
                    <div className="text-xs text-gray-400">March 15, 2024 • 2:00 PM GMT</div>
                    <button className="text-sm text-teal-600 mt-2">Join Event</button>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-md">
                    <div className="font-medium">Hiring Best Practices</div>
                    <div className="text-xs text-gray-400">March 22, 2024 • 3:00 PM GMT</div>
                    <button className="text-sm text-teal-600 mt-2">Join Event</button>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-md">
                    <div className="font-medium">Hiring Best Practices</div>
                    <div className="text-xs text-gray-400">March 22, 2024 • 3:00 PM GMT</div>
                    <button className="text-sm text-teal-600 mt-2">Join Event</button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
