interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageRange = 5;
        let start = Math.max(2, currentPage - Math.floor(pageRange / 2)); // default start at 2, because 1 is always shown
        let end = Math.min(totalPages - 1, currentPage + Math.floor(pageRange / 2)); // default end at totalPages - 1, because totalPages is always shown

        // If close to the beginning, shift the range to show more pages at the start
        if (currentPage <= Math.floor(pageRange / 2)) {
            end = Math.min(pageRange, totalPages - 1);
        }

        // If close to the end, shift the range to show more pages at the end
        if (totalPages - currentPage <= Math.floor(pageRange / 2)) {
            start = Math.max(totalPages - pageRange + 1, 2);
        }

        return Array.from({ length: end - start + 1 }, (_, index) => index + start);
    }

    return (
        <div className="pagination flex items-center justify-center space-x-2 mt-8 pb-12">
            <button
                className='px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed'
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <button
                key={1}
                onClick={() => onPageChange(1)}
                className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === 1 ? 'bg-blue-600' : 'bg-gray-600'}`}>
                1
            </button>

            {currentPage > 3 && <span className="px-4 py-2 rounded-lg text-white shadow-md bg-gray-600">...</span>}

            {getPageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === page ? 'bg-blue-600' : 'bg-gray-600'}`}
                >
                    {page}
                </button>
            ))}

            {currentPage < totalPages - 3 && <span className="px-4 py-2 rounded-lg text-white shadow-md bg-gray-600">...</span>}

            {totalPages > 1 && (
                <button
                    key={totalPages}
                    onClick={() => onPageChange(totalPages)}
                    className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === totalPages ? 'bg-blue-600' : 'bg-gray-600'}`}
                >
                    {totalPages}
                </button>
            )}

            <button
                className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;