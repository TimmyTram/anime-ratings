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
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-8 bg-secondarydark rounded-lg shadow-lg">
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
                    <span className="font-bold">Rank:</span> {manga?.rank ?? 'Unknown'}
                </div>

                <div className="flex flex-row gap-2">
                    <span className="font-bold">User Score:</span> {manga?.score ?? 'Unknown'} / 10
                </div>

                <div className="flex flex-row gap-2">
                    <BookVolumeIcon size={28} color={'white'} />
                    <span className="font-bold">Volumes:</span>{manga?.volumes ?? 'Unknown'}
                </div>

                <div className="flex flex-row gap-2">
                    <ChapterIcon size={28} color={'white'} />
                    <span className="font-bold">Chapters:</span> {manga?.chapters ?? 'Unknown'}
                </div>

                <div className="flex flex-row gap-2">
                    <InfoIcon size={28} color={'white'} />
                    <span className="font-bold">Status:</span>{manga?.status}
                </div>

                <div className="flex flex-row gap-2">
                    <span className="font-bold">Members:</span>{manga?.members ?? "Unknown"}
                </div>

            </div>

        </div>
    );
};

export default MangaDetails;