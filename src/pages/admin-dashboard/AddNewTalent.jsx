import React from "react";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { Link } from "react-router";

export default function AddNewTalent() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0 ml-16 md:ml-64">
        {/* Header */}
        <AdminDashboardHeader
          title="Add New Talent"
          subtitle="Fill in the details to add a new employer to the form"
          user={{ fullName: "John Admin" }}
        />

        {/* Page Content */}
        <div className="p-6">
          {/* Back Button */}
          <Link to={"/admin-talent-management"} className="flex items-center text-teal-600 text-sm font-medium hover:underline">
            <FaArrowLeft size={12} className="mr-2" />
            Back to Employer Management
          </Link>

          {/* Form Card */}
          <div className="mt-6 bg-white rounded-xl shadow-sm p-6 md:p-8">
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-6">
              <div className="text-teal-600 text-lg">
                <FaUser />
              </div>
              <h2 className="text-lg font-medium">Personal Information</h2>
            </div>

            {/* Form Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-teal-400 focus:outline-none"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-teal-400 focus:outline-none"
                />
              </div>

              {/* Role */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Role</label>

                <div className="flex items-center">
                  <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    Talent (Default)
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t"></div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-100">
                Cancel
              </button>

              <button className="px-6 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700">
                Add Talent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}