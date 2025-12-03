import React from "react";
import { Link } from "react-router-dom";





export default function ReadyToTransform() {
  return (
    <section className="w-full bg-[#1BB7B6] py-15 px-4">
      <h2 className="text-center text-4xl font-semibold text-white mb-12">
        Ready to transform your hiring?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* Card 1 */}
        <div className="bg-[#1BB7B6] border border-white/30 rounded-2xl p-10 text-center">
          <h3 className="text-white text-xl font-semibold mb-4">
            Ready to hire?
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-15 max-w-[320px] mx-auto">
            Access pre-vetted African tech talent and build diverse,
            high-performing teams.
          </p>

          {/* <button className="bg-white  text-[#1BB7B6] font-medium w-full max-w-xs py-3 rounded-md mx-auto block text-lg">
            Book a Demo
          </button> */}
          <Link to="/talent-request" className="bg-white  text-[#1BB7B6] font-medium w-full max-w-xs py-3 rounded-md mx-auto block text-lg text-center">
            Book a Demo
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1BB7B6] border border-white/30 rounded-2xl p-10 text-center">
          <h3 className="text-white text-xl font-semibold mb-4">
            Are you MEST alumni <br /> or African dev?
          </h3>

          <p className="text-white/90 text-base leading-relaxed mb-8 max-w-[330px] mx-auto">
            Join our exclusive network and access global opportunities
            with top companies.
          </p>

          <button className="bg-white text-[#1BB7B6] font-medium w-full max-w-xs py-3 rounded-md mx-auto block text-lg">
            Apply to Join
          </button>
        </div>

      </div>
    </section>
  );
}
