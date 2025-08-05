export type Game = {
  id: string;
  genre: string;
  image: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
};

export type ApiResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
