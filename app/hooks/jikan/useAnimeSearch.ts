'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { debounce } from 'lodash';
import { AnimeData } from '../../types/AnimeData';

const useAnimeSearch = (limit: number) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const initialSearchTerm = searchParams.get('q') || '';
    
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    // Debounced fetch function
    useEffect(() => {
        const debouncedFetchAnimeData = debounce((searchTerm: string) => {
            fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&page=${currentPage}&limit=${limit}`)
                .then(response => response.json())
                .then(data => {
                    setAnimeList(data.data);
                    setTotalPages(data.pagination.last_visible_page);
                });
        }, 500);

        if (searchTerm) {
            debouncedFetchAnimeData(searchTerm);
        } else {
            setAnimeList([]);
            setCurrentPage(1);  // Reset page if no search term
        }

        return () => {
            debouncedFetchAnimeData.cancel();
        };
    }, [searchTerm, currentPage, limit]);

    // Update URL when searchTerm or currentPage changes
    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.set('q', searchTerm);
        queryParams.set('page', currentPage.toString());
        router.push(`?${queryParams.toString()}`);
    }, [searchTerm, currentPage, router]);

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
        searchTerm,
        setSearchTerm: handleSearchTermChange,
        animeList,
        currentPage,
        setCurrentPage: handlePageChange,
        totalPages
    };
};

export default useAnimeSearch;
