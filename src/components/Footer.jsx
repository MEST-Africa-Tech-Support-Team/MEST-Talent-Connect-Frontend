import logoteal from "../assets/logoteal.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import github from "../assets/images/github.png";





export default function Footer() {
  return (
    <footer className="w-full bg-[#2F2F2F] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logoteal}
              alt="Mest Logo"
              className="w-30 h-5"
            />
          </div>

          <p className="text-gray-400 leading-relaxed max-w-xs">
            Connecting African tech talent
            <br />with global opportunities.
          </p>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Employers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>How it Works</li>
            <li>Pricing</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* For Talent */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Talent</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Resources</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://gh.linkedin.com/school/mestafrica/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            </a>

            <a href="https://x.com/mestafrica?s=11&t=qynb_6x_ZzNoLO4kcIJxlw" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            </a>

            <a href="https://github.com/AfriTalent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={github} alt="GitHub" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2024 AfriTalent. All rights reserved.
      </div>
    </footer>
  );
}
