import { Game } from "@/types/game";

let mockCartItems: Game[] = [];
let mockIsLoaded = true;

export const mockCartContext = {
  get cartItems() {
    return mockCartItems;
  },
  get cartCount() {
    return mockCartItems.length;
  },
  get isLoaded() {
    return mockIsLoaded;
  },
  addToCart: jest.fn(),
  removeFromCart: jest.fn((gameId: string) => {
    mockCartItems = mockCartItems.filter((item) => item.id !== gameId);
  }),
  getTotalPrice: jest.fn(() =>
    mockCartItems.reduce((sum, item) => sum + item.price, 0)
  ),
  getItemQuantity: jest.fn(),
  isInCart: jest.fn(),
};

jest.mock("@/contexts/CartContext", () => ({
  useCart: () => mockCartContext,
}));

export const setMockCartItems = (items: Game[]) => {
  mockCartItems = items;
};

export const resetMocks = () => {
  jest.clearAllMocks();
  mockCartItems = [];
  mockIsLoaded = true;
};
