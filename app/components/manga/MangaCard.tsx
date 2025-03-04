import { MangaData } from '../../types/MangaData';
import Image from 'next/image';
import MangaCardClickable from './MangaCardClickable';

type MangaCardProps = {
    manga: MangaData;
}

const MangaCard = ({ manga }: MangaCardProps) => {
    return (
        <MangaCardClickable manga={manga}>
            <div className="flex flex-col bg-complementary h-full max-h-[500px] border border-4 border-primary rounded-lg cursor-pointer hover:border-angryred transition duration-300 ease-in-out">
                <div className="relative w-full h-[384px]">
                    <Image
                        src={manga.images.jpg.large_image_url}
                        alt={manga.title}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 256px"
                    />
                </div>

                <div className="h-[20%] flex flex-col items-center justify-center text-white text-sm text-center p-2">
                    <div className="text-lg font-bold truncate w-full">
                        {manga.title}
                    </div>

                    <div className="text-sm text-gray-300">
                        Publish Date: <span className="font-medium">{manga.published?.string ?? "N/A"}</span>
                    </div>

                    <div className="text-sm text-gray-200 line-clamp-2">
                        {manga.synopsis}
                    </div>
                </div>
            </div>
        </MangaCardClickable>
    );
};

export default MangaCard;