import { AnimeData } from "@/app/types/AnimeData";

interface AnimeBackgroundInfoProps {
    background: string | undefined;
    source: string | undefined;
    season: string | undefined;
}

const AnimeBackgroundInfo = ({ background, source, season }: AnimeBackgroundInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px]">
            <h2 className="text-xl font-bold">Background Information:</h2>
            <p className="font-semibold">{background}</p>
            <p className="font-semibold">Source: {source}</p>
            <p className="font-semibold">Season: {season}</p>
        </div>
    );
};

export default AnimeBackgroundInfo;