'use client';

import { useRouter } from 'next/navigation';
import { MangaData } from '../../types/MangaData';
import { ReactNode } from 'react';

type MangaCardClickableProps = {
    manga: MangaData;
    children: ReactNode;
};

const MangaCardClickable = ({ manga, children }: MangaCardClickableProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/manga/${manga.mal_id}`);
    };

    return <div onClick={handleClick}>{children}</div>;
};

export default MangaCardClickable;