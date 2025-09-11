import { Search, UserCheck, Handshake } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search className="w-6 h-6 text-white" />,
    bgColor: "bg-indigo-600",
    title: "Browse Talents",
    description: "Explore our curated collection of top-tier professionals across various disciplines."
  },
  {
    id: 2,
    icon: <UserCheck className="w-6 h-6 text-white" />,
    bgColor: "bg-orange-500",
    title: "Review Profiles",
    description: "Detailed portfolios, skills, and testimonials to help you make informed decisions."
  },
  {
    id: 3,
    icon: <Handshake className="w-6 h-6 text-white" />,
    bgColor: "bg-green-500",
    title: "Connect & Hire",
    description: "Reach out directly and start collaborating with your chosen talent."
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="w-full max-w-6xl px-8 flex flex-col items-center gap-16">
        
        
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-2 text-gray-500">
            Simple steps to find your perfect talent match
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center max-w-xs">
             
              <div className={`w-14 h-14 flex items-center justify-center rounded-full ${step.bgColor}`}>
                {step.icon}
              </div>
             
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
             
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
