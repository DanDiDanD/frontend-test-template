import { ApiResponse } from "@/types/game";

type FetchGamesParams = {
  page?: number;
};

export async function fetchGames(
  params: FetchGamesParams = {}
): Promise<ApiResponse> {
  const { page = 1 } = params;

  const searchParams = new URLSearchParams({
    page: page.toString(),
  });

  const response = await fetch(
    `http://localhost:3000/api/games?${searchParams.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}
