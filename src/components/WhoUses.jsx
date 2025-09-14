import { Users } from "lucide-react";

export default function WhoUsesPlatform() {
  const cards = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-purple-600",
      title: "Growth-Focused Businesses (Startups & SMEs)",
      description:
        "Early-stage companies and small-to-medium enterprises that need affordable, flexible tech talent to build digital products, scale operations, or digitize their business processes.",
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-yellow-500",
      title: "Service Providers & Global Employers",
      description:
        "Tech consultancies, agencies, and international companies looking for vetted, remote-ready talent to deliver client projects or join distributed teams.",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-orange-500",
      title: "Institutions & Impact Organizations",
      description:
        "NGOs, corporates, universities, and development agencies that require skilled professionals for innovation projects, digital transformation, research platforms, or donor-funded initiatives.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-16">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-100)]">
            Who Uses Our Platform
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            Discover skilled, motivated developers trained to build and deliver real-world digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-4 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-md ${card.bgColor}`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
