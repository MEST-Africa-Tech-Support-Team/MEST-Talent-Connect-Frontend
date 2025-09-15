// import

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import logoWhite from "../assets/logo-white.png";
import logoTeal from "../assets/logo-teal.png";

export default function Navbar({ isFixed = true, isTransparent = true }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (!isTransparent) return; // disable scroll effect when not transparent

        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isTransparent]);

    // Container classes
    const headerClasses = `
        ${isFixed ? "fixed" : "relative"}
        top-0 left-0 w-full z-50 transition-all duration-300
        ${
        isTransparent
            ? scrolled
                ? "bg-white shadow-md"
                : "bg-transparent"
            : "bg-white shadow-md"
    }
    `;

    const textClasses = isTransparent
        ? scrolled
            ? "text-gray-800"
            : "text-white"
        : "text-gray-800";

    const logoSrc = isTransparent
        ? scrolled
            ? logoTeal
            : logoWhite
        : logoTeal;

    return (
        <header className={headerClasses}>
            <div className="max-w-[1280px] h-[72px] mx-auto px-6 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logoSrc}
                        alt="Logo"
                        className="w-[100px] h-[23px] shrink-0 aspect-[142/23] transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:block">
                    <ul
                        className={`flex items-center space-x-8 xl:space-x-12 font-medium transition-colors duration-300 ${textClasses}`}
                    >
                        <li>
                            <Link to="/" className="hover:text-teal-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/howitworks"
                                className="hover:text-teal-600 transition-colors"
                            >
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/talents"
                                className="hover:text-teal-600 transition-colors"
                            >
                                Talents
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdxhUctMBtgOUtREMGZR4OS164OM-EZFQYBHKEpVYM7Tw44TA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-4 py-2 bg-[var(--color-primary-100)] text-white font-medium rounded-md hover:bg-teal-600 transition-colors">
                                    Hire Talent →
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className={`lg:hidden focus:outline-none transition-colors duration-300 ${textClasses}`}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className={`lg:hidden shadow-lg border-t ${
                        isTransparent
                            ? scrolled
                                ? "bg-white border-gray-100"
                                : "bg-slate-800 border-slate-700"
                            : "bg-white border-gray-100"
                    }`}
                >
                    <ul
                        className={`flex flex-col px-6 py-4 space-y-4 font-medium ${textClasses}`}
                    >
                        <li>
                            <Link to="/" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/howitworks" onClick={toggleMenu}>
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link to="/talents" onClick={toggleMenu}>
                                Talents
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdxhUctMBtgOUtREMGZR4OS164OM-EZFQYBHKEpVYM7Tw44TA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={toggleMenu}
                            >
                                <button className="w-full px-4 py-2 bg-[var(--color-primary-100)] text-white font-medium rounded-md hover:bg-teal-600 transition-colors">
                                    Hire Talent →
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
