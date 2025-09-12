import { BarChart3, User, Bot, Users } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
    title: "Employer Dashboard",
    description: "Comprehensive dashboard to manage job postings, applications, and talent pipeline.",
  },
  {
    id: 2,
    icon: <User className="w-6 h-6 text-teal-600" />,
    title: "Talent Profiles",
    description: "Detailed profiles showcasing skills, experience, and portfolio work.",
  },
  {
    id: 3,
    icon: <Bot className="w-6 h-6 text-teal-600" />,
    title: "AI-Powered Matching",
    description: "Smart algorithms that match the right talent with the right opportunities.",
  },
  {
    id: 4,
    icon: <Users className="w-6 h-6 text-teal-600" />,
    title: "Mentorship & Community",
    description: "Connect with mentors and join a thriving community of tech professionals.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Platform Features
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Everything you need to find and hire the best talent
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg border-2 border-teal-200 bg-teal-50 flex items-center justify-center">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}