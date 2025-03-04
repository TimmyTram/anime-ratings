import { AnimeTrailer } from "@/app/types/AnimeData";

interface AnimeVideoTrailerProps {
    animeTrailer: AnimeTrailer | undefined;
};

const AnimeVideoTrailer = ({ animeTrailer }: AnimeVideoTrailerProps) => {
    if (!animeTrailer || !animeTrailer.embed_url) return null;

    // jikan api v4 embed url has autoplay=1, we need to change it to autoplay=0
    const updatedEmbedUrl = animeTrailer.embed_url.includes('autoplay=1') 
        ? animeTrailer.embed_url.replace('autoplay=1', 'autoplay=0') 
        : `${animeTrailer.embed_url}&autoplay=0`;

    return (
        <div className="lg:ml-auto flex flex-col gap-4 p-4 sm:p-8 bg-secondarydark rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Watch Trailer</h2>
            <div className="relative w-full mx-auto h-0 pb-[56.25%] max-w-full lg:w-[800px] lg:h-[450px]">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={updatedEmbedUrl}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Anime Trailer"
                ></iframe>
            </div>
        </div>
    );
};

export default AnimeVideoTrailer;
