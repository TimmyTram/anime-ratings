import { AnimeData } from "@/app/types/AnimeData";
import Image from "next/image";
import MedalIcon from "../icons/Medal.icon";
import EpisodesIcon from "../icons/Episodes.icon";
import ClockIcon from "../icons/Clock.icon";
import CalendarIcon from "../icons/Calendar.icon";

interface AnimeDetailsProps {
    anime: AnimeData | undefined;
};

const AnimeDetails = ({ anime }: AnimeDetailsProps) => {
    return (
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

                        <div className="text-2xl font-bold">
                            {anime?.title_japanese}
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
    );
};

export default AnimeDetails;