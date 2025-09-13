export default function HireSection() {
  return (
    <section className="bg-[var(--color-primary-100)] py-20 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center text-[40px] leading-[48px] tracking-[0.2px]">
          Ready to Get Matched with GROW Developers?
        </h2>
        <p className="text-white/90 mb-8">
          Tell us about your project and we'll connect you with the perfect developer from our trained talent pool.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition">
            Hire Talent
          </button>
          <button className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition">
            Join as Talent
          </button>
        </div>
      </div>
    </section>
  );
}
