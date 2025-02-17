import { useState, useEffect } from 'react';


const useTopAnime = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopAnime = async () => {
            
            try {
                setLoading(true);
                console.log(`[INFO]: Calling api jikan.moe for top anime.`);
                const res = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setAnimeList(data.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTopAnime();
    }, []);

    return { animeList, loading, error };
};

export default useTopAnime;