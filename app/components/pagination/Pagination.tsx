'use client';
import { useSearchContext } from "@/app/context/SearchContextProvider";
import useFetchAnimeByName from "@/app/hooks/jikan/useFetchAnimeByName";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Pagination = () => {
    const { currentPage, setCurrentPage, pagination, searchTerm, setAnimeList, setPagination } = useSearchContext();
    const { fetchAnimeByName } = useFetchAnimeByName(); // Assuming this function is available
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
                    setAnimeList(status.animeList);
                    setPagination(status.pagination);
                    router.push(`/search?q=${searchTerm}&page=${currentPage}`, undefined);
                }
            };
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]); // Re-run query when currentPage changes

    return (
        <div className="pagination flex items-center justify-center space-x-2 mt-8">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1 || currentPage === undefined}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
                Previous
            </button>

            {pagination &&
                Array.from({ length: pagination.last_visible_page }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)} // Update current page on click
                        className={`px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700 ${
                            currentPage === page ? 'bg-blue-600' : 'bg-gray-600'
                        }`}
                    >
                        {page}
                    </button>
                ))}

            <button
                onClick={handleNext}
                disabled={currentPage === pagination?.last_visible_page || currentPage === undefined}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;