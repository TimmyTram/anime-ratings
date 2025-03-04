import type { MangaAuthors } from "@/app/types/MangaData";
import ListItem from "../ui/ListItem";

interface MangaAuthorInfoProps {
    authors: MangaAuthors[] | undefined;
};

const MangaAuthorInfo = ({ authors }: MangaAuthorInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] px-4 sm:px-8">
            <h2 className="text-xl font-semibold text-white">Author(s):</h2>
            <div className="flex flex-col gap-4">
                <ListItem items={authors} title="Author(s)" />
            </div>
        </div>
    );
};

export default MangaAuthorInfo;