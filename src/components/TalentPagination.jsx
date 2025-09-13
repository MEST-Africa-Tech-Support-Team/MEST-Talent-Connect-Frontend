export default function TalentPagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1 text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
