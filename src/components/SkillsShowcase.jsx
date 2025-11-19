import { Globe } from "lucide-react"
import { MdGroups2 } from "react-icons/md";
import { FaMedal } from "react-icons/fa";



export default function SkillsShowcase() {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Your skills deserve the world stage
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 max-w-3xl text-lg leading-relaxed mb-14">
        Join a community of elite African developers working with global companies. 
        Get access to mentorship, skill development, and career-defining opportunities.
      </p>

      {/* Icons Row */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-14">
        {/* Item 1 */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-teal-500 text-4xl"><Globe /></div>
          <h4 className="font-semibold text-gray-800">Global Opportunities</h4>
          <p className="text-gray-500 text-sm max-w-[180px]">
            Work with companies worldwide
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-teal-500 text-4xl"><MdGroups2 /></div>
          <h4 className="font-semibold text-gray-800">MEST Community</h4>
          <p className="text-gray-500 text-sm max-w-[180px]">
            Join a network of entrepreneurs
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-teal-500 text-4xl"><FaMedal /></div>
          <h4 className="font-semibold text-gray-800">Skill Verification</h4>
          <p className="text-gray-500 text-sm max-w-[180px]">
            Get recognized for your expertise
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-10 py-3 rounded-lg text-lg transition">
        Apply to Join
      </button>
    </section>
  );
}
