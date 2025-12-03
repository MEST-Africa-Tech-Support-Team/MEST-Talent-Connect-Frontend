import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaSuitcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import eli from "../../assets/images/eli.jpg";
import aws from "../../assets/images/aws.png";
import google from "../../assets/images/google.png";


export default function ProfileDetails() {
    const navigate = useNavigate();
    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

            {/* Back Button */}
            {/* <button className="flex items-center gap-2 text-teal-600 font-medium mb-6 hover:opacity-80">
        <FiArrowLeft />
        Back to BrowseTalents
      </button> */}

            <div onClick={() => navigate('/employer/browse-talent')} className="flex items-center gap-2 text-teal-700 cursor-pointer mb-4">
                <FiArrowLeft />
                <span>Back to Browse Talents</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT PROFILE CARD */}
                <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
                    <img
                        src={eli}
                        alt="Sarah Chen"
                        className="w-28 h-28 rounded-full object-cover mb-4"
                    />

                    <h2 className="text-xl font-semibold text-gray-800">Ervin</h2>
                    <p className="text-gray-500">Full Stack Developer</p>

                    <div className="mt-4 flex flex-col gap-2 items-center">
                        <span className="bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-medium">
                            3 Years Experience
                        </span>

                        <span className="bg-gray-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium">
                            Available
                        </span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-6">
                        <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
                            <FaSuitcase className="text-gray-600" size={20} />
                        </button>

                        <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
                            <FaGithub className="text-gray-700" size={20} />
                        </button>

                        <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
                            <FaLinkedin className="text-gray-700" size={20} />
                        </button>
                    </div>
                </div>

                {/* RIGHT MAIN CONTENT */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-lg font-semibold mb-3">About</h3>

                    <p className="text-gray-600 leading-relaxed">
                        Passionate full-stack developer with 7 years of experience building scalable web applications.
                        Expertise in modern JavaScript frameworks, cloud architecture, and agile development practices.
                        Led multiple cross-functional teams and delivered high-impact projects for Fortune 500 companies.
                    </p>

                    {/* Key Strengths */}
                    <h4 className="mt-6 font-semibold">Key Strengths</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-xs">Technical Leadership</span>
                        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs">System Architecture</span>
                        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs">Performance Optimization</span>
                        <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs">Mentoring</span>
                    </div>

                    {/* Tools */}
                    <h4 className="mt-6 font-semibold">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {[
                            "JavaScript",
                            "React",
                            "Node.js",
                            "Python",
                            "AWS",
                            "Docker",
                            "PostgreSQL",
                            "MongoDB",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

                {/* Soft Skills */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>

                    <ul className="text-gray-700 space-y-3">
                        <li>Good time and resource management</li>
                        <li>Team Collaborator and good organizer</li>
                        <li>Adaptable and fast learner</li>
                        <li>Critical thinker</li>
                        <li>Problem Solver</li>
                    </ul>
                </div>

                {/* Education */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-lg font-semibold mb-4">Educational Background</h3>

                    <p className="font-medium text-gray-800">Bachelor of Computer Science</p>
                    <p className="text-teal-600 font-medium">Stanford University</p>
                    <p className="text-gray-500 text-sm">2013 - 2017</p>

                    {/* Certifications */}
                    <h4 className="mt-6 font-semibold">Certifications</h4>

                    <div className="mt-3 space-y-3">

                        <div className="flex items-center gap-2">
                            <img src={aws} className="w-5 h-5" alt="" />
                            <span className="text-gray-700">AWS Solutions Architect</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={google} className="w-5 h-5" alt="" />
                            <span className="text-gray-700">Google Cloud Professional</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
