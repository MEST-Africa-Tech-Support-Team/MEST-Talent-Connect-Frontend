import { FaWindows } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import { Link } from "react-router-dom";



import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F8FAFB] pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div >
          <h1 className=" text-4xl pb-5 md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
            <span className=" text-6xl" >World-class African tech </span>
            talent.{" "}
            <span className="text-teal-500">Vetted.</span>
            <br />
            Entrepreneurial. Global-ready.
          </h1>

          <p className="text-gray-500 max-w-lg text-lg leading-relaxed mb-10">
            Reduce hiring risk. Increase team diversity. Access pre-vetted
            developers, data scientists, and product managers from Africa's
            top tech ecosystem.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mb-12">
            {/* <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">
              Hire Talent
            </button> */}
            <Link to="/talent-request" className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">
              Hire Talent
            </Link>

            <button className="px-6 py-3 border border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
              Join as Talent
            </button>
          </div>

          {/* VERIFIED CARD */}
          <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-xl">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="font-semibold text-gray-700">
                  500+ vetted profiles
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full" />
                <span className="font-semibold text-gray-700">
                  MEST-verified badges
                </span>
              </div>
            </div>

            {/* LOGO STRIP */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-gray-100 rounded-md" />
              <FaWindows />
              <div className="w-10 h-10 bg-gray-100 rounded-md" />
                <FaGoogle />
              <div className="w-10 h-10 bg-gray-100 rounded-md" />
                <FaAmazon />
              <div className="w-10 h-10 bg-gray-100 rounded-md" />
                <FaDropbox />
              <div className="w-10 h-10 bg-gray-100 rounded-md" />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6 relative">
            <div className=" ">
                <img src={hero2} alt="Hero Image 2" className="rounded-3xl object-cover w-full h-full" />
            </div>
            <div className="mt-12">
                <img src={hero3} alt="Hero Image 3" className="rounded-3xl object-cover w-full h-full" />       
            </div>
          
          {/* <div className="bg-orange-500 rounded-3xl overflow-hidden h-72">
            <img
              src="/img1.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-teal-400 rounded-3xl overflow-hidden h-72">
            <img
              src="/img2.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-gray-400 rounded-3xl overflow-hidden h-64">
            <img
              src="/img3.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-yellow-400 rounded-3xl overflow-hidden h-64">
            <img
              src="/img4.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div> */}

          {/* <div className="bg-green-400 rounded-3xl overflow-hidden h-48 col-span-2">
            <img
              src="/img5.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
}
