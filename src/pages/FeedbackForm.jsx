import React, { useState } from "react";

export default function FeedbackForm() {
  const ratings = ["Very High", "High", "Neutral", "Low"];

  const [form, setForm] = useState({
    technical: "",
    cultural: "",
    communication: "",
    overall: "",
    achievements: "",
    growth: "",
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-1">Performance Tracking & Feedback</h2>
        <p className="text-gray-500 mb-6">
          Monitor your placed talent and provide comprehensive feedback on their performance
        </p>

        {/* Performance Section */}
        <h3 className="text-lg font-semibold mb-4">Performance</h3>

        {/* Rating Group */}
        {[{
          label: "Technical Skill Proficiency",
          field: "technical",
        }, {
          label: "Cultural Fit & Team Integration",
          field: "cultural",
        }, {
          label: "Communication Quality",
          field: "communication",
        }, {
          label: "Overall Performance & Impact",
          field: "overall",
        }].map((item) => (
          <div key={item.field} className="mb-6 border-b pb-4">
            <p className="text-sm font-medium text-gray-700 mb-3">{item.label}</p>
            <div className="flex items-center gap-6">
              {ratings.map((rate) => (
                <label key={rate} className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name={item.field}
                    checked={form[item.field] === rate}
                    onChange={() => update(item.field, rate)}
                    className="mr-2"
                  />
                  {rate}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Detailed Feedback */}
        <h3 className="text-lg font-semibold mb-3 mt-6">Detailed Feedback</h3>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">
            Key Achievements & Strengths
          </label>
          <textarea
            value={form.achievements}
            onChange={(e) => update("achievements", e.target.value)}
            className="w-full mt-2 h-32 border border-gray-300 rounded-lg p-3"
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="text-sm font-medium text-gray-700">
            Areas for Growth / Support Needed
          </label>
          <textarea
            value={form.growth}
            onChange={(e) => update("growth", e.target.value)}
            className="w-full mt-2 h-32 border border-gray-300 rounded-lg p-3"
          ></textarea>
        </div>

        {/* Footer Buttons */}
        <div className="border-t pt-5 flex gap-4">
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-md">
            Submit Feedback
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
