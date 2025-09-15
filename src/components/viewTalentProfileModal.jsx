import { FileDown, ExternalLink, X } from "lucide-react";

const sampleTalent = {
  name: "John Doe",
  role: "Frontend Developer",
  availability: "Available Now",
  summary:
    "Experienced software engineer with 5+ years developing web applications. Proven track record of delivering high-quality solutions for startups and enterprise clients. Strong background in agile development and team leadership.",
  academicBg: [
    { program: "BSc Computer Science", school: "University of Ghana" },
    { program: "MSc Software Eng.", school: "KNUST" },
  ],
  softSkills: ["Teamwork", "Communication"],
  techSkills: ["React", "Tailwind", "Node.js"],
  portfolio: "https://portfolio.com",
  cv: "/cv/john-doe.pdf",
  image:
    "https://www.pexels.com/photo/close-up-shot-of-a-woman-looking-up-7644917/",
};

export default function ViewTalentProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const talent = sampleTalent;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 relative">
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src={talent.image}
            alt={talent.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {talent.name}
            </h2>
            <p className="text-sm text-gray-700">{talent.role}</p>
            <p className="text-xs text-teal-600 font-medium">
              {talent.availability}
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4">
          <h3 className="text-base font-semibold text-gray-900">
            Brief Summary
          </h3>
          <p className="mt-1 text-sm text-gray-700 leading-relaxed">
            {talent.summary}
          </p>
        </div>

        {/* Academic Background */}
        <div className="mt-4">
          <h3 className="text-base font-semibold text-gray-900">
            Academic Background
          </h3>
          <div className="mt-2 space-y-3">
            {talent.academicBg.map((edu, idx) => (
              <div
                key={idx}
                className="border-l-4 border-teal-500 pl-3 py-1 bg-gray-50 rounded"
              >
                <p className="text-sm font-medium text-gray-800">
                  {edu.program}
                </p>
                <p className="text-xs text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-4">
          <h3 className="text-base font-semibold text-gray-900">Soft Skills</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {talent.softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-teal-100 text-teal-700 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Technical Skills */}
        <div className="mt-4">
          <h3 className="text-base font-semibold text-gray-900">
            Technical Skills
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {talent.techSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-gray-200 text-gray-800 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio & CV Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={talent.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            <ExternalLink size={16} /> Portfolio
          </a>
          <a
            href={talent.cv}
            download
            className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            <FileDown size={16} /> Download CV
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end">
          <button className="px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
            Hire Talent
          </button>
        </div>
      </div>
      
    </div>
  );
}
