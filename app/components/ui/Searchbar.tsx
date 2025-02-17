'use client';

import SearchIcon from '../icons/Search.icon';
import { useRouter } from 'next/navigation';
import useFetchAnimeByName from '../../hooks/jikan/useFetchAnimeByName';
import { useSearchContext } from '@/app/context/SearchContextProvider';

const Searchbar = () => {
    const { 
        searchTerm, 
        setSearchTerm, 
        currentPage,
        setCurrentPage,
        setAnimeList,  
        setPagination  
    } = useSearchContext();
    const router = useRouter();
    const { fetchAnimeByName } = useFetchAnimeByName();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm === '') return;
        setCurrentPage(1);
        const status = await fetchAnimeByName(searchTerm, currentPage);
        if (status.success) {
            setAnimeList(status.animeList);
            setPagination(status.pagination);
            router.push(`/search?q=${searchTerm}&page=${currentPage}`, undefined);
        }
    };

    return (
        <div className="flex items-center justify-center px-8">
            <form
                onSubmit={handleSubmit}
                className="flex flex-row w-full bg-secondary text-white border-4 border-white p-6 focus:outline-white rounded-full shadow-md placeholder-white"
            >
                <input
                    type="text"
                    placeholder="Search for anime"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-secondary text-white placeholder-white outline-none"
                    autoComplete="off"
                />
                <SearchIcon size={24} className="ml-auto" />
            </form>
        </div>
    );
};

export default Searchbar;