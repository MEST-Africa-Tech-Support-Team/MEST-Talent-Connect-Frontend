export default function FlexibleEngagementModels() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-14">
        Flexible engagement <br className="md:hidden" /> models
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        {/* Card 1 */}
        <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8">
          <div className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center mb-6">
            <span className="text-2xl">🤝</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Contract-to-Hire
          </h3>

          <p className="text-gray-600 mb-4">
            Start with a trial period and convert to permanent based on performance and fit.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> 3–6 month trial period
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Conversion option
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Risk mitigation
            </li>
          </ul>
        </div>

        {/* Card 2 — MOST POPULAR */}
        <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8 border border-teal-400">
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-400 text-white text-xs font-medium py-1 px-3 rounded-full shadow">
            Most Popular
          </div>

          <div className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center mb-6">
            <span className="text-2xl">🌐</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Full-Time Remote
          </h3>

          <p className="text-gray-600 mb-4">
            Dedicated team members working exclusively for your organization remotely.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> 100% dedicated resource
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Global talent access
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Long-term commitment
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] p-8">
          <div className="w-14 h-14 rounded-full bg-teal-200 flex items-center justify-center mb-6">
            <span className="text-2xl">⏱️</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fractional
          </h3>

          <p className="text-gray-600 mb-4">
            Part-time engagement for specific projects or ongoing support needs.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Flexible hours
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Cost-effective
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600">✔</span> Expert-level skills
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
