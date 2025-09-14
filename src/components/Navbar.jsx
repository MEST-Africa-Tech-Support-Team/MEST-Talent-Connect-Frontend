import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1280px] h-[72px] mx-auto px-6 lg:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-[23px] shrink-0 aspect-[142/23]"
          />
        </Link>

        {/* Desktop Nav (lg and up) */}
       <nav className="hidden lg:block">
  <ul className="flex items-center space-x-8 xl:space-x-12 text-gray-700 font-medium">
    <li>
      <a href="#home" className="hover:text-teal-600 transition-colors">
        Home
      </a>
    </li>
    <li>
      <a href="#howitworks" className="hover:text-teal-600 transition-colors">
        How It Works
      </a>
    </li>
    <li>
      <Link to="/talents" className="hover:text-teal-600 transition-colors">
        Talents
      </Link>
    </li>
    <li>
      <Link
        to="/hire"
        className="text-gray-400 cursor-not-allowed"
        onClick={(e) => e.preventDefault()} // prevents navigation since it's not ready
      >
        Hire (Coming Soon)
      </Link>
    </li>
  </ul>
</nav>


        {/* Mobile & Tablet Hamburger (< lg) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile & Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <li>
              <Link to="/hire" onClick={toggleMenu} className="block">
                Hire
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={toggleMenu} className="block">
                Build a Team
              </Link>
            </li>
            <li>
              <Link to="/talents" onClick={toggleMenu} className="block">
                Talent
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={toggleMenu} className="block">
                Community
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
