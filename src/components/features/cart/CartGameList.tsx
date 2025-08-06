"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";
import CartGame from "./CartGame";
import CartSkeleton from "./CartSkeleton";

export default function CartGameList() {
  const { cartItems, isLoaded } = useCart();

  if (!isLoaded) {
    return <CartSkeleton.CartGameList />;
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-medium">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((game) => (
        <CartGame key={game.id} game={game} />
      ))}
    </div>
  );
}
