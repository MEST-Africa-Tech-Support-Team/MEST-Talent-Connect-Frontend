import { Play, CircleQuestionMark, Heart, Globe,  } from "lucide-react";
import sample1 from "../assets/images/sample1.jpg";
import sample2 from "../assets/images/sample2.jpg"


export default function ProvenResults() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-20 bg-[#f8fafc]">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
          Proven Results That Speak Volumes
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          See how we've transformed talent acquisition for leading companies with
          measurable impact and lasting partnerships
        </p>
      </div>

      {/* STATS */}
      <div className="w-full bg-white shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-2xl p-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Item */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-3">
              <CircleQuestionMark className="text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#0f172a]">95%</h3>
            <p className="text-teal-600 font-semibold uppercase text-sm mt-1">
              Placement Rate
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Above industry standard
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-3">
              <Heart className="text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#0f172a]">89%</h3>
            <p className="text-teal-600 font-semibold uppercase text-sm mt-1">
              Retention Goal
            </p>
            <p className="text-gray-500 text-sm mt-1">12-month retention rate</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-3">
              <Globe className="text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#0f172a]">65%</h3>
            <p className="text-teal-600 font-semibold uppercase text-sm mt-1">
              Diversity Impact
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Increase in diverse hires
            </p>
          </div>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="w-full bg-white shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-2xl p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
            What Our Partners Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear directly from the leaders who've experienced our impact
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="rounded-xl overflow-hidden shadow">
            <div className="relative">
              <img
                src={sample1}
                alt="testimonial"
                className="w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                  <Play size={26} />
                </div>
              </button>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md shadow px-4 py-2 rounded-lg">
                <p className="font-semibold text-sm">Michaela Adom Poku</p>
                <p className="text-xs text-gray-500">CEO, TechFlow Solutions</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              “Partnering with MestAfrica has revolutionized our hiring
              process. Their rigorous vetting and understanding of our culture
              meant we onboarded top-tier talent who hit the ground running.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-xl overflow-hidden shadow">
            <div className="relative">
              <img
                src={sample2}
                alt="testimonial"
                className="w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                  <Play size={26} />
                </div>
              </button>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md shadow px-4 py-2 rounded-lg">
                <p className="font-semibold text-sm">Sarah Aning</p>
                <p className="text-xs text-gray-500">
                  CHRO, HealthFirst Group
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm p-4">
              “The talent we sourced through MestAfrica has been instrumental
              in driving our innovation forward. Their candidates are not only
              skilled but also align perfectly with our company values.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
