import { AnimeProducers, AnimeLicensors, AnimeStudios } from "@/app/types/AnimeData";
import ListItem from "../ui/ListItem";
import Collapsible from "../ui/Collapsible";

interface AnimeProductionInfoProps {
    producers: AnimeProducers[] | undefined;
    licensors: AnimeLicensors[] | undefined;
    studios: AnimeStudios[] | undefined;
}

const AnimeProductionInfo = ({ producers, licensors, studios }: AnimeProductionInfoProps) => {
    return (
        <Collapsible title="Production Information" className="">
            <div className="p-4 sm:p-8">
            <ListItem title="Producers" items={producers} />
            <ListItem title="Licensors" items={licensors} />
            <ListItem title="Studios" items={studios} />
        </div>
        </Collapsible>
    );
};

export default AnimeProductionInfo;