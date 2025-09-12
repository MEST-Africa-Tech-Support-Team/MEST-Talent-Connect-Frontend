export default function Stats() {
  const stats = [
    { number: "500+", label: "Successful Placements" },
    { number: "200+", label: "Startups Supported" },
    { number: "15+", label: "Years of Tech Excellence" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-center font-brownpro text-[60px] font-extrabold leading-none text-[var(--color-primary-100)]">{stat.number}</h3>
            <p className="text-black text-center font-inter text-[20px] font-semibold leading-[28px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
