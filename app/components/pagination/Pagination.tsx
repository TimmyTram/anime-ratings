'use client';
import { useSearchContext } from "@/app/context/SearchContextProvider";
import useFetchAnimeByName from "@/app/hooks/jikan/useFetchAnimeByName";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Pagination = () => {
    const { currentPage, setCurrentPage, pagination, searchTerm, setAnimeList, setPagination } = useSearchContext();
    const { fetchAnimeByName } = useFetchAnimeByName();
    const router = useRouter();

    const handlePrevious = () => {
        if (currentPage && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage && pagination && currentPage < pagination.last_visible_page) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Trigger query again when page changes
    useEffect(() => {
        if (currentPage >= 1 && searchTerm) {
            const fetchData = async () => {
                const status = await fetchAnimeByName(searchTerm, currentPage);
                if (status.success) {
                    console.log(status.pagination);
                    setAnimeList(status.animeList);
                    setPagination(status.pagination);
                    router.push(`/search?q=${searchTerm}&page=${currentPage}`, undefined);
                }
            };
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]); // Re-run query when currentPage changes


    if (!pagination) return null;

    const getPageNumbers = () => {
        const pageRange = 5;
        let start = Math.max(2, currentPage - Math.floor(pageRange / 2)); // 2 left of current page
        let end = Math.min(pagination.last_visible_page - 1, currentPage + Math.floor(pageRange / 2)); // 2 right of current page

        // adjust range if current page is near the start
        if (currentPage <= Math.floor(pageRange / 2)) {
            end = Math.min(pageRange, pagination.last_visible_page - 1);
        }

        // adjust range if current page is near the end
        if (pagination.last_visible_page - currentPage <= Math.floor(pageRange / 2)) {
            start = Math.max(pagination.last_visible_page - pageRange + 1, 2);
        }

        return Array.from({ length: end - start + 1 }, (_, index) => index + start);
    };

    return (
        <div className="pagination flex items-center justify-center space-x-2 mt-8">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1 || currentPage === undefined}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
                Previous
            </button>

            <button key={1} onClick={() => setCurrentPage(1)} className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === 1 ? 'bg-blue-600' : 'bg-gray-600'}`}>1</button>

            {currentPage > 3 && <span className="px-4 py-2 rounded-lg text-white shadow-md bg-gray-600">...</span>}

            {getPageNumbers().map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === page ? 'bg-blue-600' : 'bg-gray-600'}`}>
                    {page}
                </button>
            ))}

            {currentPage < pagination.last_visible_page - 3 && <span className="px-4 py-2 rounded-lg text-white shadow-md bg-gray-600">...</span>}

            {pagination.last_visible_page > 1 && <button key={pagination.last_visible_page} onClick={() => setCurrentPage(pagination.last_visible_page)} className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${currentPage === pagination.last_visible_page ? 'bg-blue-600' : 'bg-gray-600'}`}>{pagination.last_visible_page}</button>}

            <button
                onClick={handleNext}
                disabled={currentPage === pagination?.last_visible_page || currentPage === undefined}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
                Next
            </button>

            <input
                type="number"
                min="1"
                max={pagination.last_visible_page}
                placeholder="Go to page"
                onKeyDown={(e) => e.key === 'Enter' && setCurrentPage(parseInt(e.currentTarget.value))}
                className="px-4 py-2 text-center text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-500"
            />

        </div>
    );
};

export default Pagination;