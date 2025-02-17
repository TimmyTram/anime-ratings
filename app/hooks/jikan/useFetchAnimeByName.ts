import { useState } from 'react';

const useFetchAnimeByName = () => {
    const [loading, setLoading] = useState(false);

    const fetchAnimeByName = async (name: string, page: number = 1, limit: number = 8) => {
        if (loading) return { success: false, message: 'Already fetching data' };  // Prevents multiple fetches

        try {
            setLoading(true);
            console.log(`[INFO]: Calling api jikan.moe for anime with name: ${name}, page: ${page}, limit: ${limit}`);
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${name}&page=${page}&limit=${limit}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            return {
                success: true,
                message: 'Anime fetched successfully',
                animeList: data.data,
                pagination: data.pagination,
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.message,
                animeList: [],
                pagination: {},
            };
        } finally {
            setLoading(false);
        }
    };


    return { loading, fetchAnimeByName };
};


export default useFetchAnimeByName;
