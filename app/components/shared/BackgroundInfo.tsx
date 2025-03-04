interface BackgroundInfoProps {
    background: string | undefined;
    source?: string | undefined;
    season?: string | undefined;
}

const BackgroundInfo = ({ background, source, season }: BackgroundInfoProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] p-4 sm:p-8 bg-secondarydark rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-center sm:text-left">Background Information:</h2>
            <p className="font-semibold">{background}</p>
            {source && <p className="font-semibold">Source: {source}</p>}
            {season && <p className="font-semibold">Season: {season}</p>}
        </div>
    );
};

export default BackgroundInfo;