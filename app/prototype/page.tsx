'use client';

import { Suspense } from "react";
import PrototypeResults from "../components/layout/PrototypeResults";


const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PrototypeResults />
        </Suspense>
    );
};

export default Page;
