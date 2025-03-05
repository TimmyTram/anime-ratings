import type { MangaSerialization } from "@/app/types/MangaData";
import ListItem from "../ui/ListItem";
import Collapsible from "../ui/Collapsible";

interface MangaSerializationProps {
    serialization: MangaSerialization[] | undefined;
};

const MangaSerialization = ({ serialization }: MangaSerializationProps) => {
    return (
        <Collapsible title="Serialization" className="w-full sm:max-w-[600px] lg:max-w-[1600px]">
            <div className="p-2 sm:p-4">
                <ListItem items={serialization} title="Magazine" />
            </div>
        </Collapsible>
    );
};

export default MangaSerialization;