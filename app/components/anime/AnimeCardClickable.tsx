'use client';

import { useRouter } from 'next/navigation';
import { AnimeData } from "../../types/AnimeData";
import { ReactNode } from "react";

type AnimeCardClickableProps = {
    anime: AnimeData;
    children: ReactNode;
};

const AnimeCardClickable = ({ anime, children }: AnimeCardClickableProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/anime/${anime.mal_id}`);
    };

    return <div onClick={handleClick}>{children}</div>;
};

export default AnimeCardClickable;
