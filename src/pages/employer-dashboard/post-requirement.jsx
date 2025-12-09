import React, { useState } from "react";
import { FiBriefcase, FiMapPin, FiDollarSign, FiChevronLeft } from "react-icons/fi";
// import { MdOutlineWorkOutline } from "react-icons/md";

export default function PostRequirementForm() {
  const [form, setForm] = useState({
    title: "",
    role: "",
    employmentType: "Full Time",
    skillsRequired: "Single hire",
    timeline: "",
    remote: "No",
    city: "",
    country: "Ghana",
    maxSalary: "",
    minSalary: "",
    currency: "USD",
  });

  const timelineOptions = ["Immediate", "1-3 months", "3-6 months"];
  const employmentOptions = ["Full Time", "Part Time", "Contract", "Internship"];
  const skillsOptions = ["Single hire", "Multiple hires", "Team hire"];

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        className="text-teal-600 inline-flex items-center gap-2 text-sm font-medium mb-5"
        onClick={() => window.history.back()}
      >
        <FiChevronLeft />
        Back to Open Positions
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        {/* Job Details Card */}
        <section className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
              <FiBriefcase size={20} />
            </div>
            <h3 className="text-lg font-semibold">Job Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="e.g. Frontend Developer"
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Role</label>
              <input
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
                placeholder="e.g. Frontend Developer"
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Employment Type</label>
              <select
                value={form.employmentType}
                onChange={(e) => update("employmentType", e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 appearance-none bg-white"
              >
                {employmentOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Skills Required</label>
              <select
                value={form.skillsRequired}
                onChange={(e) => update("skillsRequired", e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 appearance-none bg-white"
              >
                {skillsOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600 block mb-2">Timeline Urgency</label>
              <div className="flex gap-3 items-center mb-3">
                {timelineOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update("timeline", t)}
                    className={`px-3 py-1.5 rounded-full text-sm border transform transition ${form.timeline === t
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                        : "bg-emerald-50 text-emerald-600 border-emerald-50"
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <input
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                placeholder="Type your preferable timeline and press Enter"
                className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300"
              />
            </div>
          </div>
        </section>

        {/* Location Card */}
        <section className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
              <FiMapPin size={20} />
            </div>
            <h3 className="text-lg font-semibold">Location</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="text-sm text-gray-600 mb-2">Is Remote</div>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="remote"
                    className="form-radio"
                    checked={form.remote === "Yes"}
                    onChange={() => update("remote", "Yes")}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="remote"
                    className="form-radio"
                    checked={form.remote === "No"}
                    onChange={() => update("remote", "No")}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">City</label>
              <input
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Type your preferable city"
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Country</label>
              <select
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 appearance-none bg-white"
              >
                <option>Ghana</option>
                <option>Nigeria</option>
                <option>Kenya</option>
                <option>United States</option>
              </select>
            </div>
          </div>
        </section>

        {/* Salary Range Card */}
        <section className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
              <FiDollarSign size={20} />
            </div>
            <h3 className="text-lg font-semibold">Salary Range</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <label className="text-sm text-gray-600">Maximum Salary</label>
              <input
                value={form.maxSalary}
                onChange={(e) => update("maxSalary", e.target.value)}
                placeholder="00.00"
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Minimum Salary</label>
              <input
                value={form.minSalary}
                onChange={(e) => update("minSalary", e.target.value)}
                placeholder="00.00"
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Currency</label>
              <select
                value={form.currency}
                onChange={(e) => update("currency", e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-200 px-4 py-3 appearance-none bg-white"
              >
                <option>USD</option>
                <option>GHS</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
          <button className="px-6 py-2 border border-emerald-200 rounded-md text-emerald-600">
            Save As Draft
          </button>

          <button className="px-6 py-2 rounded-md bg-emerald-500 text-white shadow-sm">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
