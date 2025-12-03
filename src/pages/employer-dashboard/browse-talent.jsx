import React, { useState } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import eli from "../../assets/images/eli.jpg";
import { Link } from "react-router-dom";


const mockTalents = [
  {
    id: 1,
    name: "James Wilson",
    role: "Fullstack Developer",
    status: "Hired",
    statusColor: "bg-emerald-500",
    tags: ["React", "Django", "PostgreSQL", "GraphQL"],
    location: "Ghana, Tse Addo",
    review: "Pending Review",
    img: {eli},
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Fullstack Developer",
    status: "Not Hired",
    statusColor: "bg-orange-500",
    tags: ["React", "Django", "PostgreSQL", "GraphQL"],
    location: "Ghana, Tse Addo",
    review: "Pending Review",
    img: {eli},
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Fullstack Developer",
    status: "Interviewed",
    statusColor: "bg-purple-500",
    tags: ["React", "Django", "PostgreSQL", "GraphQL"],
    location: "Ghana, Tse Addo",
    review: "Pending Review",
    img: {eli},
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Fullstack Developer",
    status: "Screening",
    statusColor: "bg-teal-500",
    tags: ["React", "Django", "PostgreSQL", "GraphQL"],
    location: "Ghana, Kumasi",
    review: "Pending Review",
    img: {eli},
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Fullstack Developer",
    status: "Shortlisted",
    statusColor: "bg-yellow-500",
    tags: ["React", "Django", "PostgreSQL", "GraphQL"],
    location: "Ghana, Tso",
    review: "Pending Review",
    img: {eli},
  },
];

export default function BrowseTalent() {
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Most Recent");

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50">

      {/* Search + Sort + Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          
          {/* Search Bar */}
          <div className="w-full">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <input
                type="text"
                placeholder="Search by name, skill, or role"
                className="w-full bg-transparent outline-none text-gray-700"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Sort + Filter */}
          <div className="flex items-center gap-3">

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg border bg-white shadow-sm text-gray-700 w-40"
              >
                {sortValue}
                <FiChevronDown />
              </button>

              {sortOpen && (
                <div className="absolute w-40 bg-white shadow-lg rounded-lg border mt-2">
                  {["Most Recent", "A-Z", "Z-A"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortValue(option);
                        setSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-sm">
              <FiFilter /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

        {mockTalents.map((talent) => (
          <div
            key={talent.id}
            className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >
            {/* Status Badge */}
            <span
              className={`${talent.statusColor} text-white px-3 py-1 rounded-full text-xs font-medium mb-3`}
            >
              {talent.status}
            </span>

            {/* Avatar {talent.img} */}
            <img
              src= {eli}
              className="w-20 h-20 rounded-full object-cover mb-3"
              alt={talent.name}
            />

            {/* Name + Role */}
            <h3 className="font-semibold text-lg text-gray-800">
              {talent.name}
            </h3>
            <p className="text-gray-500">{talent.role}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {talent.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-orange-200 text-orange-700 px-3 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location + Review */}
            <p className="text-gray-600 mt-4">{talent.location}</p>
            <p className="text-gray-500 text-sm">{talent.review}</p>

            {/* View Profile Button */}
            {/* <button className="mt-5 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-medium">
              View Profile
            </button> */}
            <Link to={`/employer/profile-detail`} className="mt-5 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-medium text-center">
              View Profile
            </Link>
          </div>
        ))}

      </div>

      {/* Footer Results Count */}
      <p className="text-gray-500 text-sm mt-10">
        Showing 1–8 of 248 results
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-2 mt-4">

        {["1", "2", "3", "...", "21"].map((p, i) => (
          <button
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border 
              ${p === "2" ? "bg-teal-500 text-white" : "bg-white hover:bg-gray-100"}`}
          >
            {p}
          </button>
        ))}

      </div>

    </div>
  );
}


























































// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function BrowserTalent() {
//   // ✅ Step 3: Initialize state properly
//   const [talents, setTalents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ Step 1: Fetch all talents initially
//   const fetchAllTalents = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://mest-talent-connect-backend.onrender.com/api/V1/talents",
//         { headers: { "Cache-Control": "no-cache" } }
//       );

//       // ✅ The data is inside response.data.portfolios
//       if (response.data && Array.isArray(response.data.portfolios)) {
//         setTalents(response.data.portfolios);
//       } else {
//         setTalents([]);
//       }
//     } catch (error) {
//       console.error("Error fetching all talents:", error);
//       setTalents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Step 2: Fetch filtered talents (by role or skills)
//   const fetchFilteredTalents = async (query) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://mest-talent-connect-backend.onrender.com/api/V1/talent-query?role=${query}&skills=${query}`,
//         { headers: { "Cache-Control": "no-cache" } }
//       );

//       // Some query endpoints may return directly, so handle both formats
//       if (response.data?.portfolios && Array.isArray(response.data.portfolios)) {
//         setTalents(response.data.portfolios);
//       } else if (Array.isArray(response.data)) {
//         setTalents(response.data);
//       } else {
//         setTalents([]);
//       }
//     } catch (error) {
//       console.error("Error fetching filtered talents:", error);
//       setTalents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Load all talents when page mounts
//   useEffect(() => {
//     fetchAllTalents();
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     if (value.trim() === "") {
//       fetchAllTalents(); // reset to all
//     } else {
//       fetchFilteredTalents(value); // filter via query
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Browse Talent</h1>

//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by role or skill..."
//           className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
//         />
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <div className="text-gray-500">Loading...</div>
//       ) : (
//         <div className="overflow-x-auto w-full bg-white rounded-lg shadow-sm">
//           <table className="min-w-full text-sm md:text-base">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-2 border">#</th>
//                 <th className="p-2 border">Name</th>
//                 <th className="p-2 border">Skills</th>
//                 <th className="p-2 border">Role</th>
//                 <th className="p-2 border">Cohort</th>
//                 <th className="p-2 border">Availability</th>
//                 <th className="p-2 border">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {talents.length > 0 ? (
//                 talents.map((talent, index) => (
//                   <tr key={talent.id || index} className="hover:bg-gray-50">
//                     <td className="p-2 border">{index + 1}</td>
//                     <td className="p-2 border">{talent.name || "—"}</td>
//                     <td className="p-2 border">
//                       {Array.isArray(talent.skills)
//                         ? talent.skills.join(", ")
//                         : talent.skills || "—"}
//                     </td>
//                     <td className="p-2 border">{talent.role || "—"}</td>
//                     <td className="p-2 border">{talent.cohort || "—"}</td>
//                     <td className="p-2 border">{talent.availability || "—"}</td>
//                     <td className="p-2 border">{talent.status || "—"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="7"
//                     className="text-center text-gray-500 py-4 border-b"
//                   >
//                     No talents found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }
