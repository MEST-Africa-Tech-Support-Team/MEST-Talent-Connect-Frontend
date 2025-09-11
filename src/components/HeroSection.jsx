import hero1 from '../assets/images/hero1.png';


export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] h-[600px] mx-auto px-20 flex items-center">

      
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Connecting Africa&apos;s <br />
            Brightest <span className="text-teal-500">Tech Talent with</span> <br />
            Global Opportunities.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Join the premier platform that bridges exceptional African tech
            professionals with innovative companies worldwide.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="#hire"
              className="px-6 py-3 bg-teal-500 text-white font-medium rounded-md shadow hover:bg-teal-600 transition"
            >
              Hire Talent →
            </a>
            <a
              href="#talents"
              className="px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-100 transition"
            >
              View Talents
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={hero1}
            alt="Tech Talents"
            className="w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
