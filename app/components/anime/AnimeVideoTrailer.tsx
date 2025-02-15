import { AnimeTrailer } from "@/app/types/AnimeData";

interface AnimeVideoTrailerProps {
    animeTrailer: AnimeTrailer | undefined;
};

const AnimeVideoTrailer = ({ animeTrailer }: AnimeVideoTrailerProps) => {
    if (!animeTrailer) return null;

    return (
        <div className="lg:ml-auto flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Watch Trailer</h2>
            <div className="relative w-full mx-auto h-0 pb-[56.25%] max-w-full lg:w-[800px] lg:h-[450px]">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={animeTrailer.embed_url}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Anime Trailer"
                ></iframe>
            </div>
        </div>
    );
};

export default AnimeVideoTrailer;
