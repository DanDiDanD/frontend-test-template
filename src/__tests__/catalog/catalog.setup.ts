import { ApiResponse } from "@/types/game";
import { ITEMS_PER_PAGE } from "./catalog.testData";

const mockGamesState = {
  currentPage: 1,
};

export const mockRouter = {
  replace: jest.fn(),
  refresh: jest.fn(),
};

export const mockSearchParams = {
  get: jest.fn().mockReturnValue(""),
  toString: jest.fn().mockReturnValue(""),
};

jest.mock("next/navigation", () => ({
  useSearchParams: () => mockSearchParams,
  usePathname: () => "/",
  useRouter: () => mockRouter,
}));

jest.mock("@/contexts/CartContext", () => ({
  useCart: () => ({
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    cartItems: [],
    getTotalPrice: () => 0,
    getItemQuantity: () => 0,
    isInCart: jest.fn().mockReturnValue(false),
    isLoaded: true,
  }),
}));

jest.mock("@/services/gameService", () => ({
  fetchGames: jest
    .fn()
    .mockImplementation(
      async ({ genre, page = 1 }: { genre?: string; page?: number } = {}) => {
        const { allGames } = require("./catalog.testData");

        let filteredGames = allGames;
        if (genre) {
          filteredGames = allGames.filter((game: any) => game.genre === genre);
        }

        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = page * ITEMS_PER_PAGE;
        const games = filteredGames.slice(startIndex, endIndex);

        return Promise.resolve({
          games,
          availableFilters: Array.from(
            new Set(allGames.map((game: any) => game.genre))
          ),
          totalPages: Math.ceil(filteredGames.length / ITEMS_PER_PAGE),
          currentPage: page,
        });
      }
    ),
}));

jest.mock("@/hooks/useFetchCatalog", () => ({
  useFetchCatalog: (initialData: ApiResponse) => ({
    games: initialData.games,
    loading: false,
    canLoadMore: mockGamesState.currentPage < initialData.totalPages,
    loadMore: () => {
      mockGamesState.currentPage += 1;
    },
  }),
}));

export const resetMocks = () => {
  jest.clearAllMocks();
  mockGamesState.currentPage = 1;
  mockSearchParams.get.mockReturnValue("");
  mockSearchParams.toString.mockReturnValue("");
};
