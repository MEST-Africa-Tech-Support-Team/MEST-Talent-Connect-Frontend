import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-md bg-white shadow-sm">☰</button>
        <div className="bg-teal-500 rounded-lg px-6 py-6 text-white hidden md:block" style={{display:'none'}}></div>
      </div>

      <div className="flex items-center gap-4">
        {/* <div className="relative hidden sm:flex items-center">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white text-sm w-64" placeholder="Search candidates, jobs..." />
        </div> */}

        <button className="relative">
          <FiBell className="text-gray-500 text-lg" />
          <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">3</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white font-medium">JC</div>
          <div className="text-sm">
            <div className="font-medium">Jessica Chen</div>
            <div className="text-xs text-gray-400">TechNova Inc.</div>
          </div>
        </div>
      </div>
    </header>
  );
}
