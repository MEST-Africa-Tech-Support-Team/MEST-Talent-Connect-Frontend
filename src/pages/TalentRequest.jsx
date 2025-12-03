import React from "react";
import { FiUsers, FiLink, FiCheck } from "react-icons/fi";
import logoteal from "../assets/logoteal.png";

export default function TalentRequestForm() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center p-8">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-sm p-10 space-y-10">
        {/* Header */}
        <div>
          <img src={logoteal} alt="mest" className="h-5 mb-8" />
          <h1 className="text-2xl font-semibold">Talent Request</h1>
          <p className="text-gray-600 text-sm mt-2">
            Define your hiring needs and find the perfect talent for your team
          </p>
        </div>

        {/* 1. Role Title */}
        <div className="space-y-2">
          <label className="text-sm font-medium">1. Role Title & Scope</label>
          <input
            type="text"
            placeholder="Senior Backend Developer"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* 2. Hiring For */}
        <div className="space-y-3">
          <label className="text-sm font-medium">2. Hiring For (Select only one)</label>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-teal-500 text-white py-3 rounded-lg font-medium">
              Hire Individuals
            </button>
            <button className="border py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              <FiUsers /> Build a Team
            </button>
          </div>
        </div>

        {/* 3. Team Size */}
        <div className="space-y-2">
          <label className="text-sm font-medium">3. Team Size (Hire Individuals)</label>
          <input
            type="text"
            placeholder="0 - 5"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* 4. Job Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">4. Job Description URL</label>
          <div className="relative">
            <input
              type="text"
              placeholder="https://careers.samplecorp.com/senior-backend-dev-job-description"
              className="w-full border rounded-lg p-2 pr-10"
            />
            <FiLink className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="pt-6 border-t">
          <h3 className="font-medium text-lg mb-4">Technical Requirements</h3>

          {/* Requirements */}
          <div className="space-y-2">
            <label className="text-sm font-medium">5. Role Requirements</label>
            <select className="w-full border rounded-lg p-2">
              <option>Node.js / Express</option>
            </select>
          </div>

          {/* Tags */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "TypeScript",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs flex items-center gap-2 border border-teal-200"
                >
                  {tag} <button className="text-red-400">×</button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Type a skill and press Enter to add"
              className="w-full border rounded-lg p-2 mt-3"
            />
          </div>
        </div>

        {/* Logistics & Timeline */}
        <div className="pt-6 border-t">
          <h3 className="font-medium text-lg mb-4">Logistics & Timeline</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">7. Timeline Urgency</label>
              <select className="w-full border rounded-lg p-2">
                <option>Select timeline</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">8. Employment Type</label>
              <select className="w-full border rounded-lg p-2">
                <option>Select type</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">9. Work Style</label>
              <select className="w-full border rounded-lg p-2">
                <option>Select style</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">10. Budget Range</label>
              <input
                type="text"
                placeholder="$ Negotiable (Above $60k USD)"
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Cultural Fit */}
        <div className="pt-6 border-t">
          <h3 className="font-medium text-lg mb-4">Cultural Fit & Preferences</h3>

          <textarea
            placeholder="Seeking highly autonomous and collaborative individuals who value clean code and mentorship."
            className="w-full border rounded-lg p-3 h-28"
          />
        </div>

        {/* Policy Agreement */}
        <div className="pt-6 border-t">
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>
              <span className="font-medium">MEST Policy Agreement *</span>
              <br />
              I confirm that I have read and agree to the
              <a href="#" className="text-teal-600"> MEST Terms and Conditions</a>.
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <button className="border px-5 py-2 rounded-lg text-gray-700 text-sm">
            Save Draft
          </button>

          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm">
            Submit <FiCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
