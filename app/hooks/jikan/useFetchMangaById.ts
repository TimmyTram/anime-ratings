import { useState, useEffect } from 'react';
import { AnimeData } from '../../types/AnimeData';

/**
 * This will only run once per render
 * @param id mal_id of the anime
 * @returns 
 */
const useFetchMangaById = (id: number) => {
    const [manga, setManga] = useState<AnimeData>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMangaById = async (id: number) => {
            try {
                setLoading(true);
                console.log(`[INFO]: Calling api jikan.moe to fetch ${id}`)
                const res = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setManga(data.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMangaById(id);
    }, [id]);

    return { manga, loading, error };
};

export default useFetchMangaById;