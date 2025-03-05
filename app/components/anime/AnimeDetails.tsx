import { AnimeData } from "@/app/types/AnimeData";
import Image from "next/image";
import MedalIcon from "../icons/Medal.icon";
import EpisodesIcon from "../icons/Episodes.icon";
import ClockIcon from "../icons/Clock.icon";
import CalendarIcon from "../icons/Calendar.icon";
import TVIcon from "../icons/TV.icon";

interface AnimeDetailsProps {
    anime: AnimeData | undefined;
};

const AnimeDetails = ({ anime }: AnimeDetailsProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-8 bg-secondarydark rounded-lg shadow-lg">
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
                            <span className="font-bold">Rank:</span>{anime?.rank ?? "Unknown"}
                        </div>

                        <div className="flex flex-row gap-2">
                            <span className="font-bold">User Score:</span> {anime?.score ?? "Unknown"} / 10
                        </div>

                        <div className="flex flex-row gap-2">
                            <EpisodesIcon size={28} className="text-white" />
                            {anime?.episodes} Episodes
                        </div>

                        <div className="flex flex-row gap-2">
                            <ClockIcon size={28} className="text-white" />
                            {anime?.duration ?? "Unknown"}
                        </div>

                        <div className="flex flex-row gap-2">
                            <CalendarIcon size={22} className="text-white" />
                            {anime?.broadcast.string ?? "Unknown"}
                        </div>

                        <div className="flex flex-row gap-2">
                            <TVIcon size={28} color="white" />
                            {anime?.status ?? "Unknown"}
                        </div>

                        <div className="flex flex-row gap-2">
                            <span className="font-bold">Members:</span>{anime?.members ?? "Unknown"}
                        </div>

                    </div>
                </div>
    );
};

export default AnimeDetails;