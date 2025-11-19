import shield from "../assets/images/shield.png";
import lock from "../assets/images/lock.png";
import checked from "../assets/images/checked.png";
import anon from "../assets/images/anon.png";

export default function SecurityCompliance() {
  const items = [
    {
      icon: shield,
      title: "GDPR Compliance",
      desc: "Full compliance with European data protection regulations",
    },
    {
      icon: lock,
      title: "Data Encryption",
      desc: "End-to-end encryption for all sensitive data",
    },
    {
      icon: checked,
      title: "Consent Workflows",
      desc: "Automated consent management system",
    },
    {
      icon: anon,
      title: "Anonymized Profiles",
      desc: "Protected user identity management.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-center text-4xl font-semibold text-gray-900 mb-16">
        Security & Compliance you can trust
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] py-10 px-6 text-center"
          >
            <div className="flex flex-col items-center gap-5">
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 mb-1"
                loading="lazy"
              />

              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
