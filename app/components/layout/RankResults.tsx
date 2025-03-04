'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimeData } from '../../types/AnimeData';
import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import TestPagination from '../pagination/testPagination';

const RankResults = () => {
    const router = useRouter();
    let initialPage = 1;
    const searchParams = useSearchParams();
    initialPage = parseInt(searchParams.get('page') || '1', 10);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const limit = 8;
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/top/anime?page=${currentPage}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setAnimeList(data.data);
                setTotalPages(data.pagination.last_visible_page);
            });
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`?page=${page}`, { scroll: false });
    };

    return (
        <div>
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <TestPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default RankResults;