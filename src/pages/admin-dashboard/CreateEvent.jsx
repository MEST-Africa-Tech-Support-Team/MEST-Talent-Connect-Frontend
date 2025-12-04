import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";
import { FaArrowLeft, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function CreateEvent() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-12 md:ml-64 flex-1 bg-gray-50 min-h-screen">
        <AdminDashboardHeader
          title="Create Events"
          subtitle="Add a new event to the platform"
          user={{ fullName: "John Admin" }}
        />

        {/* Page Content */}
        <div className="p-6">

          {/* Back Button */}
          <div className="mb-4">
            <Link to={"/admin-event-management"} className="flex items-center text-teal-600 text-sm font-medium hover:underline">
              <FaArrowLeft size={12} className="mr-2" />
              Back to Event Management
            </Link>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow p-6 md:p-10 w-full">

            <form className="space-y-6">

              {/* Event Title */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter event title"
                  className="mt-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter event description"
                  className="mt-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                ></textarea>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    type="date"
                    className="mt-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Time
                  </label>
                  <input
                    type="time"
                    className="mt-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter event location"
                  className="mt-2 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Images Upload
                </label>

                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl h-48 flex flex-col justify-center items-center relative cursor-pointer">

                  {/* Upload Button */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />

                  {/* Preview or Icon */}
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-24 w-24 object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <div className="text-teal-500 text-4xl"><FaCloudUploadAlt /></div>
                      <p className="text-gray-500 mt-2">
                        Drag & drop your images here
                      </p>
                      <p className="text-teal-500 text-sm">
                        or click to browse
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  Create Event
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}