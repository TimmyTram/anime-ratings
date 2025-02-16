import { useState } from 'react';

const useFetchAnimeByName = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAnimeByName = async (name: string) => {
        if (loading) return { success: false, message: 'Already fetching data' };  // Prevents multiple fetches

        try {
            setLoading(true);
            console.log(`[INFO]: Calling api jikan.moe for anime with name: ${name}`);
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setAnimeList(data.data);  // State will update here
            return {
                success: true,
                message: 'Anime fetched successfully'
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.message
            };
        } finally {
            setLoading(false);  // Reset loading flag after fetching
        }
    };

    return { animeList, loading, fetchAnimeByName };
};


export default useFetchAnimeByName;
