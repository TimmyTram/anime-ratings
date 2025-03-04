'use client';

import { useRouter } from 'next/navigation';
import { MangaData } from '../../types/MangaData';
import { AnimeData } from '../../types/AnimeData';
import { ReactNode } from 'react';

// type guards
function isMangaData(data: AnimeData | MangaData): data is MangaData {
    return (data as MangaData).chapters !== undefined; // chapters is a unique property of MangaData
};

function isAnimeData(data: AnimeData | MangaData): data is AnimeData {
    return (data as AnimeData).episodes !== undefined; // episodes is a unique property of AnimeData
};

type ClickableCardProps = {
    data: AnimeData | MangaData;
    children: ReactNode;
};

const ClickableCard = ({ data, children }: ClickableCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        if(isMangaData(data)) {
            router.push(`/manga/${data.mal_id}`);
        } else if(isAnimeData(data)) {
            router.push(`/anime/${data.mal_id}`);
        }
    };

    return <div onClick={handleClick}>{children}</div>;
};

export default ClickableCard;