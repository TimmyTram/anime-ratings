import type { MangaAuthors } from "@/app/types/MangaData";
import ListItem from "../ui/ListItem";
import Collapsible from "../ui/Collapsible";

interface MangaAuthorInfoProps {
    authors: MangaAuthors[] | undefined;
};

const MangaAuthorInfo = ({ authors }: MangaAuthorInfoProps) => {
    return (
        <Collapsible title="Author(s)" className="">
            <div className="p-4 sm:p-8">
                <ListItem title="Author(s)" items={authors} />
            </div>
        </Collapsible>
    );
};

export default MangaAuthorInfo;