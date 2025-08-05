import { Suspense } from "react";
import Catalog from "@/components/features/catalog/Catalog";
import GameSkeleton from "@/components/features/catalog/GameSkeleton";
import MainContainer from "@/components/layout/MainContainer";

export default function Home() {
  return (
    <MainContainer className="py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Game Catalog</h1>
      <Suspense fallback={<GameSkeleton />}>
        <Catalog />
      </Suspense>
    </MainContainer>
  );
}
