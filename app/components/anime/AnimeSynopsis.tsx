
interface AnimeSynopsisProps {
    synopsis: string | undefined;
}

const AnimeSynopsis = ({ synopsis }: AnimeSynopsisProps) => {
    return (
        <div className="flex flex-col gap-4 w-full sm:max-w-[600px] lg:max-w-[1600px] pb-12">
                <h2 className="text-xl font-bold">Synopsis:</h2>
                <p className="font-semibold">{synopsis}</p>
        </div>
    );
};

export default AnimeSynopsis;