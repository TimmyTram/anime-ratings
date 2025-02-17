'use client';

import Searchbar from "../components/ui/Searchbar";
import { Suspense } from 'react';
import { SearchContextProvider } from "../context/SearchContextProvider";
import SearchResults from "../components/layout/SearchResults";

const Page = () => {
    return (
        <SearchContextProvider>
            <div className="w-screen min-h-screen flex flex-col bg-secondary">
                <div className="pt-12">
                    <Searchbar />
                </div>
                <Suspense fallback={<div>Loading...</div>} >
                    <SearchResults />
                </Suspense>
            </div>
        </SearchContextProvider>
    );
};

export default Page;