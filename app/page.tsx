'use client';

import ContentGrid from "./components/layout/ContentGrid";
import Navbar from "./components/layout/Navbar";
import AnimeCard from "./components/anime/AnimeCard";
import useTopAnime from "./hooks/useTopAnime";

export default function Home() {
  const { animeList, loading, error } = useTopAnime();
  
  console.log(animeList);

  return (
    <div className="w-screen min-h-screen flex flex-col bg-secondary">
      <ContentGrid loading={loading} error={error}>
        {Array.from({ length: 8 }).map((_, index) => (
          <AnimeCard key={index} anime={animeList[index]} />
        ))}
      </ContentGrid>
    </div>
  );
}
