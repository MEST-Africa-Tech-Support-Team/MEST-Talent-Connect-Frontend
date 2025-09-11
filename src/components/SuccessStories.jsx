export default function SuccessStories() {
  const testimonials = [
    {
      quote:
        "Found an incredible designer who transformed our brand identity. The quality exceeded our expectations.",
      name: "John Smith",
      role: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The developer we hired delivered exceptional work on time. Highly recommend this platform.",
      name: "Maria Garcia",
      role: "CTO, InnovateCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Amazing platform! Connected us with a talented musician who created the perfect soundtrack for our project.",
      name: "David Lee",
      role: "Director, CreativeStudios",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
      
        <h2 className="text-2xl font-extrabold text-gray-900">
          Success Stories
        </h2>
        <p className="mt-2 text-gray-600">
          Hear from companies who found their perfect talent match
        </p>

      
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm p-6 text-left"
            >
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <div className="flex items-center mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
