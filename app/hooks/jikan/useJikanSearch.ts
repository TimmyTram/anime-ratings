'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { debounce } from 'lodash';

const useJikanSearch = <T>(limit: number = 8, mangaToggle: boolean = false) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const initialSearchTerm = searchParams.get('q') || '';

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [dataList, setDataList] = useState<T[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    // Debounced fetch function
    useEffect(() => {
        const debouncedFetchData = debounce((searchTerm: string) => {
            const endpoint = mangaToggle ? `https://api.jikan.moe/v4/manga?q=${searchTerm}&page=${currentPage}&limit=${limit}`
                : `https://api.jikan.moe/v4/anime?q=${searchTerm}&page=${currentPage}&limit=${limit}`;

            fetch(endpoint)
                .then(response => response.json())
                .then(data => {
                    setDataList(data.data);
                    setTotalPages(data.pagination.last_visible_page);
                });
        }, 500);

        if (searchTerm) {
            debouncedFetchData(searchTerm);
        } else {
            setDataList([]);
            setCurrentPage(1);  // Reset page if no search term
        }

        return () => {
            debouncedFetchData.cancel();
        };
    }, [searchTerm, currentPage, limit, mangaToggle]);

    // Update URL when searchTerm or currentPage changes
    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.set('q', searchTerm);
        queryParams.set('page', currentPage.toString());
        router.push(`?${queryParams.toString()}`);
    }, [searchTerm, currentPage, router]);

    // Reset currentPage to 1 when mangaToggle changes
    useEffect(() => {
        setCurrentPage(1);
    }, [mangaToggle]);

    // Handle page change from pagination
    const handlePageChange = (newPage: number) => {
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
        }
    };

    // Handle search term change and reset the page
    const handleSearchTermChange = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
        setCurrentPage(1); // Reset to page 1 when the search term changes
    };

    return {
        dataList,
        searchTerm,
        setSearchTerm: handleSearchTermChange,
        currentPage,
        setCurrentPage: handlePageChange,
        totalPages
    };
};

export default useJikanSearch;