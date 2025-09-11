import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1440px] h-[72px] mx-auto px-6 lg:px-20 flex items-center justify-between">
        
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

       
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 lg:space-x-12 text-gray-700 font-medium">
            <li>
              <a href="#hire" className="hover:text-teal-600 transition-colors">
                Hire
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-teal-600 transition-colors"
              >
                Build a Team
              </a>
            </li>
            <li>
              <a
                href="#talent"
                className="hover:text-teal-600 transition-colors"
              >
                Talent
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="hover:text-teal-600 transition-colors"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-teal-600 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <li>
              <a href="#hire" onClick={toggleMenu} className="block">
                Hire
              </a>
            </li>
            <li>
              <a href="#team" onClick={toggleMenu} className="block">
                Build a Team
              </a>
            </li>
            <li>
              <a href="#talent" onClick={toggleMenu} className="block">
                Talent
              </a>
            </li>
            <li>
              <a href="#community" onClick={toggleMenu} className="block">
                Community
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu} className="block">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
