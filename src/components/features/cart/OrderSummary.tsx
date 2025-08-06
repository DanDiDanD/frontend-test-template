"use client";

import React from "react";
import Card from "@/components/ui/Card";
import { useCart } from "@/contexts/CartContext";
import CartSkeleton from "./CartSkeleton";
import Button from "@/components/ui/Button";

export default function OrderSummary() {
  const { cartItems, cartCount, isLoaded } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (!isLoaded) {
    return <CartSkeleton.OrderSummary />;
  }

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="w-full md:w-3/7">
      <Card
        className="rounded-lg !px-4 md:!px-6 mb-10 md:mb-8"
        aria-label="Order summary"
      >
        <div className="space-y-3 pb-6 md:pb-8">
          <h3 className="text-xl md:text-2xl md:leading-7 font-bold text-gray-medium leading-6">
            Order Summary
          </h3>
          <div className="text-lg font-normal text-gray-medium leading-6">
            {cartCount} items
          </div>
        </div>
        <div className="flex flex-col py-5">
          <ul className="space-y-3 pb-6 border-b border-gray-light">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between text-base text-gray-medium"
              >
                <span className="text-lg leading-6">{item.name}</span>
                <span className="text-lg leading-6">
                  ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between pt-6">
            <span className="text-xl font-bold text-gray-medium leading-6">
              Order Total
            </span>
            <span className="text-xl font-bold text-gray-medium leading-6">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
      <Button className="md:w-full" color="primary">
        Checkout
      </Button>
    </div>
  );
}
