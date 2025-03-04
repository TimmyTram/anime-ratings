interface SynopsisProps {
    synopsis: string | undefined;
}

const Synopsis = ({ synopsis }: SynopsisProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] px-4 sm:px-8">
                <h2 className="text-xl font-bold">Synopsis:</h2>
                <p className="font-semibold">{synopsis}</p>
        </div>
    );
};

export default Synopsis;