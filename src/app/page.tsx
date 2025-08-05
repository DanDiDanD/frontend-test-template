import { Suspense } from "react";
import Catalog from "@/components/catalog/Catalog";
import GamesListSkeleton from "@/components/catalog/GamesListSkeleton";

export default function Home() {
  return (
    <main className="px-6 py-8 md:py-12">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Game Catalog</h1>
        <Suspense fallback={<GamesListSkeleton />}>
          <Catalog />
        </Suspense>
      </div>
    </main>
  );
}
