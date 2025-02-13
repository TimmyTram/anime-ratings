import { AnimeData } from "../types/AnimeData";
import Image from 'next/image';

type AnimeCardProps = {
    anime: AnimeData;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
    return (
        <div className="flex flex-col bg-complementary h-full">
            <Image 
                src={anime.images.jpg.image_url} 
                alt={anime.title} 
                width={256} 
                height={384} // Adjust height to match aspect ratio
                className="w-full h-[80%] object-cover"
            />
            <div className="h-[20%] flex items-center justify-center bg-green-500 text-white text-sm text-center p-2">
                {anime.title}
            </div>
        </div>
    );
};


export default AnimeCard;