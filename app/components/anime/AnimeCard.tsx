import { AnimeData } from "../../types/AnimeData";
import Image from 'next/image';
import AnimeCardClickable from "./AnimeCardClickable";


type AnimeCardProps = {
    anime: AnimeData;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
    return (
        // TODO: Change the colors of the border and hover border
        <AnimeCardClickable anime={anime}>
            <div className="flex flex-col bg-complementary h-full max-h-[500px] border border-4 border-primary rounded-lg cursor-pointer hover:border-angryred transition duration-300 ease-in-out">
                <div className="relative w-full h-[384px]">
                    <Image
                        src={anime.images.jpg.large_image_url}
                        alt={anime.title}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 256px"
                    />
                </div>

                <div className="h-[20%] flex flex-col items-center justify-center text-white text-sm text-center p-2">
                    <div className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                        {anime.title}
                    </div>

                    <div className="text-sm text-gray-300">
                        Release Date: <span className="font-medium">{anime.year ?? "N/A"}</span>
                    </div>

                    <div className="text-sm text-gray-200 line-clamp-2">
                        {anime.synopsis}
                    </div>
                </div>
            </div>
        </AnimeCardClickable>
    );
};

export default AnimeCard;