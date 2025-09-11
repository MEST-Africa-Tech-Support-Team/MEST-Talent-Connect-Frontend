import { BarChart3, User, Building2, Handshake } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BarChart3 className="w-6 h-6 text-cyan-600" />,
    title: "Employer Dashboard",
    description:
      "Comprehensive dashboard to manage job postings, applications, and talent pipeline.",
  },
  {
    id: 2,
    icon: <User className="w-6 h-6 text-cyan-600" />,
    title: "Talent Profiles",
    description:
      "Detailed profiles showcasing skills, experience, and portfolio work.",
  },
  {
    id: 3,
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    title: "AI-Powered Matching",
    description:
      "Smart algorithms that match the right talent with the right opportunities.",
  },
  {
    id: 4,
    icon: <Handshake className="w-6 h-6 text-cyan-600" />,
    title: "Mentorship & Community",
    description:
      "Connect with mentors and join a thriving community of tech professionals.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="w-full max-w-6xl px-8 flex flex-col items-center gap-16">
        
       
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
          <p className="mt-2 text-gray-500">
            Everything you need to find and hire the best talent
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
             
              <div className="flex items-center justify-center w-12 h-12 rounded-md border border-cyan-200 bg-cyan-50">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
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
