"use client";

import { ApiResponse } from "@/types/game";
import { useFetchCatalog } from "@/hooks/useFetchCatalog";
import GameGrid from "./GameGrid";
import Button from "@/components/ui/Button";
import GameSkeleton from "./GameSkeleton";
import GameFilter from "./GameFilter";
import { useSearchParams } from "next/navigation";

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

  const availableFilters = initialData.availableFilters;

  return (
    <>
      <GameFilter availableFilters={availableFilters} />
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
