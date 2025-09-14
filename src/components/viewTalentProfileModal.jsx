export default function ViewTalentProfileModal({ isOpen, onClose, talent }) {
  if (!isOpen || !talent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Profile Info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={talent.image}
            alt={talent.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-900">{talent.name}</h2>
          <p className="text-gray-600">{talent.role}</p>

          {/* Details */}
          <div className="mt-4 text-sm text-gray-700 space-y-2">
            <p><strong>Academic Background:</strong> {talent.academicBg}</p>
            <p><strong>Soft Skills:</strong> {talent.softSkills}</p>
            <p><strong>Tech Skills:</strong> {talent.techSkills}</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href={talent.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              View Portfolio
            </a>
            <a
              href={talent.cv}
              download
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              Download CV
            </a>
          </div>

          {/* Hire Button */}
          <button
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
}
