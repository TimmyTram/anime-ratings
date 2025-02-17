'use client';

import ContentGrid from "./ContentGrid";
import AnimeCard from "../anime/AnimeCard";
import { useSearchContext } from "../../context/SearchContextProvider";
import Pagination from "../pagination/Pagination";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
    const { animeList, setSearchTerm, setCurrentPage } = useSearchContext();
    const searchParams = useSearchParams();
    
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
            <Pagination />
        </div>
    );
};

export default SearchResults;