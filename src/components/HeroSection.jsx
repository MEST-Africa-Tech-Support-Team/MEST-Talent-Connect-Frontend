import hero1 from '../assets/images/hero1.png';


// export default function Hero() {
//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-[1440px] h-[600px] mx-auto px-20 flex items-center">


//         <div className="flex-1">
//           <h1 className="text-5xl font-bold leading-tight  font-[var(--font-heading)]">
//             Connecting Africa&apos;s <br />
//             Brightest <span className="text-primary-100">Tech Talent with</span> <br />
//             Global Opportunities.
//           </h1>
//           <p className="mt-6 text-lg text-black font-[var(--font-heading)] font-medium max-w-xl">
//             Join the premier platform that bridges exceptional African tech
//             professionals with innovative companies worldwide.
//           </p>

//           <div className="mt-8 flex space-x-4">
//             <a
//               href="#hire"
//               className="px-6 py-3 bg-[var(--color-primary-100)] text-white font-medium rounded-md shadow hover:bg-teal-700 transition"
//             >
//               Hire Talent →
//             </a>
//             <a
//               href="#talents"
//               className="px-6 py-3 border border-black text-gray-900 font-medium rounded-md hover:bg-gray-100 transition"
//             >
//               View Talents
//             </a>
//           </div>
//         </div>

//         <div className="flex-1 flex justify-center">
//           <img
//             src={hero1}
//             alt="Tech Talents"
//             className="w-full max-w-lg object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
    return (
        <section className="w-full bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
                <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 lg:py-0 pt-[72px]">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
                        <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight text-black">
                            Hire <span className="text-[var(--color-primary-100)]">Job-Ready</span> Web <br
                            className="hidden sm:block"/> Developers from Ghana
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                            Discover skilled, motivated developers trained to build and deliver real-world digital
                            solutions.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                className="px-6 py-3 bg-[var(--color-primary-100)] text-white font-medium rounded-md hover:bg-teal-600 transition-colors">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSdxhUctMBtgOUtREMGZR4OS164OM-EZFQYBHKEpVYM7Tw44TA/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"

                                > Hire Talent →</a>
                            </button>
                            <button
                                className="px-6 py-3 border-2 border-black text-black font-medium rounded-md hover:bg-gray-50 transition-colors">
                                View Talents
                            </button>
                        </div>
                    </div>

                    {/* Right Image with Gradient */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-2xl">
                            {/* Gradient background */}
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-100 via-white to-white rounded-lg w-[480px] h-[600px]"></div> */}

                            {/* Image */}
                            <img
                                src={hero1}
                                alt="Tech Professionals"
                                className="relative w-full h-auto object-cover rounded-lg"
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}