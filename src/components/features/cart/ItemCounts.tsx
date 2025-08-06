"use client";

import { useCart } from "@/contexts/CartContext";
import React from "react";

export default function ItemCounts() {
  const { cartCount, isLoaded } = useCart();

  return (
    <>
      <h2 className="text-xl md:text-2xl leading-6 md:leading-7 font-normal text-gray-medium mb-8 md:mb-12">
        {!isLoaded ? (
          <span
            className="inline-block h-5 md:h-6 w-20 animate-pulse bg-gray-200 rounded align-middle"
            aria-label="Loading cart items"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </span>
        ) : (
          `${cartCount} items`
        )}
      </h2>
    </>
  );
}
