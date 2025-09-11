import { Building2, Users, GraduationCap } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Building2 className="w-6 h-6 text-cyan-600" />,
    bgIcon: "bg-cyan-100",
    title: "Employers",
    description:
      "Global companies seeking exceptional African tech talent for remote and on-site positions.",
    active: false,
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6 text-white" />,
    bgIcon: "bg-emerald-600",
    title: "MEST Talent",
    description:
      "Skilled professionals from the MEST ecosystem ready to make their mark.",
    active: true,
  },
  {
    id: 3,
    icon: <GraduationCap className="w-6 h-6 text-cyan-600" />,
    bgIcon: "bg-cyan-100",
    title: "MEST Organization",
    description:
      "Supporting entrepreneurship and tech talent development across Africa.",
    active: false,
  },
];

export default function WhoUsesPlatform() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center">
      <div className="w-full max-w-6xl px-8 flex flex-col items-center gap-16">
      

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who Uses Our Platform</h2>
          <p className="mt-2 text-gray-500">
            Connecting talent, employers, and organizations across Africa
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-8 rounded-xl border shadow-sm transition 
                ${card.active ? "bg-emerald-600 text-white" : "bg-white text-gray-900"}
              `}
            >
             
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-md mb-6
                  ${card.active ? "bg-emerald-500" : card.bgIcon}
                `}
              >
                {card.icon}
              </div>

             
              <h3
                className={`text-lg font-semibold mb-3 
                  ${card.active ? "text-white" : "text-gray-900"}
                `}
              >
                {card.title}
              </h3>

              
              <p
                className={`text-sm leading-relaxed 
                  ${card.active ? "text-emerald-100" : "text-gray-600"}
                `}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
