import { Code2, Server, Smartphone, Brain, BarChart2, Palette, Megaphone } from "lucide-react";

const talents = [
  { icon: <Code2 className="w-8 h-8 text-teal-500" />, label: "Frontend" },
  { icon: <Server className="w-8 h-8 text-teal-500" />, label: "Backend" },
  { icon: <Smartphone className="w-8 h-8 text-purple-600" />, label: "Mobile" },
  { icon: <Brain className="w-8 h-8 text-yellow-500" />, label: "AI/ML" },
  { icon: <BarChart2 className="w-8 h-8 text-orange-500" />, label: "Data" },
  { icon: <Palette className="w-8 h-8 text-red-500" />, label: "Design" },
  { icon: <Megaphone className="w-8 h-8 text-gray-700" />, label: "Marketing" },
];

export default function Talent() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto text-center">
      
        <h2 className="text-2xl font-semibold text-gray-900">Talent Specializations</h2>
        <p className="mt-2 text-gray-600">
          Find experts across all tech disciplines
        </p>

       
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 w-32 flex flex-col items-center hover:shadow-md transition"
            >
              {talent.icon}
              <p className="mt-3 text-sm font-medium text-gray-900">{talent.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
