import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import EventManagementCard from "../../components/EventManagementCard"; 
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router";

const SAMPLE_EVENTS = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    description: "Join industry leaders for cutting-edge technology discussions and networking opportunities.",
    date: "March 15, 2024",
    startTime: "09:00",
    endTime: "17:00",
    venue: "AICC",
    status: "Upcoming",
    image: "",
  },
  {
    id: 2,
    title: "Design Jam - Accra",
    description: "A collaborative design sprint for product designers and PMs.",
    date: "November 20, 2023",
    startTime: "10:00",
    endTime: "15:00",
    venue: "Buro",
    status: "Past",
    image: "",
  },
  {
    id: 3,
    title: "Founders Roundtable",
    description: "A private session for founders to discuss funding and scaling.",
    date: "June 10, 2025",
    startTime: "14:00",
    endTime: "16:00",
    venue: "Mest, Buro",
    status: "Upcoming",
    image: "",
  },
  {
    id: 4,
    title: "Community Networking Night",
    description: "A casual hangout for the local startup ecosystem.",
    date: "December 1, 2024",
    startTime: "18:00",
    endTime: "21:00",
    venue: "National Theatre",
    status: "Past",
    image: "",
  },
  {
    id: 5,
    title: "Startup Hiring Day",
    description: "Meet top startups hiring engineers and designers.",
    date: "December 1, 2024",
    startTime: "09:00",
    endTime: "13:00",
    venue: "Takoradi",
    status: "Past",
    image: "",
  },
  {
    id: 6,
    title: "Tech Innovation Summit 2024 (Takoradi)",
    description: "Regional edition of the Tech Innovation Summit with panels and workshops.",
    date: "December 1, 2024",
    startTime: "09:00",
    endTime: "17:00",
    venue: "Takoradi",
    status: "Past",
    image: "",
  },
];

export default function EventManagement() {
  const [tab, setTab] = useState("all"); // all | upcoming | past
  const [search, setSearch] = useState("");

  const filteredEvents = useMemo(() => {
    return SAMPLE_EVENTS.filter((ev) => {
      if (tab === "upcoming" && ev.status !== "Upcoming") return false;
      if (tab === "past" && ev.status !== "Past") return false;
      if (search && !ev.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    });
  }, [tab, search]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <main className="ml-12 md:ml-64 flex-1 bg-gray-50 min-h-screen">
        <AdminDashboardHeader
          title="Community & Events"
          subtitle="Manage networking, mentorship, and ecosystem activities"
          user={{ fullName: "John Admin" }}
        />

        {/* Filters & Search */}
        <div className="mt-4 bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-start md:items-center gap-4 m-4">
          {/* Tabs */}
          <div className="flex items-center gap-2">
            {["all", "upcoming", "past"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  tab === t
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {t === "all"
                  ? "All Events"
                  : t === "upcoming"
                  ? "Upcoming"
                  : "Past"}
              </button>
            ))}
          </div>

          {/* Search + New Button */}
          <div className="ml-auto w-full md:w-1/3 flex items-center gap-3">
            <div className="relative flex-1">
              <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md text-sm"
              />
            </div>

            <Link to={"/create-event"} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
              + New Event
            </Link>
          </div>
        </div>

        {/* Event Cards */}
        <div className="mt-6 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventManagementCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No events found.</p>
          )}
        </div>
      </main>
    </div>
  );
}