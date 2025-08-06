import React from "react";

function ItemCount() {
  return (
    <span
      className="inline-block h-4 w-16 animate-pulse bg-gray-200 rounded"
      aria-label="Loading items count"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </span>
  );
}

type OrderSummaryProps = {
  itemCount?: number;
};

function OrderSummary({ itemCount = 3 }: OrderSummaryProps) {
  return (
    <>
      <div
        className="space-y-3"
        role="status"
        aria-label="Loading order summary"
      >
        {Array.from({ length: itemCount }).map((_, index) => (
          <div key={index} className="flex justify-between">
            <div className="h-6 w-32 animate-pulse bg-gray-200 rounded" />
            <div className="h-6 w-16 animate-pulse bg-gray-200 rounded" />
          </div>
        ))}
        <span className="sr-only">Loading order items...</span>
      </div>
      <div className="border-b border-gray-light my-6" />
      <div
        className="flex justify-between"
        role="status"
        aria-label="Loading order total"
      >
        <div className="h-6 w-24 animate-pulse bg-gray-200 rounded" />
        <div className="h-6 w-20 animate-pulse bg-gray-200 rounded" />
        <span className="sr-only">Loading order total...</span>
      </div>
    </>
  );
}

const CartSkeleton = {
  ItemCount,
  OrderSummary,
};

export default CartSkeleton;
