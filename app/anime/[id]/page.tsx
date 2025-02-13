'use client';
import useFetchAnimeById from "../../hooks/useFetchAnimeById"
import { useParams } from "next/navigation";

const Page = () => {
    const { id } = useParams();
    const animeId = Number(id);
    const { anime, loading, error } = useFetchAnimeById(animeId);
    console.log(anime);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="text-white">
            {anime?.title}
        </div>
    );
};

export default Page;
