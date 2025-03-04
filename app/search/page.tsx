'use client';

import { Suspense } from "react";
import SearchResults from "../components/layout/SearchResults";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
};

export default Page;
