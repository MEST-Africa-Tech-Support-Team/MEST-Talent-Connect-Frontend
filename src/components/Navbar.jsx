// ...existing code...
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoteal from "../assets/logoteal.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src={logoteal}
                        alt="mest logo"
                        className="h-7 w-auto"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <a href="#" className="font-semibold text-black">
                        How it works
                    </a>
                    <a href="#" className="font-medium text-gray-700 hover:text-black">
                        Talents
                    </a>
                    <a href="#" className="font-medium text-gray-700 hover:text-black">
                        About
                    </a>
                    <a href="#" className="font-medium text-gray-700 hover:text-black">
                        Faqs
                    </a>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/app"
                        className="px-6 py-2 border border-teal-500 text-teal-600 rounded-md font-semibold hover:bg-teal-50 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="#" 
                    className="px-6 py-2 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                >
                    {open ? (
                        <X className="w-6 h-6 text-gray-700" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-700" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-gray-100`}>
                <div className="px-6 py-4 space-y-4 flex flex-col">
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="font-semibold text-black"
                    >
                        How it works
                    </a>
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="font-medium text-gray-700 hover:text-black"
                    >
                        Talents
                    </a>
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="font-medium text-gray-700 hover:text-black"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="font-medium text-gray-700 hover:text-black"
                    >
                        Faqs
                    </a>

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
                        <Link
                            to="/app"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 border border-teal-500 text-teal-600 rounded-md font-semibold text-center"
                        >
                            Login
                        </Link>
                        <Link
                            to="#"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
