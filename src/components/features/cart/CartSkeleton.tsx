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

function CartGame() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center rounded-none !px-4 !py-5 border-0 border-b border-gray-light last:border-b-0 bg-white"
      role="status"
      aria-label="Loading cart item"
    >
      <div className="md:hidden">
        <div className="flex mb-4 justify-between gap-4">
          <div className="relative flex-1 aspect-[16/9] flex-shrink-0">
            <div className="w-full h-full animate-pulse bg-gray-200 rounded" />
          </div>
          <div className="flex-shrink-0">
            <div className="w-6 h-6 animate-pulse bg-gray-200 rounded" />
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="h-4 w-20 animate-pulse bg-gray-200 rounded mb-3" />
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-6 w-32 animate-pulse bg-gray-200 rounded" />
              <div className="h-4 w-8 animate-pulse bg-gray-200 rounded" />
            </div>
            <div className="h-4 w-full animate-pulse bg-gray-200 rounded" />
            <div className="h-4 w-3/4 animate-pulse bg-gray-200 rounded" />
          </div>
          <div className="text-right mt-5">
            <div className="h-6 w-16 animate-pulse bg-gray-200 rounded ml-auto" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-full md:gap-6">
        <div className="relative aspect-[16/9] w-40 lg:w-64 flex-shrink-0">
          <div className="w-full h-full animate-pulse bg-gray-200 rounded" />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="h-4 w-20 animate-pulse bg-gray-200 rounded mb-3" />
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-3">
              <div className="h-6 w-40 animate-pulse bg-gray-200 rounded" />
              <div className="h-4 w-8 animate-pulse bg-gray-200 rounded" />
            </div>
            <div className="h-4 w-full animate-pulse bg-gray-200 rounded" />
            <div className="h-4 w-2/3 animate-pulse bg-gray-200 rounded" />
          </div>
          <div className="text-right mt-4">
            <div className="h-6 w-20 animate-pulse bg-gray-200 rounded ml-auto" />
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-6 h-6 animate-pulse bg-gray-200 rounded" />
        </div>
      </div>
      <span className="sr-only">Loading cart item...</span>
    </div>
  );
}

function CartGameList({ itemCount = 3 }: { itemCount?: number }) {
  return (
    <div
      className="flex flex-col gap-4"
      role="status"
      aria-label="Loading cart items"
    >
      {Array.from({ length: itemCount }).map((_, index) => (
        <CartGame key={index} />
      ))}
      <span className="sr-only">Loading cart items...</span>
    </div>
  );
}

const CartSkeleton = {
  ItemCount,
  OrderSummary,
  CartGame,
  CartGameList,
};

export default CartSkeleton;
