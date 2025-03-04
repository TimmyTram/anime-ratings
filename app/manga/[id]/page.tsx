'use client';

import useFetchMangaById from "@/app/hooks/jikan/useFetchMangaById";
import { useParams } from "next/navigation";



const Page = () => {
    const { id } = useParams();
    const mangaId = Number(id);
    const { manga, loading, error } = useFetchMangaById(mangaId);
    console.log(manga);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="py-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto flex flex-col lg:flex-row gap-12">

            </div>

        </div>
    );
};

export default Page;