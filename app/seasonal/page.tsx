'use client';

import { Suspense } from "react";
import SeasonalResults from "../components/layout/SeasonalResults";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SeasonalResults />
        </Suspense>
    );
}

export default Page;