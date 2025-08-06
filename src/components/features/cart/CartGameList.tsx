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
      <div className="w-full flex justify-center py-16">
        <h3 className="text-xl text-gray-medium">Your cart is empty</h3>
      </div>
    );
  }

  return (
    <section
      className="w-full md:w-4/7 flex flex-col gap-4"
      aria-label="Cart items"
    >
      {cartItems.map((game) => (
        <CartGame key={game.id} game={game} />
      ))}
    </section>
  );
}
