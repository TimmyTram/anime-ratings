'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { AnimeData } from '../types/AnimeData';
import { JikanPagination } from '../types/JikanPagination';

type AnimeContextType = {
    animeList: AnimeData[];
    setAnimeList: (animeList: AnimeData[]) => void;
    pagination: JikanPagination | null;
    setPagination: (pagination: JikanPagination) => void;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}

const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

export const useAnimeContext = () => {
    const context = useContext(AnimeContext);
    if (!context) {
        throw new Error('useAnimeContext must be used within a AnimeContextProvider');
    }
    return context;
}

export const AnimeContextProvider = ({ children }: { children: ReactNode }) => {
    const [animeList, setAnimeList] = useState<AnimeData[]>([]);
    const [pagination, setPagination] = useState<JikanPagination | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <AnimeContext.Provider
            value={{
                animeList,
                setAnimeList,
                pagination,
                setPagination,
                currentPage,
                setCurrentPage
            }}
        >
            {children}
        </AnimeContext.Provider>
    );
};