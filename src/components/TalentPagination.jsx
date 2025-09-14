export default function TalentPagination({ currentPage, totalPages, onPageChange }) {
  // Helper to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Show all if total pages are 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first and last page
      if (currentPage > 2) pages.push(1);
      if (currentPage > 3) pages.push("...");

      // Show current, previous, next
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 0 && i <= totalPages) pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      if (currentPage < totalPages - 1) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center space-x-2">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center mb-12 justify-center border rounded-md disabled:opacity-50 hover:bg-gray-100"
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-3 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center mb-12 justify-center border rounded-md transition ${
                currentPage === page
                  ? "bg-teal-500 text-white border-teal-500"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center border rounded-md disabled:opacity-50 hover:bg-gray-100 mb-12"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
