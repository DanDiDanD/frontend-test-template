"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Game } from "@/types/game";

type CartContextType = {
  cartItems: Game[];
  // eslint-disable-next-line no-unused-vars
  addToCart: (game: Game) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (gameId: string) => void;
  // eslint-disable-next-line no-unused-vars
  isInCart: (gameId: string) => boolean;
  cartCount: number;
  isLoaded: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

const CART_STORAGE_KEY = "game-cart";

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Game[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      } catch {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (game: Game) => {
    setCartItems((prev) => [...prev, game]);
  };

  const removeFromCart = (gameId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== gameId));
  };

  const isInCart = (gameId: string) => {
    return cartItems.some((item) => item.id === gameId);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        cartCount,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
