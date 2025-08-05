import { useState } from "react";
import { fetchGames } from "@/services/gameService";
import { Game, ApiResponse } from "@/types/game";

export function useFetchCatalog(initialData: ApiResponse) {
  const [games, setGames] = useState<Game[]>(initialData.games);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(initialData.totalPages);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (currentPage >= totalPages) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await fetchGames({ page: nextPage });

      setGames((prev) => [...prev, ...data.games]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error loading more games:", error);
    } finally {
      setLoading(false);
    }
  };

  const canLoadMore = currentPage < totalPages;

  return {
    games,
    loading,
    canLoadMore,
    loadMore,
  };
}
