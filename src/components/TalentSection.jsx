import React, { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BadgeCheck } from 'lucide-react'

const filters = ["All", "AI/ML", "Full-stack", "Data", "Product", "DevOps"];

export default function TalentsSection() {
  const [active, setActive] = useState("All");

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <h2 className="text-center text-4xl font-semibold text-[#1A1A1A]">
          Meet some of our talents
        </h2>

        {/* FILTER TABS */}
        <div className="flex items-center justify-center gap-6 mt-10 mb-14">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  active === item
                    ? "bg-teal-500 text-white shadow"
                    : "text-gray-600 hover:text-black"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* TALENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white p-8 rounded-2xl shadow-[0px_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* PROFILE HEADER */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/avatar-female.png"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold text-lg">Amara Boateng</h3>
                    <BadgeCheck className="text-teal-500  text-xl" />
                
                  </div>
                  <p className="text-gray-500 text-sm">AI/ML Engineer</p>
                </div>
              </div>

              {/* SKILLS */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#F5A623] text-sm font-medium">Python</span>
                <span className="text-[#F5A623] text-sm font-medium">
                  TensorFlow
                </span>
                <span className="px-3 py-1 bg-[#FDECC8] text-[#F5A623] text-xs rounded-full font-medium">
                  MLOps
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                PhD in Computer Science, 4+ years in ML. Built recommendation
                systems for 1M+ users.
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 text-gray-700 text-2xl">
                <FiGithub />
                <FiLinkedin />
              </div>
            </div>
          ))}
        </div>

        {/* FULL PROFILE ACCESS CTA */}
        <div className="flex justify-center mt-14">
          <button className="px-10 py-4 bg-teal-500 text-white rounded-xl font-semibold text-lg shadow hover:bg-teal-600 transition">
            Full Profile Access
          </button>
        </div>
      </div>
    </section>
  );
}
