import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';

function StatusPill({ status }) {
  const map = {
    Ongoing: 'bg-emerald-50 text-emerald-600',
    Completed: 'bg-green-50 text-green-600',
    Terminated: 'bg-red-50 text-red-600',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${map[status] || 'bg-gray-50 text-gray-600'}`}>
      {status}
    </span>
  );
}

/* -------------------- Mobile Card -------------------- */
function TalentCard({ row }) {
  return (
    <div className="block md:hidden bg-white rounded-lg border border-gray-100 shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img src={row.avatar} alt={row.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-medium text-gray-800">{row.name}</div>
          <div className="text-xs text-gray-400">{row.company}</div>
        </div>
      </div>
      <div className="text-gray-700 text-sm mb-1">Role: {row.role}</div>
      <div className="text-gray-600 text-sm mb-1">Start Date: {row.startDate}</div>
      <div className="text-gray-600 text-sm mb-1">Duration: {row.duration}</div>
      <div className="mb-2"><StatusPill status={row.status} /></div>
      <Link
        to={`/employer/talent-profile/${row.id}`}
        className="inline-flex items-center gap-2 text-emerald-600 text-sm"
      >
        View Profile <FiExternalLink />
      </Link>
    </div>
  );
}

/* -------------------- Table Component -------------------- */
export function TalentTable({ data }) {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-lg border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="text-sm text-gray-500 bg-gray-50">
            <tr>
              <th className="px-6 py-4">Talent Name</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Start Date</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={row.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-gray-800">{row.name}</div>
                    <div className="text-xs text-gray-400">{row.company}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{row.role}</td>
                <td className="px-6 py-4 text-gray-600">{row.startDate}</td>
                <td className="px-6 py-4 text-gray-600">{row.duration}</td>
                <td className="px-6 py-4"><StatusPill status={row.status} /></td>
                <td className="px-6 py-4 text-emerald-600 flex items-center gap-3">
                  <Link className="inline-flex items-center gap-2" to={`/employer/talent-profile/${row.id}`}>
                    View Profile <FiExternalLink />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      {data.map(row => (
        <TalentCard key={row.id} row={row} />
      ))}
    </div>
  );
}





























// import React from 'react';
// import { FiExternalLink } from "react-icons/fi";
// import { Link } from 'react-router-dom';





// function StatusPill({ status }) {
//     const map = {
//         Ongoing: 'bg-emerald-50 text-emerald-600',
//         Completed: 'bg-green-50 text-green-600',
//         Terminated: 'bg-red-50 text-red-600',
//     };
//     return (
//         <span className={`px-3 py-1 rounded-full text-sm font-medium ${map[status] || 'bg-gray-50 text-gray-600'}`}>
//             {status}
//         </span>
//     );
// }


// export function TalentTable({ data }) {
//     return (
//         <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
//             <div className="px-6 py-5 border-b">
//                 <h4 className="text-lg font-semibold">Talent Placement History</h4>
//             </div>


//             <table className="w-full text-left">
//                 <thead className="text-sm text-gray-500 bg-gray-50">
//                     <tr>
//                         <th className="px-6 py-4">Talent Name</th>
//                         <th className="px-6 py-4">Role</th>
//                         <th className="px-6 py-4">Start Date</th>
//                         <th className="px-6 py-4">Duration</th>
//                         <th className="px-6 py-4">Status</th>
//                         <th className="px-6 py-4">Actions</th>
//                     </tr>
//                 </thead>


//                 <tbody>
//                     {data.map((row) => (
//                         <tr key={row.id} className="border-b last:border-b-0">
//                             <td className="px-6 py-4 flex items-center gap-3">
//                                 <img src={row.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
//                                 <div>
//                                     <div className="font-medium text-gray-800">{row.name}</div>
//                                     <div className="text-xs text-gray-400">{row.company}</div>
//                                 </div>
//                             </td>


//                             <td className="px-6 py-4 text-gray-700">{row.role}</td>
//                             <td className="px-6 py-4 text-gray-600">{row.startDate}</td>
//                             <td className="px-6 py-4 text-gray-600">{row.duration}</td>
//                             <td className="px-6 py-4"><StatusPill status={row.status} /></td>
//                             <td className="px-6 py-4 text-emerald-600 flex items-center gap-3">

//                                 {/* <a className="inline-flex items-center gap-2" href={`/employer/talent-profile/${row.id}`}>
//                                     View Profile <FiExternalLink />
//                                 </a> */}
//                                 <Link className="inline-flex items-center gap-2" to={`/employer/talent-profile/${row.id}`}>
//                                     View Profile <FiExternalLink />
//                                 </Link>

//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }