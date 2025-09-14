import { useState } from "react";
import { Search } from "lucide-react";

export default function TalentHeader() {
  const [activeFilters, setActiveFilters] = useState(["ReactJS", "Available"]);

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <header className="w-full bg-[#28BBBB] py-16 px-6 mb-8 font-[var(--font-heading)]">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-heading)]">
          Discover Africa&apos;s Brightest Tech Talent
        </h1>
        <p className="mt-4 text-lg text-white font-[var(--font-heading)]">
          Connect with exceptional professionals ready to drive your next <br />
          project
        </p>
      </div>

      {/* White Filter Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Row 1: Search + Selects */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search talents..."
              className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Skills Select */}
          <select className="min-w-[160px] px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>All Skills</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
            <option>UI/UX</option>
            <option>Data Science</option>
            <option>DevOps</option>
          </select>

          {/* Roles Select */}
          <select className="min-w-[160px] px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Roles</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Project Manager</option>
          </select>

          {/* Availability Select */}
          <select className="min-w-[160px] px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Availability</option>
            <option>Full-time</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Row 2: Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {activeFilters.map((filter, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-teal-100 text-teal-700 rounded-full shadow-sm"
              >
                {filter}
                <button
                  onClick={() => removeFilter(filter)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
