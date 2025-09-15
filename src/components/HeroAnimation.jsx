// import { Button } from "@/components/ui/button"

import Navbar from "./Navbar.jsx";
import React from "react";
import { Link } from "react-router-dom";


export default function HeroAnimation() {
    return (

        <div
            className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <Navbar/>

            <div className="absolute inset-0 pointer-events-none">
                {/* Code Brackets */}
                <div
                    className="absolute top-20 left-10 text-[#28BBBB] text-2xl opacity-30 animate-float-slow">{"{ }"}</div>
                <div
                    className="absolute top-40 right-20 text-[#FFBC45] text-3xl opacity-40 animate-float-medium">{"< />"}</div>
                <div
                    className="absolute bottom-32 left-20 text-[#B627A1] text-2xl opacity-35 animate-float-fast">{"[ ]"}</div>
                <div
                    className="absolute top-60 left-1/3 text-[#FF6221] text-xl opacity-30 animate-float-slow">{"( )"}</div>
                <div className="absolute bottom-20 right-1/4 text-[#28BBBB] text-2xl opacity-40 animate-float-medium">
                    {"{ }"}
                </div>

                {/* Floating Tech Symbols */}
                <div className="absolute top-32 right-1/3 text-[#28BBBB] text-lg opacity-25 animate-pulse-slow">React
                </div>
                <div className="absolute bottom-40 left-1/4 text-[#FFBC45] text-lg opacity-30 animate-pulse-medium">
                    Node.js
                </div>
                <div
                    className="absolute top-1/2 right-10 text-[#B627A1] text-lg opacity-25 animate-pulse-fast">MongoDB
                </div>
                <div
                    className="absolute bottom-60 right-1/2 text-[#FF6221] text-lg opacity-30 animate-pulse-slow">Express
                </div>

                {/* Geometric Shapes */}
                <div
                    className="absolute top-24 left-1/2 w-3 h-3 bg-[#28BBBB] opacity-40 rounded-full animate-bounce-slow"></div>
                <div
                    className="absolute bottom-24 left-1/3 w-2 h-2 bg-[#FFBC45] opacity-50 rounded-full animate-bounce-medium"></div>
                <div
                    className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#B627A1] opacity-30 rounded-full animate-bounce-fast"></div>
                <div
                    className="absolute bottom-1/3 right-10 w-2 h-2 bg-[#FF6221] opacity-40 rounded-full animate-bounce-slow"></div>

                {/* Connection Lines */}
                <div
                    className="absolute top-1/4 left-1/4 w-16 h-px bg-gradient-to-r from-[#28BBBB] to-transparent opacity-30 animate-pulse-slow"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-20 h-px bg-gradient-to-l from-[#FFBC45] to-transparent opacity-25 animate-pulse-medium"></div>
                <div
                    className="absolute top-1/2 left-1/2 w-12 h-px bg-gradient-to-r from-[#B627A1] to-transparent opacity-35 animate-pulse-fast transform rotate-45"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                        {Array.from({length: 96}).map((_, i) => (
                            <div key={i} className="border border-[#28BBBB] animate-pulse-very-slow"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div
                className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center font-[var(--font-heading)]">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                    <span className="text-[#28BBBB]">Hire Job-Ready</span>
                    <br/>
                    <span className="text-white">Web Developers</span>
                    <br/>
                    <span className="text-white text-3xl md:text-4xl lg:text-5xl">From Ghana</span>
                </h1>

                <p className="text-slate-200 text-lg md:text-xl mb-8 max-w-3xl text-pretty font-[var(--font-heading)]">
                    Discover skilled, motivated developers trained to build and deliver real-world digital solutions.
                    Our
                    graduates are equipped with MERN stack expertise and strong workplace competencies.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                        className="px-6 py-3 bg-[var(--color-primary-100)] text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
                    >
                        {/* External link opens in new tab */}
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdxhUctMBtgOUtREMGZR4OS164OM-EZFQYBHKEpVYM7Tw44TA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Hire Talent</a>

                    </button>


                    <Link
                        to="/talents"
                        className="px-6 py-3 bg-[var(--color-accent)] text-white font-medium rounded-md transition-colors hover:bg-white hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
                    >
                        View Talents
                    </Link>


                </div>
            </div>
        </div>
    )
}
