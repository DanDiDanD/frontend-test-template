"use client";

import { useState } from "react";
import { fetchGames } from "@/services/gameService";
import { Game, ApiResponse } from "@/types/game";
import GamesList from "./GameListGrid";
import SeeMoreButton from "./SeeMoreButton";
import GamesListSkeleton from "./GamesListSkeleton";

type GamesListProps = {
  initialData: ApiResponse;
};

export default function CatalogContent({ initialData }: GamesListProps) {
  const [games, setGames] = useState<Game[]>(initialData.games);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(initialData.totalPages);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (currentPage >= totalPages) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await fetchGames({ page: nextPage });

      setGames((prev) => [...prev, ...data.games]);
      setCurrentPage(nextPage);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error loading more games:", error);
    } finally {
      setLoading(false);
    }
  };

  const canLoadMore = currentPage < totalPages;

  return (
    <div>
      <GamesList games={games} />
      {loading && <GamesListSkeleton />}
      <SeeMoreButton
        onLoadMore={handleLoadMore}
        loading={loading}
        canLoadMore={canLoadMore}
      />
    </div>
  );
}
