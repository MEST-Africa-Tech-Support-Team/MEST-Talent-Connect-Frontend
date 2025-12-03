import React, { useMemo, useState } from 'react';
import { FiUsers, FiClock, FiBriefcase } from "react-icons/fi";
import {StatsCard} from '../../components/StatsCard.jsx';
import { SearchFilters } from '../../components/SearchFilters.jsx';
import { TalentTable } from '../../components/TalentTable.jsx';



/* -------------------- Pagination Component -------------------- */
function Pagination({ current, total, onChange }) {
  const pages = useMemo(() => {
    const p = [];
    for (let i = 1; i <= total; i++) p.push(i);
    return p;
  }, [total]);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        className="px-3 py-2 rounded-md border"
      >
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-2 rounded-md border ${
            p === current ? "bg-emerald-500 text-white" : ""
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        className="px-3 py-2 rounded-md border"
      >
        Next
      </button>
    </div>
  );
}

/* -------------------- Page: HiredTalentHistory -------------------- */
export default function HiredTalentHistory() {

  const MOCK = [
    { id: 1, name: 'John Doe', company: 'Acme Inc', role: 'Senior Developer', startDate: 'Jan 15, 2024', duration: '6 months', status: 'Ongoing', avatar: 'https://i.pravatar.cc/100?img=10' },
    { id: 2, name: 'Sarah Wilson', company: 'Prodify', role: 'Product Manager', startDate: 'Dec 1, 2023', duration: '3 months', status: 'Completed', avatar: 'https://i.pravatar.cc/100?img=20' },
    { id: 3, name: 'Mike Johnson', company: 'DataWorks', role: 'Data Analyst', startDate: 'Nov 10, 2023', duration: '4 months', status: 'Ongoing', avatar: 'https://i.pravatar.cc/100?img=30' },
    { id: 4, name: 'Emma Davis', company: 'DesignLab', role: 'UX Designer', startDate: 'Oct 5, 2023', duration: '2 months', status: 'Terminated', avatar: 'https://i.pravatar.cc/100?img=40' },
    { id: 5, name: 'Alex Brown', company: 'FrontendCo', role: 'Frontend Developer', startDate: 'Sep 20, 2023', duration: '5 months', status: 'Completed', avatar: 'https://i.pravatar.cc/100?img=50' },
  ];

  const [filters, setFilters] = useState({ q: '', role: 'All Roles', status: 'All Status' });
  const [page, setPage] = useState(1);

  function handleFilter(updated) {
    setFilters(updated);
    setPage(1);
  }

  const filtered = useMemo(() => {
    return MOCK.filter((m) => {
      if (filters.role !== 'All Roles' && m.role !== filters.role) return false;
      if (filters.status !== 'All Status' && m.status !== filters.status) return false;
      if (
        filters.q &&
        !(
          m.name.toLowerCase().includes(filters.q.toLowerCase()) ||
          m.company.toLowerCase().includes(filters.q.toLowerCase())
        )
      )
        return false;
      return true;
    });
  }, [filters]);

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <header className="mb-6">
          <h1 className="text-3xl font-bold">Hired Talent History</h1>
          <p className="text-gray-500 mt-1">Track and manage all talent placements across companies</p>
        </header>

        <div className="flex gap-6 mb-6">
          <StatsCard title="Total Placements" value={127} icon={<FiUsers />} accent="bg-emerald-400" />
          <StatsCard title="Ongoing Contracts" value={89} icon={<FiClock />} accent="bg-orange-400" />
          <StatsCard title="Completed Projects" value={38} icon={<FiBriefcase />} accent="bg-green-300" />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <SearchFilters onFilter={handleFilter} />
        </div>

        <TalentTable data={pageData} />

        <Pagination current={page} total={totalPages} onChange={setPage} />

      </div>
    </div>
  );
}
