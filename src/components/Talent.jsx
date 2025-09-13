import { Code2, Cloud, Database, Smartphone, Brain, BarChart2, Palette, Megaphone } from "lucide-react";

const talents = [
  { icon: <Code2 className="w-8 h-8 text-teal-500" />, label: "Frontend" },
  { icon: <Cloud className="w-8 h-8 text-pink-500" />, label: "Cloud Computing" },
  { icon: <Database className="w-8 h-8 text-teal-500" />, label: "Backend" },
  { icon: <Smartphone className="w-8 h-8 text-purple-600" />, label: "Mobile" },
  { icon: <Brain className="w-8 h-8 text-yellow-500" />, label: "AI/ML" },
  { icon: <BarChart2 className="w-8 h-8 text-orange-500" />, label: "Data" },
  { icon: <Palette className="w-8 h-8 text-red-500" />, label: "Design" },
  { icon: <Megaphone className="w-8 h-8 text-gray-700" />, label: "Marketing" },
];

export default function TalentSpecializations() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-100)] mb-4">
            Talent Specializations
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Find experts across all tech disciplines
          </p>
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-25">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-3">
                {talent.icon}
              </div>
              
              {/* Label */}
              <p className="text-sm font-medium text-black">
                {talent.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}