import React, { useState } from 'react';
import { FiDownload } from "react-icons/fi";


export function SearchFilters({ onFilter }) {
    const [q, setQ] = useState('');
    const [role, setRole] = useState('All Roles');
    const [status, setStatus] = useState('All Status');


    function handleSearch() {
        onFilter({ q, role, status });
    }


    return (
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
                <div className="relative">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Search talent or company..."
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 placeholder-gray-400 shadow-sm"
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute right-2 top-2 h-9 px-3 rounded-md bg-white border border-gray-200"
                    >
                        🔎
                    </button>
                </div>
            </div>


            <select value={role} onChange={(e) => setRole(e.target.value)} className="rounded-lg border border-gray-200 px-4 py-3">
                <option>All Roles</option>
                <option>Senior Developer</option>
                <option>Product Manager</option>
                <option>Data Analyst</option>
                <option>UX Designer</option>
                <option>Frontend Developer</option>
            </select>


            <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-gray-200 px-4 py-3">
                <option>All Status</option>
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Terminated</option>
            </select>


            <button className="ml-auto md:ml-4 bg-emerald-500 text-white rounded-lg px-4 py-3 flex items-center gap-2">
                <FiDownload />
                <span>Export Full Data</span>
            </button>
        </div>
    );
}