const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  GAMES: "/api/games",
} as const;

export function apiUrl(
  endpoint: string,
  searchParams?: URLSearchParams
): string {
  const url = `${API_BASE_URL}${endpoint}`;
  return searchParams ? `${url}?${searchParams.toString()}` : url;
}

export { API_BASE_URL };
