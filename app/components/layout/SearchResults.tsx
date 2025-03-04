'use client';

import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import Pagination from '../pagination/Pagination';
import Searchbar from '../ui/Searchbar';
import useAnimeSearch from '../../hooks/jikan/useAnimeSearch';
import { useState } from 'react';

const SearchResults = () => {
    const [showManga, setShowManga] = useState(false);
    const { searchTerm, setSearchTerm, animeList, currentPage, setCurrentPage, totalPages } = useAnimeSearch(8, showManga);

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
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            {animeList && animeList.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>
    );
};

export default SearchResults;