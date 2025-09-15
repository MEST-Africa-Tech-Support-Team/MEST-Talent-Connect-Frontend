import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TalentHeader from "../components/TalentHeader";
import TalentCards from "../components/TalentCards";
import TalentPagination from "../components/TalentPagination";
import ViewTalentProfileModal from "../components/viewTalentProfileModal";
import { apiClient } from "../../api/client";

export default function TalentsPage() {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [talentsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [talentProfile, setTalentProfile] = useState(null);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  // Filters state with searchField added
  const [filters, setFilters] = useState({
    search: "",
    searchField: "name", // default search type
    skills: [],
    roles: [],
    availability: null,
    cohort: null,
  });

  const fetchTalents = () => {
    setIsLoading(true);
    setError(null);

    const params = {};

    // Dynamic search key based on selected field
    if (filters.search && filters.search.trim() !== "") {
      const field = filters.searchField || "name";
      params[field] = filters.search.trim();
    }

    if (filters.skills.length > 0) {
      params.skills = filters.skills.join(",");
    }

    if (filters.roles.length > 0) {
      params.role = filters.roles.join(",");
    }

    if (filters.cohort) {
      params.cohort = filters.cohort;
    }

    if (filters.availability) {
      params.availability = filters.availability;
    }

    const hasFilters = Object.keys(params).length > 0;
    const url = hasFilters ? "/talent-query" : "/talents";

    console.log("Fetching with params:", params);

    apiClient
      .get(url, { params })
      .then((response) => {
        const portfolios = response.data.portfolios || response.data;
        if (Array.isArray(portfolios)) {
          setTalents(portfolios);
          setTotalPages(Math.ceil(portfolios.length / talentsPerPage));
        } else {
          throw new Error("API response is not a valid array.");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch talents:", err);
        setError("Failed to load talents. Please try again later.");
        setTalents([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Fetch talents when filters change
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchTalents();
    }, 500);
    return () => clearTimeout(handler);
  }, [filters]);

  // Fetch full profile when a card is clicked
  useEffect(() => {
    if (selectedTalent) {
      setIsModalLoading(true);
      apiClient
        .get(`/talent/${selectedTalent.id}`)
        .then((response) => setTalentProfile(response.data.portfolio))
        .catch((err) => {
          console.error("Failed to fetch talent profile:", err);
          setTalentProfile(null);
        })
        .finally(() => setIsModalLoading(false));
    }
  }, [selectedTalent]);

  const indexOfLastTalent = currentPage * talentsPerPage;
  const indexOfFirstTalent = indexOfLastTalent - talentsPerPage;
  const displayedTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent);

  return (
    <PageWrapper>
      <Navbar />
      <div className="pt-[73.8px] min-h-[80vh] px-4">
        {/* You can replace this with <TalentHeader /> if it contains your actual filters UI */}
        <div className="my-4 flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* Search field type selector */}

          {/* Search input */}
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
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
          />
          <select
            value={filters.searchField}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                searchField: e.target.value,
              }))
            }
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="name">Search by Name</option>
            <option value="role">Search by Role</option>
            <option value="skills">Search by Skill</option>
          </select>

          {/* 👇 Place the FilterSidebar here so it overlays */}
          {isFilterSidebarOpen && (
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              onClose={() => setIsFilterSidebarOpen(false)}
            />
          )}
        </div>

        {isLoading ? (
          <div className="text-center text-lg mt-10">Loading talents...</div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg mt-10">{error}</div>
        ) : (
          <>
            <TalentCards
              talents={displayedTalents}
              onViewProfile={(talent) => setSelectedTalent(talent)}
            />
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
          setSelectedTalent(null);
          setTalentProfile(null);
        }}
        talent={talentProfile}
        isLoading={isModalLoading}
      />
    </PageWrapper>
  );
}
