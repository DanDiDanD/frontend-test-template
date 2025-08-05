import { ApiResponse } from "@/types/game";

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

  const response = await fetch(
    `http://localhost:3000/api/games?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
