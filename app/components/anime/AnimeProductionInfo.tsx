import { AnimeProducers, AnimeLicensors, AnimeStudios } from "@/app/types/AnimeData";
import ListItem from "../ui/ListItem";

interface AnimeProductionInfoProps {
    producers: AnimeProducers[] | undefined;
    licensors: AnimeLicensors[] | undefined;
    studios: AnimeStudios[] | undefined;
}

const AnimeProductionInfo = ({ producers, licensors, studios }: AnimeProductionInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] p-4 sm:p-8 bg-secondarydark rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Production Information:</h2>
            <ListItem title="Producers" items={producers} />
            <ListItem title="Licensors" items={licensors} />
            <ListItem title="Studios" items={studios} />
        </div>
    );
};

export default AnimeProductionInfo;