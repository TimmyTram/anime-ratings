import { MangaPublished } from "@/app/types/MangaData"
import Collapsible from "../ui/Collapsible";

interface MangaPublishInfoProps {
    published: MangaPublished | undefined;
};

const MangaPublishInfo = ({ published }: MangaPublishInfoProps) => {
    return (
        <Collapsible title="Publishing Information" className="w-full sm:max-w-[600px] lg:max-w-[1600px]">
            <div className="p-2 sm:p-4">
                <p><span className="font-bold">Published:</span> {published?.string}</p>
            </div>
        </Collapsible>
    );
};

export default MangaPublishInfo;