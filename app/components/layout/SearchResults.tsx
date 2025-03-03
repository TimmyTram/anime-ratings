'use client';

import ContentGrid from "./ContentGrid";
import AnimeCard from "../anime/AnimeCard";
import { useSearchContext } from "../../context/SearchContextProvider";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useFetchAnimeByName from "../../hooks/jikan/useFetchAnimeByName";
import Pagination from "../pagination/Pagination";

const SearchResults = () => {
    const { animeList, currentPage, pagination, setSearchTerm, setCurrentPage, searchTerm, setAnimeList, setPagination } = useSearchContext();
    const searchParams = useSearchParams();
    const { fetchAnimeByName } = useFetchAnimeByName();
    
    useEffect(() => {
        const queryTerm = searchParams.get('q');
        const page = searchParams.get('page');

        if(queryTerm) setSearchTerm(queryTerm);
        if(page) setCurrentPage(Number(page));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
        <div>
            <ContentGrid loading={false} error={null}>
                {animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination}
                fetchAnimeByName={(page, searchTerm) => fetchAnimeByName(searchTerm, page)}
                searchTerm={searchTerm}
                setAnimeList={setAnimeList}
                setPagination={setPagination}
            />
        </div>
    );
};

export default SearchResults;