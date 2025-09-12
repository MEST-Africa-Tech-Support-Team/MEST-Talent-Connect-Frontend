import { Building2, Users, GraduationCap } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Building2 className="w-6 h-6 text-teal-600" />,
    bgIcon: "bg-teal-100",
    title: "Employers",
    description: "Global companies seeking exceptional African tech talent for remote and on-site positions.",
    active: false,
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6 text-white" />,
    bgIcon: "bg-teal-600",
    title: "MEST Talent",
    description: "Skilled professionals from the MEST ecosystem ready to make their mark.",
    active: true,
  },
  {
    id: 3,
    icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
    bgIcon: "bg-teal-100",
    title: "MEST Organization",
    description: "Supporting entrepreneurship and tech talent development across Africa.",
    active: false,
  },
];

export default function WhoUsesPlatform() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Who Uses Our Platform
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Connecting talent, employers, and organizations across Africa
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-8 rounded-2xl transition-all ${
                card.active 
                  ? "bg-[var(--color-primary-100)] text-white shadow-lg" 
                  : "bg-white text-black shadow-md"
              }`}
            >
              
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${
                  card.active ? "bg-teal-400" : card.bgIcon
                }`}
              >
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                card.active ? "text-white" : "text-black"
              }`}>
                {card.title}
              </h3>
              
              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                card.active ? "text-white opacity-90" : "text-gray-600"
              }`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}