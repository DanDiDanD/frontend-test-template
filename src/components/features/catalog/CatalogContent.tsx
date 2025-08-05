"use client";

import { ApiResponse } from "@/types/game";
import { useFetchCatalog } from "@/hooks/useFetchCatalog";
import GameGrid from "./GameGrid";
import Button from "@/components/ui/Button";
import GameSkeleton from "./GameSkeleton";

type GamesListProps = {
  initialData: ApiResponse;
};

export default function CatalogContent({ initialData }: GamesListProps) {
  const { games, loading, canLoadMore, loadMore } =
    useFetchCatalog(initialData);

  return (
    <>
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
