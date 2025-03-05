import Collapsible from "../ui/Collapsible";

interface SynopsisProps {
    synopsis: string | undefined;
}

const Synopsis = ({ synopsis }: SynopsisProps) => {
    return (
        <Collapsible title="Synopsis" className={"w-full sm:max-w-[600px] lg:max-w-[1600px] shadow-lg"} >
            <div className="p-4 sm:p-8 bg-secondarydark">
                <p className="font-semibold">{synopsis}</p>
            </div>
        </Collapsible>
    );
};

export default Synopsis;