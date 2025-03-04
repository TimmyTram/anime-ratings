import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimeData } from '../../types/AnimeData';

const useRankResults = (limit: number = 8) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/top/anime?page=${currentPage}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                setAnimeList(data.data);
                setTotalPages(data.pagination.last_visible_page);
            });
    }, [currentPage, limit]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`?page=${page}`, { scroll: false });
    };

    return {
        animeList,
        currentPage,
        totalPages,
        handlePageChange,
    };
};

export default useRankResults;
