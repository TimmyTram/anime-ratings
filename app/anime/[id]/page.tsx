'use client';

import useFetchAnimeById from "../../hooks/jikan/useFetchAnimeById"
import { useParams } from "next/navigation";
import Divider from "@/app/components/ui/Divider";
import AnimeSynopsis from "@/app/components/anime/AnimeSynopsis";
import AnimeGenre from "@/app/components/anime/AnimeGenre";
import AnimeDetails from "@/app/components/anime/AnimeDetails";
import AnimeVideoTrailer from "@/app/components/anime/AnimeVideoTrailer";
import AnimeBackgroundInfo from "@/app/components/anime/AnimeBackgroundInfo";
import AnimeProductionInfo from "@/app/components/anime/AnimeProductionInfo";

const Page = () => {
    const { id } = useParams();
    const animeId = Number(id);
    const { anime, loading, error } = useFetchAnimeById(animeId);
    console.log(anime);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="py-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto flex flex-col lg:flex-row gap-12">
                <AnimeDetails anime={anime} />
                <AnimeVideoTrailer animeTrailer={anime?.trailer} />
            </div>
            <Divider />
            <AnimeGenre genre={anime?.genres} />
            <Divider />
            <AnimeSynopsis synopsis={anime?.synopsis} />
            <Divider />
            <AnimeBackgroundInfo background={anime?.background} source={anime?.source} season={anime?.season} />
            <Divider />
            <AnimeProductionInfo producers={anime?.producers} licensors={anime?.licensors} studios={anime?.studios} />
        </div>
    );
};

export default Page;
