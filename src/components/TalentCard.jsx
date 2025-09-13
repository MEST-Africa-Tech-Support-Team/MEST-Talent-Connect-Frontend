export default function TalentCard({ name, role, image, onViewProfile }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
      <button
        onClick={onViewProfile}
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
      >
        View Profile
      </button>
    </div>
  );
}
