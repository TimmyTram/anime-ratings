'use client';

import useFetchMangaById from "@/app/hooks/jikan/useFetchMangaById";
import { useParams } from "next/navigation";
import MangaDetails from "@/app/components/manga/MangaDetails";
import Divider from "@/app/components/ui/Divider";
import Synopsis from "@/app/components/shared/Synopsis";
import BackgroundInfo from "@/app/components/shared/BackgroundInfo";
import MangaPublishInfo from "@/app/components/manga/MangaPublishInfo";
import MangaSerialization from "@/app/components/manga/MangaSerialization";
import MangaAuthorInfo from "@/app/components/manga/MangaAuthorInfo";
import Genre from "@/app/components/shared/Genre";
import MangaThemes from "@/app/components/manga/MangaThemes";

const Page = () => {
    const { id } = useParams();
    const mangaId = Number(id);
    const { manga, loading, error } = useFetchMangaById(mangaId);
    if (loading) return <div>Loading...</div>;

    return (
        <div className="py-20 text-white flex flex-col items-center justify-center gap-12">
            <div className="w-full max-w-[1600px] h-128 mx-auto flex flex-col lg:flex-row gap-12">
                <MangaDetails manga={manga} />
            </div>
            <Divider />
            <Genre genre={manga?.genres} />
            <Divider />
            <MangaThemes themes={manga?.themes} />
            <Divider/>
            <Synopsis synopsis={manga?.synopsis} />
            <Divider />
            <BackgroundInfo background={manga?.background} />
            <Divider />
            <MangaAuthorInfo authors={manga?.authors} />
            <Divider />
            <MangaPublishInfo published={manga?.published} />
            <Divider />
            <MangaSerialization serialization={manga?.serializations} />
        </div>
    );
};

export default Page;