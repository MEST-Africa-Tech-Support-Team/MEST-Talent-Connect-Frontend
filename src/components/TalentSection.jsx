import React, { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BadgeCheck } from "lucide-react";
import img from "../assets/images/img.png";

const filters = ["All", "AI/ML", "Full-stack", "Data", "Product", "DevOps"];

export default function TalentsSection() {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
          Meet some of our talents
        </h2>

        {/* FILTER TABS (horiz scroll on small screens) */}
        <div className="flex items-center justify-center mt-8 mb-12">
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-0 overflow-x-auto no-scrollbar">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm sm:text-sm font-medium transition
                  ${
                    active === item
                      ? "bg-teal-500 text-white shadow"
                      : "text-gray-600 hover:text-black bg-transparent"
                  }
                `}
                aria-pressed={active === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* TALENT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0px_20px_50px_rgba(0,0,0,0.05)] flex flex-col h-full"
            >
              {/* PROFILE HEADER */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={img}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base sm:text-lg truncate">
                      Amara Boateng
                    </h3>
                    <BadgeCheck className="text-teal-500 text-base sm:text-xl" />
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">AI/ML Engineer</p>
                </div>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-[#FFF7ED] text-[#F5A623] text-xs sm:text-sm rounded-full font-medium">
                  Python
                </span>
                <span className="px-2 py-1 bg-[#FFF7ED] text-[#F5A623] text-xs sm:text-sm rounded-full font-medium">
                  TensorFlow
                </span>
                <span className="px-2 py-1 bg-[#FDECC8] text-[#F5A623] text-xs sm:text-sm rounded-full font-medium">
                  MLOps
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                PhD in Computer Science, 4+ years in ML. Built recommendation systems for 1M+ users.
              </p>

              {/* SOCIALS */}
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-700 text-xl">
                  <a href="#" aria-label="GitHub" className="hover:text-black">
                    <FiGithub />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-black">
                    <FiLinkedin />
                  </a>
                </div>

                {/* <button className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-50 text-teal-700 rounded-lg text-sm sm:text-sm font-semibold hover:bg-teal-100 transition">
                  View Profile
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* FULL PROFILE ACCESS CTA */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-teal-500 text-white rounded-xl font-semibold text-base sm:text-lg shadow hover:bg-teal-600 transition">
            Full Profile Access
          </button>
        </div>
      </div>
    </section>
  );
}
