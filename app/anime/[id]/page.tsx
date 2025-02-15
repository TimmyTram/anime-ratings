'use client';
import Image from "next/image";
import useFetchAnimeById from "../../hooks/useFetchAnimeById"
import { useParams } from "next/navigation";
import MedalIcon from "@/app/components/icons/Medal.icon";
import EpisodesIcon from "@/app/components/icons/Episodes.icon";
import ClockIcon from "@/app/components/icons/Clock.icon";
import CalendarIcon from "@/app/components/icons/Calendar.icon";

const Page = () => {
    const { id } = useParams();
    const animeId = Number(id);
    const { anime, loading, error } = useFetchAnimeById(animeId);
    console.log(anime);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="pt-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto bg-blue-500">
                <div className="flex flex-row gap-4">
                    {anime && (
                        <Image
                            src={anime.images.jpg.large_image_url}
                            alt={anime.title}
                            width={384}
                            height={384}
                            priority
                            quality={90}
                        />
                    )}

                    <div className="flex flex-col gap-4">
                        <div className="text-2xl font-bold">
                            {anime?.title}
                            {anime?.year && <span className="text-lg font-normal"> ({anime.year})</span>}
                        </div>

                        <div className="flex flex-row gap-2">
                            <MedalIcon size={28} />
                            Rank: {anime?.rank}
                        </div>

                        <div className="flex flex-row gap-2">
                            <EpisodesIcon size={28} className="text-white" />
                            {anime?.episodes} Episodes
                        </div>

                        <div className="flex flex-row gap-2">
                            <ClockIcon size={28} className="text-white" />
                            {anime?.duration}
                        </div>

                        <div className="flex flex-row gap-2">
                            <CalendarIcon size={22} className="text-white" />
                            {anime?.broadcast.string}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
