"use client";

import { ApiResponse } from "@/types/game";
import { useFetchCatalog } from "@/hooks/useFetchCatalog";
import GameGrid from "./GameGrid";
import Button from "@/components/ui/Button";
import GameSkeleton from "./GameSkeleton";
import LoadingAnnouncer from "@/components/ui/LoadingAnnouncer";
import { useSearchParams } from "next/navigation";
import CatalogFilter from "./CatalogFilter";

type GamesListProps = {
  initialData: ApiResponse;
};

export default function CatalogContent({ initialData }: GamesListProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "";

  const { games, loading, canLoadMore, loadMore } = useFetchCatalog(
    initialData,
    genre
  );

  return (
    <>
      <LoadingAnnouncer
        isLoading={loading}
        loadingMessage="Loading more games..."
        completedMessage={`${games.length} games loaded`}
      />
      <CatalogFilter availableFilters={initialData.availableFilters} />
      <GameGrid games={games} />
      {loading && <GameSkeleton />}
      {canLoadMore && (
        <Button onClick={loadMore} loading={loading}>
          SEE MORE
        </Button>
      )}
    </>
  );
}
