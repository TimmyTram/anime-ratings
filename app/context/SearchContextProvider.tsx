'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { AnimeData } from '../types/AnimeData';
import { JikanPagination } from '../types/JikanPagination';

type SearchContextType = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    animeList: AnimeData[];
    setAnimeList: (animeList: AnimeData[]) => void;
    pagination: JikanPagination | null;
    setPagination: (pagination: JikanPagination) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within a SearchContextProvider');
    }
    return context;
}

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [pagination, setPagination] = useState<JikanPagination | null>(null);

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                currentPage,
                setCurrentPage,
                animeList,
                setAnimeList,
                pagination,
                setPagination,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};