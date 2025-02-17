'use client';

import AnimeCard from "../components/anime/AnimeCard";
import ContentGrid from "../components/layout/ContentGrid";
import Searchbar from "../components/ui/Searchbar";
import { useState, Suspense, useCallback } from 'react';

const Page = () => {
    // make a type for this later
    const [animeList, setAnimeList] = useState<any[]>([]);

    // const handleAnimeListChange = (newAnimeList: any[]) => setAnimeList(newAnimeList);

    const handleAnimeListChange = useCallback((newAnimeList: any[]) => {
        setAnimeList(newAnimeList);
    }, []);

    console.log(animeList);

    return (
        <div className="w-screen min-h-screen flex flex-col bg-secondary">
            <div className="pt-12">
                <Suspense fallback={<div>Loading...</div>} >
                    <Searchbar onAnimeListChange={handleAnimeListChange} />
                </Suspense>
            </div>

            <ContentGrid loading={false} error={null}>
                {animeList.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </ContentGrid>

        </div>
    );
};

export default Page;