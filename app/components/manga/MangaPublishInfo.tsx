import { MangaPublished } from "@/app/types/MangaData"

interface MangaPublishInfoProps {
    published: MangaPublished | undefined;
};

const MangaPublishInfo = ({ published }: MangaPublishInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] px-4 sm:px-8">
            <h2 className="text-xl font-bold">Publish Information:</h2>
            <p><span className="font-bold">Published:</span> {published?.string}</p>
        </div>
    );
};

export default MangaPublishInfo;