export function StatsCard({ title, value, icon, accent }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 flex-1 min-w-[220px] border border-gray-100 relative overflow-hidden">
            <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />
            <div className="flex justify-between items-start">
                <div>
                    <div className="text-sm text-gray-500">{title}</div>
                    <div className="text-3xl font-semibold mt-2">{value}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-600">
                    {icon}
                </div>
            </div>
        </div>
    );
}