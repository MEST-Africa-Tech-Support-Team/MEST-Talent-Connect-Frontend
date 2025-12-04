export default function AdminSecondStatsGrid({ stats }) {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((card, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow flex flex-col gap-3"
        >
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: card.color }}
          >
            {card.icon}
          </div>

          <h3 className="text-2xl font-semibold">{card.value}</h3>
          <p className="text-sm text-gray-500">{card.label}</p>
          <p className="text-xs text-gray-500">{card.tag}</p>
        </div>
      ))}
    </div>
  );
};