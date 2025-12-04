const AdminFirstStatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-xl font-semibold">{item.value}</p>
            <p className="text-xs text-green-500 mt-1">{item.meta}</p>
          </div>

          <div
            className={`${item.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminFirstStatsGrid;