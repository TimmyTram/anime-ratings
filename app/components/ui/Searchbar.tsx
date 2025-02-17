'use client';

import { useState, useEffect, useRef } from 'react';
import SearchIcon from '../icons/Search.icon';
import { useRouter, useSearchParams } from 'next/navigation';
import useFetchAnimeByName from '../../hooks/jikan/useFetchAnimeByName';

type SearchbarProps = {
    onAnimeListChange: (animeList: any[]) => void;
};

const Searchbar = ({ onAnimeListChange }: SearchbarProps) => {
    const searchParams = useSearchParams();
    const q = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(q);
    const router = useRouter();
    const { animeList, loading, fetchAnimeByName } = useFetchAnimeByName();
    const hasFetched = useRef(false);
    const isUserSubmitted = useRef(false); // Track if the fetch is triggered by a user action

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm === '') return;

        hasFetched.current = true;
        isUserSubmitted.current = true;
        const status = await fetchAnimeByName(searchTerm);
        if (status.success) {
            router.push(`/search?q=${searchTerm}`, undefined);
        }
    };

    

    // fetch anime when landing on /search?q=
    useEffect(() => {
        if (q && !isUserSubmitted.current && !hasFetched.current) {
            fetchAnimeByName(q);
            hasFetched.current = true;
        }
        isUserSubmitted.current = false;
    }, [q, fetchAnimeByName]);

    // re-render when animeList actually changes
    useEffect(() => {
        if (animeList.length > 0) {
            onAnimeListChange(animeList);
        }
    }, [animeList, onAnimeListChange]);
    

    return (
        <div className="flex items-center justify-center px-8">
            <form
                onSubmit={handleSubmit} // Move the onSubmit here
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
