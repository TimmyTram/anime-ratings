'use client';

import { Suspense } from "react";
import { AnimeContextProvider } from "../context/AnimeContextProvider";
import RankingResults from "../components/layout/RankingResults";

const Page = () => {
  return (
    <AnimeContextProvider>
      <div className="w-screen min-h-screen flex flex-col bg-secondary">
        <Suspense fallback={<div>Loading...</div>} >
          <RankingResults />
        </Suspense>
      </div>
    </AnimeContextProvider>
  );
};

export default Page;