'use client';

import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import Pagination from '../pagination/Pagination';
import useRankResults from '@/app/hooks/jikan/useRankResults';
import { useState } from 'react';

const RankResults = () => {
    const [showManga, setShowManga] = useState(false);
    const { animeList, currentPage, totalPages, handlePageChange } = useRankResults(8, showManga); // Fetch 8 results per page

    return (
        <div className="w-screen min-h-screen flex flex-col bg-secondary">
            <div className="flex justify-center p-4">
                <button 
                    onClick={() => setShowManga(prev => !prev)}
                    className="px-4 py-2 bg-primary text-white rounded-md"
                >
                    {showManga ? 'Show Anime' : 'Show Manga'}
                </button>
            </div>
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            {animeList && animeList.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
        </div>
    );
};

export default RankResults;
