import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-teal-500 text-white font-bold rounded-md px-2 py-1">M</div>
            <span className="text-white font-semibold text-lg">MEST Talent Connect</span>
          </div>
          <p className="text-sm">
            Connecting Africa's brightest tech talent with global opportunities.
          </p>
        </div>

        
        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Hire Talent</a></li>
            <li><a href="#" className="hover:underline">Join as Talent</a></li>
            <li><a href="#" className="hover:underline">About MEST</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>hello@mesttalentconnect.com</li>
            <li>+233 XX XXX XXXX</li>
            <li>Accra, Ghana</li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 MEST Talent Connect. All rights reserved.
      </div>
    </footer>
  );
}
