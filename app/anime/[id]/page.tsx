'use client';

import useFetchAnimeById from "../../hooks/jikan/useFetchAnimeById"
import { useParams } from "next/navigation";
import Divider from "@/app/components/ui/Divider";
import AnimeDetails from "@/app/components/anime/AnimeDetails";
import AnimeVideoTrailer from "@/app/components/anime/AnimeVideoTrailer";
import AnimeProductionInfo from "@/app/components/anime/AnimeProductionInfo";
import Synopsis from "@/app/components/shared/Synopsis";
import BackgroundInfo from "@/app/components/shared/BackgroundInfo";
import Genre from "@/app/components/shared/Genre";
import BarGraph from "@/app/components/shared/BarGraph";
import useFetchAnimeStatisticsById from "@/app/hooks/jikan/useFetchAnimeStatisticsById";

const Page = () => {
    const { id } = useParams();
    const animeId = Number(id);
    const { anime, loading, error } = useFetchAnimeById(animeId);
    const { animeStatistics, loading: loadingStats, error: errorStats } = useFetchAnimeStatisticsById(animeId);
    //console.log(anime);
    console.log(animeStatistics);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="py-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto flex flex-col lg:flex-row gap-12">
                <AnimeDetails anime={anime} />
                <AnimeVideoTrailer animeTrailer={anime?.trailer} />
            </div>
            <Divider />
            <Genre genre={anime?.genres} />
            <Divider />
            <Synopsis synopsis={anime?.synopsis} />
            <Divider />
            <BackgroundInfo background={anime?.background} source={anime?.source} season={anime?.season} />
            <Divider />
            <AnimeProductionInfo producers={anime?.producers} licensors={anime?.licensors} studios={anime?.studios} />
            <Divider />
            <BarGraph rawData={animeStatistics} />
        </div>
    );
};

export default Page;
