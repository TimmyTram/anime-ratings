import Collapsible from "../ui/Collapsible";

interface BackgroundInfoProps {
    background: string | undefined;
    source?: string | undefined;
    season?: string | undefined;
}

const BackgroundInfo = ({ background, source, season }: BackgroundInfoProps) => {
    return (
        <Collapsible title="Background Information" className="">
            <div className="flex flex-col gap-4 p-4 sm:p-8">
                <p className="font-semibold">{background}</p>
                {source && <p className="font-semibold">Source: {source}</p>}
                {season && <p className="font-semibold">Season: {season}</p>}
            </div>
        </Collapsible>
    );
};

export default BackgroundInfo;