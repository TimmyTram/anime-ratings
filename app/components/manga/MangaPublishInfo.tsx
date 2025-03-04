import { MangaPublished } from "@/app/types/MangaData"

interface MangaPublishInfoProps {
    published: MangaPublished | undefined;
};

const MangaPublishInfo = ({ published }: MangaPublishInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] p-4 sm:p-8 bg-secondarydark rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Publishing Information:</h2>
            <p><span className="font-bold">Published:</span> {published?.string}</p>
        </div>
    );
};

export default MangaPublishInfo;