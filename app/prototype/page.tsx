'use client';

import { Suspense } from "react";
import PageWrapper from "../components/layout/PageWrapper";

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageWrapper />
        </Suspense>
    );
};

export default Page;
