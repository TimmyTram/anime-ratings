'use client';

import { Suspense } from "react";
import RankResults from "../components/layout/RankResults";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RankResults />
        </Suspense>
    );
};

export default Page;