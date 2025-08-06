import { ApiResponse } from "@/types/game";
import { apiUrl, API_ENDPOINTS } from "@/config/api";

type FetchGamesParams = {
  genre?: string;
  page?: number;
};

export async function fetchGames(
  params: FetchGamesParams = {}
): Promise<ApiResponse> {
  const { genre, page = 1 } = params;

  const searchParams = new URLSearchParams({
    page: page.toString(),
  });

  if (genre) {
    searchParams.append("genre", genre);
  }

  const response = await fetch(apiUrl(API_ENDPOINTS.GAMES, searchParams));

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
