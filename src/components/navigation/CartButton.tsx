"use client";

import { useCart } from "@/contexts/CartContext";
import CartIcon from "../icons/CartIcon";
import Link from "next/link";

export default function CartButton() {
  const { cartCount, isLoaded } = useCart();

  return (
    <Link
      href="/cart"
      className="relative text-primary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-surface-primary transition-colors"
      aria-label={`View shopping cart (${cartCount} ${cartCount === 1 ? "item" : "items"})`}
    >
      <CartIcon className="text-primary" />
      {!isLoaded ? (
        <span
          className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none animate-pulse bg-gray-300 rounded-full min-w-[1.25rem] h-5"
          aria-label="Loading cart count"
          role="status"
        >
          <span className="sr-only">Loading cart count...</span>
        </span>
      ) : (
        cartCount > 0 && (
          <span
            className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-accent rounded-full min-w-[1.25rem] h-5 bg-orange-600"
            aria-hidden="true"
          >
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        )
      )}
    </Link>
  );
}
