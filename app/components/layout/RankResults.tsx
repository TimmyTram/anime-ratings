'use client';

import ContentGrid from './ContentGrid';
import AnimeCard from '../anime/AnimeCard';
import Pagination from '../pagination/Pagination';
import useRankResults from '@/app/hooks/jikan/useRankResults';

const RankResults = () => {
    const { animeList, currentPage, totalPages, handlePageChange } = useRankResults(8); // Fetch 8 results per page
    
    return (
        <div>
            <ContentGrid loading={false} error={null}>
                {animeList && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default RankResults;
