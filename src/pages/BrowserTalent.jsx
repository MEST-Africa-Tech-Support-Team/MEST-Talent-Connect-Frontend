import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BrowserTalent() {
  // ✅ Step 3: Initialize state properly
  const [talents, setTalents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Step 1: Fetch all talents initially
  const fetchAllTalents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://mest-talent-connect-backend.onrender.com/api/V1/talents",
        { headers: { "Cache-Control": "no-cache" } }
      );

      // ✅ The data is inside response.data.portfolios
      if (response.data && Array.isArray(response.data.portfolios)) {
        setTalents(response.data.portfolios);
      } else {
        setTalents([]);
      }
    } catch (error) {
      console.error("Error fetching all talents:", error);
      setTalents([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: Fetch filtered talents (by name or skills)
  const fetchFilteredTalents = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://mest-talent-connect-backend.onrender.com/api/V1/talent-query?role=${query}&skills=${query}`,
        { headers: { "Cache-Control": "no-cache" } }
      );

      // Some query endpoints may return directly, so handle both formats
      if (response.data?.portfolios && Array.isArray(response.data.portfolios)) {
        setTalents(response.data.portfolios);
      } else if (Array.isArray(response.data)) {
        setTalents(response.data);
      } else {
        setTalents([]);
      }
    } catch (error) {
      console.error("Error fetching filtered talents:", error);
      setTalents([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load all talents when page mounts
  useEffect(() => {
    fetchAllTalents();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      fetchAllTalents(); // reset to all
    } else {
      fetchFilteredTalents(value); // filter via query
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Talent</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by role or skill..."
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto w-full bg-white rounded-lg shadow-sm">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Skills</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Cohort</th>
                <th className="p-2 border">Availability</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {talents.length > 0 ? (
                talents.map((talent, index) => (
                  <tr key={talent.id || index} className="hover:bg-gray-50">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{talent.name || "—"}</td>
                    <td className="p-2 border">
                      {Array.isArray(talent.skills)
                        ? talent.skills.join(", ")
                        : talent.skills || "—"}
                    </td>
                    <td className="p-2 border">{talent.role || "—"}</td>
                    <td className="p-2 border">{talent.cohort || "—"}</td>
                    <td className="p-2 border">{talent.availability || "—"}</td>
                    <td className="p-2 border">{talent.status || "—"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-gray-500 py-4 border-b"
                  >
                    No talents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function BrowserTalent() {
//   const [allTalents, setAllTalents] = useState([]); // store all
//   const [filteredTalents, setFilteredTalents] = useState([]); // store filtered view
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch all talents on mount
//   const fetchTalents = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://mest-talent-connect-backend.onrender.com/api/V1/talent-query"
//       );
//       if (response.data && Array.isArray(response.data)) {
//         setAllTalents(response.data);
//         setFilteredTalents(response.data);
//       } else {
//         setAllTalents([]);
//         setFilteredTalents([]);
//       }
//     } catch (error) {
//       console.error("Error fetching talents:", error);
//       setAllTalents([]);
//       setFilteredTalents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTalents();
//   }, []);

//   // Local search filter
//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearch(value);

//     const filtered = allTalents.filter((t) => {
//       return (
//         t.name?.toLowerCase().includes(value) ||
//         t.role?.toLowerCase().includes(value) ||
//         t.skills?.join(", ").toLowerCase().includes(value) ||
//         t.cohort?.toLowerCase().includes(value)
//       );
//     });
//     setFilteredTalents(filtered);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Browse Talent</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by name, role, or skill..."
//           className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
//         />
//       </div>

//       {loading ? (
//         <div className="text-gray-500">Loading...</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border rounded-lg bg-white shadow-sm">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="px-4 py-2 border-b">Cohort</th>
//                 <th className="px-4 py-2 border-b">Name</th>
//                 <th className="px-4 py-2 border-b">Role</th>
//                 <th className="px-4 py-2 border-b">Skills</th>
//                 <th className="px-4 py-2 border-b">Availability</th>
//                 <th className="px-4 py-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTalents.length > 0 ? (
//                 filteredTalents.map((t, i) => (
//                   <tr key={i} className="hover:bg-gray-50">
//                     <td className="px-4 py-2 border-b">{t.cohort || "—"}</td>
//                     <td className="px-4 py-2 border-b">{t.name || "—"}</td>
//                     <td className="px-4 py-2 border-b">{t.role || "—"}</td>
//                     <td className="px-4 py-2 border-b">
//                       {t.skills?.join(", ") || "—"}
//                     </td>
//                     <td className="px-4 py-2 border-b">
//                       {t.availability || "—"}
//                     </td>
//                     <td className="px-4 py-2 border-b">{t.status || "—"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="text-center text-gray-500 py-4 border-b"
//                   >
//                     No matching results found.
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

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function BrowserTalent() {
//   const [talents, setTalents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to fetch all talents or by name/skill
//   const fetchTalents = async (query = "") => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://mest-talent-connect-backend.onrender.com/api/V1/talent-query${
//           query ? `?name=${query}` : ""
//         }`
//       );
//       if (response.data && Array.isArray(response.data)) {
//         setTalents(response.data);
//       } else {
//         setTalents([]);
//       }
//     } catch (error) {
//       console.error("Error fetching talents:", error);
//       setTalents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTalents(); // Load all on mount
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     fetchTalents(value);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Browse Talent</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by name..."
//           className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
//         />
//       </div>

//       {loading ? (
//         <div className="text-gray-500">Loading...</div>
//       ) : talents.length === 0 ? (
//         <div className="text-gray-500">No talents found.</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border rounded-lg bg-white shadow-sm">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="px-4 py-2 border-b">Cohort</th>
//                 <th className="px-4 py-2 border-b">Name</th>
//                 <th className="px-4 py-2 border-b">Role</th>
//                 <th className="px-4 py-2 border-b">Skills</th>
//                 <th className="px-4 py-2 border-b">Availability</th>
//                 <th className="px-4 py-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {talents.map((t, i) => (
//                 <tr key={i} className="hover:bg-gray-50">
//                   <td className="px-4 py-2 border-b">{t.cohort || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.name || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.role || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.skills?.join(", ") || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.availability || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.status || "—"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function BrowserTalent() {
//   const [talents, setTalents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to fetch all talents or by name/skill
//   const fetchTalents = async (query = "") => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://mest-talent-connect-backend.onrender.com/api/V1/talent-query${
//           query ? `?name=${query}` : ""
//         }`
//       );
//       // Make sure to check if data exists
//       if (response.data && Array.isArray(response.data)) {
//         setTalents(response.data);
//       } else {
//         setTalents([]);
//       }
//     } catch (error) {
//       console.error("Error fetching talents:", error);
//       setTalents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTalents(); // Load all on mount
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value);
//     fetchTalents(value);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Browse Talent</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by name..."
//           className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-400 outline-none"
//         />
//       </div>

//       {loading ? (
//         <div className="text-gray-500">Loading...</div>
//       ) : talents.length === 0 ? (
//         <div className="text-gray-500">No talents found.</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border rounded-lg bg-white shadow-sm">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="px-4 py-2 border-b">Cohort</th>
//                 <th className="px-4 py-2 border-b">Name</th>
//                 <th className="px-4 py-2 border-b">Role</th>
//                 <th className="px-4 py-2 border-b">Skills</th>
//                 <th className="px-4 py-2 border-b">Availability</th>
//                 <th className="px-4 py-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {talents.map((t, i) => (
//                 <tr key={i} className="hover:bg-gray-50">
//                   <td className="px-4 py-2 border-b">{t.cohort || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.name || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.role || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.skills?.join(", ") || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.availability || "—"}</td>
//                   <td className="px-4 py-2 border-b">{t.status || "—"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }