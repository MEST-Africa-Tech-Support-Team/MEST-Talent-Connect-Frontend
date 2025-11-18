import logoteal from "../assets/logoteal.png";



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
            <img src="/linkedin.svg" alt="LinkedIn" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            <img src="/twitter.svg" alt="Twitter" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
            <img src="/github.svg" alt="GitHub" className="w-5 opacity-70 hover:opacity-100 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2024 AfriTalent. All rights reserved.
      </div>
    </footer>
  );
}
