// import React, { useState, useEffect } from "react";
// import PageWrapper from "../components/PageWrapper";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import TalentHeader from "../components/TalentHeader";
// import TalentCards from "../components/TalentCards";
// import TalentPagination from "../components/TalentPagination";
// import ViewTalentProfileModal from "../components/viewTalentProfileModal";
// import { apiClient } from "../../api/client";
//
// export default function TalentsPage() {
//   const [talents, setTalents] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [talentsPerPage] = useState(12);
//   const [totalPages, setTotalPages] = useState(0);
//   const [selectedTalent, setSelectedTalent] = useState(null);
//   const [talentProfile, setTalentProfile] = useState(null);
//   const [isModalLoading, setIsModalLoading] = useState(false);
//   const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
//
//   // Filters state with searchField added
//   const [filters, setFilters] = useState({
//     search: "",
//     searchField: "name", // default search type
//     skills: [],
//     roles: [],
//     availability: null,
//     cohort: null,
//   });
//
//   const fetchTalents = () => {
//     setIsLoading(true);
//     setError(null);
//
//     const params = {};
//
//     // Dynamic search key based on selected field
//     if (filters.search && filters.search.trim() !== "") {
//       const field = filters.searchField || "name";
//       params[field] = filters.search.trim();
//     }
//
//     if (filters.skills.length > 0) {
//       params.skills = filters.skills.join(",");
//     }
//
//     if (filters.roles.length > 0) {
//       params.role = filters.roles.join(",");
//     }
//
//     if (filters.cohort) {
//       params.cohort = filters.cohort;
//     }
//
//     if (filters.availability) {
//       params.availability = filters.availability;
//     }
//
//     const hasFilters = Object.keys(params).length > 0;
//     const url = hasFilters ? "/talent-query" : "/talents";
//
//     console.log("Fetching with params:", params);
//
//     apiClient
//       .get(url, { params })
//       .then((response) => {
//         const portfolios = response.data.portfolios || response.data;
//         if (Array.isArray(portfolios)) {
//           setTalents(portfolios);
//           setTotalPages(Math.ceil(portfolios.length / talentsPerPage));
//         } else {
//           throw new Error("API response is not a valid array.");
//         }
//       })
//       .catch((err) => {
//         console.error("Failed to fetch talents:", err);
//         setError("Failed to load talents. Please try again later.");
//         setTalents([]);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };
//
//   // Fetch talents when filters change
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       fetchTalents();
//     }, 500);
//     return () => clearTimeout(handler);
//   }, [filters]);
//
//   // Fetch full profile when a card is clicked
//   useEffect(() => {
//     if (selectedTalent) {
//       setIsModalLoading(true);
//       apiClient
//         .get(`/talent/${selectedTalent.id}`)
//         .then((response) => setTalentProfile(response.data.portfolio))
//         .catch((err) => {
//           console.error("Failed to fetch talent profile:", err);
//           setTalentProfile(null);
//         })
//         .finally(() => setIsModalLoading(false));
//     }
//   }, [selectedTalent]);
//
//   const indexOfLastTalent = currentPage * talentsPerPage;
//   const indexOfFirstTalent = indexOfLastTalent - talentsPerPage;
//   const displayedTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent);
//
//   return (
//     <PageWrapper className="bg-white">
//         <Navbar isFixed={false} isTransparent={false} />
//
//         <div className="min-h-[100vh] px-4 bg-white">
//         {/* You can replace this with <TalentHeader /> if it contains your actual filters UI */}
//         <div className="my-4 flex flex-col md:flex-row gap-4 items-center justify-center">
//           {/* Search field type selector */}
//
//           {/* Search input */}
//           <input
//             type="text"
//             placeholder={`Search talents by ${filters.searchField}`}
//             value={filters.search}
//             onChange={(e) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 search: e.target.value,
//               }))
//             }
//             className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
//           />
//           <select
//             value={filters.searchField}
//             onChange={(e) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 searchField: e.target.value,
//               }))
//             }
//             className="border border-gray-300 rounded px-3 py-2"
//           >
//             <option value="name">Search by Name</option>
//             <option value="role">Search by Role</option>
//             <option value="skills">Search by Skill</option>
//           </select>
//
//           {/* 👇 Place the FilterSidebar here so it overlays */}
//           {isFilterSidebarOpen && (
//             <FilterSidebar
//               filters={filters}
//               setFilters={setFilters}
//               onClose={() => setIsFilterSidebarOpen(false)}
//             />
//           )}
//         </div>
//
//         {isLoading ? (
//           <div className="text-center text-lg mt-10">Loading talents...</div>
//         ) : error ? (
//           <div className="text-center text-red-500 text-lg mt-10">{error}</div>
//         ) : (
//           <>
//             <TalentCards
//               talents={displayedTalents}
//               onViewProfile={(talent) => setSelectedTalent(talent)}
//             />
//             <TalentPagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={setCurrentPage}
//             />
//           </>
//         )}
//       </div>
//       <Footer />
//       <ViewTalentProfileModal
//         isOpen={!!selectedTalent}
//         onClose={() => {
//           setSelectedTalent(null);
//           setTalentProfile(null);
//         }}
//         talent={talentProfile}
//         isLoading={isModalLoading}
//       />
//     </PageWrapper>
//   );
// }


// "use client"
//
// import {useEffect, useState} from "react"
// import PageWrapper from "../components/PageWrapper"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import TalentCards from "../components/TalentCards"
// import TalentPagination from "../components/TalentPagination"
// import ViewTalentProfileModal from "../components/viewTalentProfileModal"
// import {apiClient} from "../../api/client"
// import FilterSidebar from "../components/FilterSidebar" // Ensure this import is present
//
// export default function TalentsPage() {
//     const [talents, setTalents] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [talentsPerPage] = useState(12)
//     const [totalPages, setTotalPages] = useState(0)
//     const [selectedTalent, setSelectedTalent] = useState(null)
//     const [talentProfile, setTalentProfile] = useState(null)
//     const [isModalLoading, setIsModalLoading] = useState(false)
//     const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false)
//
//     // Filters state with searchField added
//     const [filters, setFilters] = useState({
//         search: "",
//         searchField: "name", // default search type
//         skills: [],
//         roles: [],
//         availability: null,
//         cohort: null,
//     })
//
//     const fetchTalents = () => {
//         setIsLoading(true)
//         setError(null)
//
//         const params = {}
//
//         // Dynamic search key based on selected field
//         if (filters.search && filters.search.trim() !== "") {
//             const field = filters.searchField || "name"
//             params[field] = filters.search.trim()
//         }
//
//         if (filters.skills.length > 0) {
//             params.skills = filters.skills.join(",")
//         }
//
//         if (filters.roles.length > 0) {
//             params.role = filters.roles.join(",")
//         }
//
//         if (filters.cohort) {
//             params.cohort = filters.cohort
//         }
//
//         if (filters.availability) {
//             params.availability = filters.availability
//         }
//
//         const hasFilters = Object.keys(params).length > 0
//         const url = hasFilters ? "/talent-query" : "/talents"
//
//         console.log("Fetching with params:", params)
//
//         apiClient
//             .get(url, {params})
//             .then((response) => {
//                 const portfolios = response.data.portfolios || response.data
//                 if (Array.isArray(portfolios)) {
//                     setTalents(portfolios)
//                     setTotalPages(Math.ceil(portfolios.length / talentsPerPage))
//                 } else {
//                     throw new Error("API response is not a valid array.")
//                 }
//             })
//             .catch((err) => {
//                 console.error("Failed to fetch talents:", err)
//                 setError("No talent with the specified criteria was found. Please try different filters.")
//                 setTalents([])
//             })
//             .finally(() => {
//                 setIsLoading(false)
//             })
//     }
//
//     // Fetch talents when filters change
//     useEffect(() => {
//         const handler = setTimeout(() => {
//             fetchTalents()
//         }, 500)
//         return () => clearTimeout(handler)
//     }, [filters])
//
//     // Fetch full profile when a card is clicked
//     useEffect(() => {
//         if (selectedTalent) {
//             setIsModalLoading(true)
//             apiClient
//                 .get(`/talent/${selectedTalent.id}`)
//                 .then((response) => setTalentProfile(response.data.portfolio))
//                 .catch((err) => {
//                     console.error("Failed to fetch talent profile:", err)
//                     setTalentProfile(null)
//                 })
//                 .finally(() => setIsModalLoading(false))
//         }
//     }, [selectedTalent])
//
//     const indexOfLastTalent = currentPage * talentsPerPage
//     const indexOfFirstTalent = indexOfLastTalent - talentsPerPage
//     const displayedTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent)
//
//     return (
//         <PageWrapper className="bg-white">
//             <Navbar isFixed={false} isTransparent={false}/>
//
//             <div className="min-h-[100vh] px-4 bg-white">
//                 <div className="my-8 flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
//                     {/* Search Container */}
//                     <div className="relative flex-1 w-full md:max-w-md">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
//                                  viewBox="0 0 24 24">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                                 />
//                             </svg>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder={`Search talents by ${filters.searchField}`}
//                             value={filters.search}
//                             onChange={(e) =>
//                                 setFilters((prev) => ({
//                                     ...prev,
//                                     search: e.target.value,
//                                 }))
//                             }
//                             className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-100)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                         />
//                     </div>
//
//                     {/* Filter Dropdown */}
//                     <div className="relative">
//                         <select
//                             value={filters.searchField}
//                             onChange={(e) =>
//                                 setFilters((prev) => ({
//                                     ...prev,
//                                     searchField: e.target.value,
//                                 }))
//                             }
//                             // className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:bg-[var(--color-accent)] focus:border-transparent transition-all duration-200 text-gray-700 font-medium cursor-pointer hover:bg-gray-50"
//                             className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 shadow-sm text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50
//            focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]
//            focus:bg-[var(--color-secondary)] focus:border-transparent focus:text-white">
//                             <option value="name">Search by Name</option>
//                             <option value="role">Search by Role</option>
//                             <option value="skills">Search by Skill</option>
//                         </select>
//                         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                             <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor"
//                                  viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
//                             </svg>
//                         </div>
//                     </div>
//
//                      Filter Button
//                     <button
//                         onClick={() => setIsFilterSidebarOpen(true)}
//                         className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
//                     >
//                         <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
//                             />
//                         </svg>
//                         Filters
//                     </button>
//
//                     {/* 👇 Place the FilterSidebar here so it overlays */}
//                     {isFilterSidebarOpen && (
//                         <FilterSidebar filters={filters} setFilters={setFilters}
//                                        onClose={() => setIsFilterSidebarOpen(false)}/>
//                     )}
//                 </div>
//
//                 {isLoading ? (
//                     <div className="text-center text-lg mt-10">Loading talents...</div>
//                 ) : error ? (
//                     <div className="text-center text-red-500 text-lg mt-10">{error}</div>
//                 ) : (
//                     <>
//                         <TalentCards talents={displayedTalents} onViewProfile={(talent) => setSelectedTalent(talent)}/>
//                         <TalentPagination currentPage={currentPage} totalPages={totalPages}
//                                           onPageChange={setCurrentPage}/>
//                     </>
//                 )}
//             </div>
//             <Footer/>
//             <ViewTalentProfileModal
//                 isOpen={!!selectedTalent}
//                 onClose={() => {
//                     setSelectedTalent(null)
//                     setTalentProfile(null)
//                 }}
//                 talent={talentProfile}
//                 isLoading={isModalLoading}
//             />
//         </PageWrapper>
//     )
// }



// "use client"
//
// import {useEffect, useState} from "react"
// import PageWrapper from "../components/PageWrapper"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import TalentCards from "../components/TalentCards"
// import TalentPagination from "../components/TalentPagination"
// import ViewTalentProfileModal from "../components/viewTalentProfileModal"
// import {apiClient} from "../../api/client"
//
// export default function TalentsPage() {
//     const [talents, setTalents] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [talentsPerPage] = useState(12)
//     const [totalPages, setTotalPages] = useState(0)
//     const [selectedTalent, setSelectedTalent] = useState(null)
//     const [talentProfile, setTalentProfile] = useState(null)
//     const [isModalLoading, setIsModalLoading] = useState(false)
//
//     // Filters state with searchField
//     const [filters, setFilters] = useState({
//         search: "",
//         searchField: "name", // default search type
//     })
//
//     const fetchTalents = () => {
//         setIsLoading(true)
//         setError(null)
//
//         const params = {}
//
//         // Dynamic search key based on selected field
//         if (filters.search && filters.search.trim() !== "") {
//             const field = filters.searchField || "name"
//             params[field] = filters.search.trim()
//         }
//
//         const hasFilters = Object.keys(params).length > 0
//         const url = hasFilters ? "/talent-query" : "/talents"
//
//         console.log("Fetching with params:", params)
//
//         apiClient
//             .get(url, {params})
//             .then((response) => {
//                 const portfolios = response.data.portfolios || response.data
//                 if (Array.isArray(portfolios)) {
//                     setTalents(portfolios)
//                     setTotalPages(Math.ceil(portfolios.length / talentsPerPage))
//                 } else {
//                     throw new Error("API response is not a valid array.")
//                 }
//             })
//             .catch((err) => {
//                 console.error("Failed to fetch talents:", err)
//                 setError("No talent with the specified criteria was found. Please try different search options.")
//                 setTalents([])
//             })
//             .finally(() => {
//                 setIsLoading(false)
//             })
//     }
//
//     // Fetch talents when filters change
//     useEffect(() => {
//         const handler = setTimeout(() => {
//             fetchTalents()
//         }, 500)
//         return () => clearTimeout(handler)
//     }, [filters])
//
//     // Fetch full profile when a card is clicked
//     useEffect(() => {
//         if (selectedTalent) {
//             setIsModalLoading(true)
//             apiClient
//                 .get(`/talent/${selectedTalent.id}`)
//                 .then((response) => setTalentProfile(response.data.portfolio))
//                 .catch((err) => {
//                     console.error("Failed to fetch talent profile:", err)
//                     setTalentProfile(null)
//                 })
//                 .finally(() => setIsModalLoading(false))
//         }
//     }, [selectedTalent])
//
//     const indexOfLastTalent = currentPage * talentsPerPage
//     const indexOfFirstTalent = indexOfLastTalent - talentsPerPage
//     const displayedTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent)
//
//     return (
//         <PageWrapper className="bg-white">
//             <Navbar isFixed={false} isTransparent={false}/>
//
//             <div className="min-h-[100vh] px-4 bg-white">
//                 <div className="my-8 flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
//                     {/* Search Container */}
//                     <div className="relative flex-1 w-full md:max-w-md">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
//                                  viewBox="0 0 24 24">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                                 />
//                             </svg>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder={`Search talents by ${filters.searchField}`}
//                             value={filters.search}
//                             onChange={(e) =>
//                                 setFilters((prev) => ({
//                                     ...prev,
//                                     search: e.target.value,
//                                 }))
//                             }
//                             className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-100)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                         />
//                     </div>
//                     <div className="relative">
//                         <select
//                             value={filters.searchField}
//                             onChange={(e) =>
//                                 setFilters((prev) => ({
//                                     ...prev,
//                                     searchField: e.target.value,
//                                 }))
//                             }
//                             // className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:bg-[var(--color-accent)] focus:border-transparent transition-all duration-200 text-gray-700 font-medium cursor-pointer hover:bg-gray-50"
//                             className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 shadow-sm text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50
//                                focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]
//                                focus:bg-[var(--color-secondary)] focus:border-transparent focus:text-white">
//                             <option value="name">Search by Name</option>
//                             <option value="role">Search by Role</option>
//                             <option value="skills">Search by Skill</option>
//                         </select>
//                         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                             <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor"
//                                  viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
//                             </svg>
//                         </div>
//                     </div>
//
//                 </div>
//
//                 {isLoading ? (
//                     <div className="text-center text-lg mt-10">Loading talents...</div>
//                 ) : error ? (
//                     <div className="text-center text-red-500 text-lg mt-10">{error}</div>
//                 ) : (
//                     <>
//                         <TalentCards talents={displayedTalents} onViewProfile={(talent) => setSelectedTalent(talent)}/>
//                         <TalentPagination currentPage={currentPage} totalPages={totalPages}
//                                           onPageChange={setCurrentPage}/>
//                     </>
//                 )}
//             </div>
//             <Footer/>
//             <ViewTalentProfileModal
//                 isOpen={!!selectedTalent}
//                 onClose={() => {
//                     setSelectedTalent(null)
//                     setTalentProfile(null)
//                 }}
//                 talent={talentProfile}
//                 isLoading={isModalLoading}
//             />
//         </PageWrapper>
//     )
// }


"use client"

import { useEffect, useState, useCallback } from "react"
import PageWrapper from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TalentCards from "../components/TalentCards"
import TalentPagination from "../components/TalentPagination"
import ViewTalentProfileModal from "../components/viewTalentProfileModal"
import { apiClient } from "../../api/client"

export default function TalentsPage() {
    const [talents, setTalents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [talentsPerPage] = useState(12)
    const [totalPages, setTotalPages] = useState(0)
    const [selectedTalent, setSelectedTalent] = useState(null)
    const [talentProfile, setTalentProfile] = useState(null)
    const [isModalLoading, setIsModalLoading] = useState(false)

    // Filters state with searchField
    const [filters, setFilters] = useState({
        search: "",
        searchField: "name", // default search type
    })

    // Wrapped fetch function with useCallback
    const fetchTalents = useCallback(() => {
        setIsLoading(true)
        setError(null)

        const params = {}

        // Dynamic search key based on selected field
        if (filters.search && filters.search.trim() !== "") {
            const field = filters.searchField || "name"
            params[field] = filters.search.trim()
        }

        const hasFilters = Object.keys(params).length > 0
        const url = hasFilters ? "/talent-query" : "/talents"

        console.log("Fetching with params:", params)

        apiClient
            .get(url, { params })
            .then((response) => {
                const portfolios = response.data.portfolios || response.data
                if (Array.isArray(portfolios)) {
                    setTalents(portfolios)
                    setTotalPages(Math.ceil(portfolios.length / talentsPerPage))
                } else {
                    throw new Error("API response is not a valid array.")
                }
            })
            .catch((err) => {
                console.error("Failed to fetch talents:", err)
                setError("No talent with the specified criteria was found. Please try different search options.")
                setTalents([])
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [filters, talentsPerPage]) // dependencies

    // Fetch talents when filters change (debounced)
    useEffect(() => {
        const handler = setTimeout(() => {
            fetchTalents()
        }, 500)
        return () => clearTimeout(handler)
    }, [fetchTalents])

    // Fetch full profile when a card is clicked
    useEffect(() => {
        if (selectedTalent) {
            setIsModalLoading(true)
            apiClient
                .get(`/talent/${selectedTalent.id}`)
                .then((response) => setTalentProfile(response.data.portfolio))
                .catch((err) => {
                    console.error("Failed to fetch talent profile:", err)
                    setTalentProfile(null)
                })
                .finally(() => setIsModalLoading(false))
        }
    }, [selectedTalent])

    const indexOfLastTalent = currentPage * talentsPerPage
    const indexOfFirstTalent = indexOfLastTalent - talentsPerPage
    const displayedTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent)

    return (
        <PageWrapper className="bg-white">
            <Navbar isFixed={false} isTransparent={false} />

            <div className="min-h-[100vh] px-4 bg-white">
                <div className="my-8 flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
                    {/* Search Container */}
                    <div className="relative flex-1 w-full md:max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder={`Search talents by ${filters.searchField}`}
                            value={filters.search}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    search: e.target.value,
                                }))
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-100)] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        />
                    </div>
                    <div className="relative">
                        <select
                            value={filters.searchField}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    searchField: e.target.value,
                                }))
                            }
                            className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 shadow-sm text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50
                               focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]
                               focus:bg-[var(--color-secondary)] focus:border-transparent focus:text-white"
                        >
                            <option value="name">Search by Name</option>
                            <option value="role">Search by Role</option>
                            <option value="skills">Search by Skill</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="text-center text-lg mt-10">Loading talents...</div>
                ) : error ? (
                    <div className="text-center text-red-500 text-lg mt-10">{error}</div>
                ) : (
                    <>
                        <TalentCards talents={displayedTalents} onViewProfile={(talent) => setSelectedTalent(talent)} />
                        <TalentPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </div>

            <Footer />

            <ViewTalentProfileModal
                isOpen={!!selectedTalent}
                onClose={() => {
                    setSelectedTalent(null)
                    setTalentProfile(null)
                }}
                talent={talentProfile}
                isLoading={isModalLoading}
            />
        </PageWrapper>
    )
}
