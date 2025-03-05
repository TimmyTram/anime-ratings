'use client';

import useFetchMangaById from "@/app/hooks/jikan/useFetchMangaById";
import { useParams } from "next/navigation";
import MangaDetails from "@/app/components/manga/MangaDetails";
import Divider from "@/app/components/ui/Divider";
import Synopsis from "@/app/components/shared/Synopsis";
import BackgroundInfo from "@/app/components/shared/BackgroundInfo";
import MangaPublishInfo from "@/app/components/manga/MangaPublishInfo";
import MangaSerialization from "@/app/components/manga/MangaSerialization";
import MangaAuthorInfo from "@/app/components/manga/MangaAuthorInfo";
import Genre from "@/app/components/shared/Genre";
import MangaThemes from "@/app/components/manga/MangaThemes";
import useFetchMangaStatisticsById from "@/app/hooks/jikan/useFetchMangaStatisticsById";
import BarGraph from "@/app/components/shared/BarGraph";

const Page = () => {
    const { id } = useParams();
    const mangaId = Number(id);
    const { manga, loading, error } = useFetchMangaById(mangaId);
    const { mangaStatistics, loading: loadingStats, error: errorStats } = useFetchMangaStatisticsById(mangaId);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="py-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto flex flex-col lg:flex-row gap-12">
                <MangaDetails manga={manga} />
                <div className="flex flex-col gap-12 items-center justify-center bg-secondarydark p-4 sm:p-8 rounded-lg shadow-lg">
                    <Genre genre={manga?.genres} />
                    <Divider />
                    <MangaThemes themes={manga?.themes} />
                </div>
            </div>
            <Divider />
            <Synopsis synopsis={manga?.synopsis} />
            <Divider />
            <BackgroundInfo background={manga?.background} />
            <Divider />
            <MangaAuthorInfo authors={manga?.authors} />
            <Divider />
            <MangaPublishInfo published={manga?.published} />
            <Divider />
            <MangaSerialization serialization={manga?.serializations} />
            <Divider />
            {mangaStatistics ? <BarGraph rawData={mangaStatistics} type={'manga'} /> : <div>Loading...</div>}
        </div>
    );
};

export default Page;