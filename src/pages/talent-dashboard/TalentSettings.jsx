import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TalentSidebar from "../../components/TalentSidebar";
import TalentDashboardHeader from "../../components/TalentDashboardHeader";
import { FaExclamationTriangle, FaUpload, FaLock, FaTrash, FaPause, FaClock, FaGlobe } from "react-icons/fa";


export default function TalentSettings() {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <TalentSidebar />

      {/* Main Content */}
      <div className="ml-16 md:ml-64 flex-1 min-h-screen">
        {/* Header */}
        <TalentDashboardHeader title="Admin Account Settings" subtitle="Manage your profile and security preferences" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 p-4 md:px-20">

          {/* ---- PROFILE INFORMATION CARD ---- */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h2 className="text-lg font-semibold text-[#28BBBB] mb-4">Profile Information</h2>

            <div className="grid grid-cols-1 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  placeholder="Sarah Johnson"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  placeholder="sarah.johnson@company.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Profile Picture</label>

                <div className="flex items-center gap-4">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <button className="px-4 py-2 bg-[#28BBBB] transition hover:bg-teal-700 text-white rounded-lg text-sm flex items-center gap-2">
                    <span><FaUpload /></span><span>Upload New</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 text-sm">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#28BBBB] transition hover:bg-teal-700 text-white text-sm">
                Save Changes
              </button>
            </div>
          </div>

          {/* ---- CHANGE PASSWORD CARD ---- */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h2 className="text-lg font-semibold text-[#28BBBB] mb-4">Change Password</h2>

            {/* Old Password */}
            <div className="relative mb-4">
              <label className="block text-sm text-gray-600 mb-1">Old Password</label>
              <input
                type={oldPasswordVisible ? "text" : "password"}
                className="w-full border rounded-lg px-3 py-2 text-sm pr-10"
                placeholder="Enter old password"
              />
              <span
                onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {oldPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {/* New Password */}
            <div className="relative mb-4">
              <label className="block text-sm text-gray-600 mb-1">New Password</label>
              <input
                type={newPasswordVisible ? "text" : "password"}
                className="w-full border rounded-lg px-3 py-2 text-sm pr-10"
                placeholder="Enter new password"
              />
              <span
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {newPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-4">
              <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="w-full border rounded-lg px-3 py-2 text-sm pr-10"
                placeholder="Confirm new password"
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <div className="flex justify-end">
              <button className="mt-6 px-4 py-2 bg-[#28BBBB] transition hover:bg-teal-700 text-white rounded-lg text-sm flex justify-center items-center gap-2">
                <FaLock />
                <span>Save Password</span>
              </button>
            </div>
          </div>

          {/* ---- DANGER ZONE ---- */}
          <div className="bg-[#FEF2F2] rounded-xl shadow-sm p-6 border border-[#FECACA]">
            <div className="text-lg font-semibold text-[#DC2626] mb-4 flex items-center gap-2">
              <span>
                <FaExclamationTriangle />
              </span>
              <span>Danger Zone</span>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button className="w-full py-3 border border-[#DC2626] text-[#DC2626] rounded-lg hover:bg-[#FECACA] text-sm font-medium flex justify-center items-center gap-2">
                <FaPause />
                <span>Deactivate Account</span>
              </button>

              <button className="w-full py-3 bg-[#DC2626] hover:bg-red-700 text-white rounded-lg text-sm font-medium flex justify-center items-center gap-2">
                <FaTrash />
                <span>Delete Account</span>
              </button>
            </div>
          </div>

          {/* ---- LAST LOGIN INFORMATION ---- */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h2 className="text-lg font-semibold text-[#28BBBB] mb-4">Last Login Information</h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500 mt-1" />
                <div>
                  <p className="text-gray-500">Last Login Date</p>
                  <p className="font-medium text-gray-700">December 2, 2024 at 2:30 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaGlobe className="text-gray-500 mt-1" />
                <div>
                  <p className="text-gray-500">Last Login Device / IP</p>
                  <p className="font-medium text-gray-700">MacBook Pro – 192.168.1.100</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}