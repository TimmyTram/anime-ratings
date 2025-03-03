'use client';

import ContentGrid from "./ContentGrid";
import AnimeCard from "../anime/AnimeCard";
import { useAnimeContext } from "@/app/context/AnimeContextProvider";
import { useEffect } from "react";
import Pagination from "../pagination/Pagination";
import useTopAnime from "@/app/hooks/jikan/useTopAnime";

const RankingResults = () => {
    const { animeList, setAnimeList, setCurrentPage, setPagination, pagination, currentPage } = useAnimeContext();
    const { fetchTopAnime } = useTopAnime();


    useEffect(() => {
        fetchTopAnime().then((data) => {
            setAnimeList(data.animeList);
            setPagination(data.pagination);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <ContentGrid loading={false} error={null}>
                {animeList.length && animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagination={pagination}
                fetchTopAnime={fetchTopAnime}
                setAnimeList={setAnimeList}
                setPagination={setPagination}
            />
        </div>
    );
}

export default RankingResults;