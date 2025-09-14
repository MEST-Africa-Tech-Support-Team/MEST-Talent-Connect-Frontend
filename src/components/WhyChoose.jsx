import { BarChart2, User, Handshake, Cpu } from "lucide-react";

export default function WhyChooseMest() {
  const features = [
    {
      id: 1,
      icon: <BarChart2 className="w-6 h-6 text-[var(--color-primary-100)]" />,
      title: "Real-World Project Experience",
      description:
        "Every developer has completed hands-on projects using industry-standard tools and frameworks.",
    },
    {
      id: 2,
      icon: <Handshake className="w-6 h-6 text-[var(--color-primary-100)]" />,
      title: "Workplace-Ready Professionals",
      description:
        "Beyond coding - trained in communication, teamwork, Git collaboration, and professional presentation skills.",
    },
    {
      id: 3,
      icon: <User className="w-6 h-6 text-[var(--color-primary-100)]" />,
      title: "MERN Stack & Python Specialists",
      description:
        "Focused training in MongoDB, Express, React, Node.js, and Python with full-stack capabilities.",
    },
    {
      id: 4,
      icon: <Cpu className="w-6 h-6 text-[var(--color-primary-100)]" />,
      title: "Proven Problem Solvers",
      description:
        "Experienced in debugging and problem-solving under real project conditions with version control expertise.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-100)]">
            Why Choose MEST Developers?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            Save time finding top talents - our graduates are trained, project-tested, 
            and eager to contribute.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center border border-teal-400 rounded-md">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed">
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
