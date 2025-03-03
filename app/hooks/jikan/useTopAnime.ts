import { useState, useEffect } from 'react';

const useTopAnime = () => {
    const [loading, setLoading] = useState(false);

    const fetchTopAnime = async (page: number = 1, limit: number = 8) => {
        if (loading) return { success: false, message: 'Already fetching data' };  // Prevents multiple fetches

        try {
            setLoading(true);
            console.log(`[INFO]: Calling api jikan.moe for top anime, page: ${page}, limit: ${limit}`);
            const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            return {
                success: true,
                message: 'Top anime fetched successfully',
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

    return { loading, fetchTopAnime };
}


// const useTopAnime = () => {
//     const [animeList, setAnimeList] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchTopAnime = async () => {
            
//             try {
//                 setLoading(true);
//                 console.log(`[INFO]: Calling api jikan.moe for top anime.`);
//                 const res = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8`);
//                 const data = await res.json();
//                 if(data.error) throw new Error(data.error);
//                 setAnimeList(data.data);
//             } catch (error: any) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTopAnime();
//     }, []);

//     return { animeList, loading, error };
// };

export default useTopAnime;