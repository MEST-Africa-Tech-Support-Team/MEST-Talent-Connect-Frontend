import { Search, UserCheck, Handshake } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Search className="w-6 h-6 text-white" />,
    bgColor: "bg-indigo-500",
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
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Simple steps to find your perfect talent match
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 lg:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center max-w-xs mx-auto">
              
              {/* Icon Circle */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${step.bgColor} mb-6`}>
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}