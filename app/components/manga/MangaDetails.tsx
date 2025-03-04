import { MangaData } from "@/app/types/MangaData";
import Image from "next/image";
import MedalIcon from "../icons/Medal.icon";
import BookVolumeIcon from "../icons/BookVolume.icon";
import ChapterIcon from "../icons/Chapter.icon";
import InfoIcon from "../icons/Info.icon";


interface MangaDetailsProps {
    manga: MangaData | undefined;
};

const MangaDetails = ({ manga }: MangaDetailsProps) => {
    
    console.log(manga);
    
    return (
        <div className="flex flex-row gap-4 px-4 sm:px-8">
            {manga && (
                <Image
                    src={manga.images.jpg.large_image_url}
                    alt={manga.title}
                    width={384}
                    height={384}
                    priority
                    quality={90}
                />
            )}

            <div className="flex flex-col gap-4">
                <div className="text-2xl font-bold">
                    {manga?.title}
                    {manga?.published.prop.from.year && <span className="text-lg font-normal"> ({manga.published.prop.from.year})</span>}
                </div>

                <div className="text-2xl font-bold">
                    {manga?.title_japanese}
                    {manga?.published.prop.from.year && <span className="text-lg font-normal"> ({manga.published.prop.from.year})</span>}
                </div>

                <div className="flex flex-row gap-2">
                    <MedalIcon size={28} />
                    Rank: {manga?.rank}
                </div>

                <div className="flex flex-row gap-2">
                    <BookVolumeIcon size={28} color={'white'}/>
                    Volumes: {manga?.volumes}
                </div>

                <div className="flex flex-row gap-2">
                    <ChapterIcon size={28} color={'white'} />
                    Chapters: {manga?.chapters}
                </div>

                <div className="flex flex-row gap-2">
                    <InfoIcon size={28} color={'white'} />
                    Status: {manga?.status}
                </div>

            </div>

        </div>
    );
};

export default MangaDetails;