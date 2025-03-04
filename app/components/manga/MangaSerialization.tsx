import type { MangaSerialization } from "@/app/types/MangaData";
import ListItem from "../ui/ListItem";

interface MangaSerializationProps {
    serialization: MangaSerialization[] | undefined;
};

const MangaSerialization = ({ serialization }: MangaSerializationProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px]">
            <h2 className="text-xl font-semibold text-white">Serialization</h2>
            <div className="flex flex-col gap-4">
                <ListItem items={serialization} title="Magazine" />
            </div>
        </div>
    );
};

export default MangaSerialization;