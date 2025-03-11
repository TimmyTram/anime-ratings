'use client';

import { AnimeStreamingData } from '@/app/types/AnimeStreamingData';
import { useState } from 'react';

const useFetchAnimeStreaming = () => {
    const [animeStreamingLinks, setAnimeStreamingLinks] = useState<AnimeStreamingData[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAnimeStreamingLinks = async (animeId: number) => {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/streaming`);
        const data = await res.json();
        setLoading(false);
        setAnimeStreamingLinks(data.data);
    };

    return { animeStreamingLinks, fetchAnimeStreamingLinks, loading };
};

export default useFetchAnimeStreaming;