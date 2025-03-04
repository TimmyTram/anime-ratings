'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimeData } from '../../types/AnimeData';
import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import TestPagination from '../pagination/testPagination';
import PrototypeSearchbar from '../ui/PrototypeSearchbar';
import { debounce } from 'lodash';

const PrototypeResults = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const initialSearchTerm = searchParams.get('q') || '';
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const limit = 8; // number of results per page
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    // Create debounced fetch function inside useEffect
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

        // Cleanup debounce function on component unmount
        return () => {
            debouncedFetchAnimeData.cancel();
        };
    }, [searchTerm, currentPage, limit]);  // Run when searchTerm or currentPage changes

    // Update URL when searchTerm or currentPage changes
    useEffect(() => {
        // When the search term changes, reset the page to 1
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.set('q', searchTerm);
        queryParams.set('page', currentPage.toString());
        router.push(`?${queryParams.toString()}`);
    }, [searchTerm, currentPage, router]);

    // Handle page change from pagination
    const handlePageChange = (newPage: number) => {
        if(newPage !== currentPage) {
            setCurrentPage(newPage);
        }
    }

    // Reset the page number when the search term is updated
    const handleSearchTermChange = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm);
        setCurrentPage(1); // Reset to page 1 when the search term changes
    }

    return (
        <div>
            <PrototypeSearchbar searchTerm={searchTerm} setSearchTerm={handleSearchTermChange} />
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <TestPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default PrototypeResults;
