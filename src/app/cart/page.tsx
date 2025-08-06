import MainContainer from "@/components/layout/MainContainer";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon";
import Link from "next/link";
import type { Metadata } from "next";
import ItemCounts from "@/components/features/cart/ItemCounts";
import Cart from "@/components/features/cart/Cart";

export const metadata: Metadata = {
  title: "Shopping Cart | Apply Digital Test",
  description:
    "Review and manage your selected games in your shopping cart. Add or remove games before checkout.",
  openGraph: {
    title: "Shopping Cart | Apply Digital Test",
    description: "Review and manage your selected games in your shopping cart.",
    type: "website",
  },
};

export default function CartPage() {
  return (
    <MainContainer className="pt-0 pb-8 md:pb-12">
      <nav
        className="py-4 md:py-6 mb-8 md:mb-12"
        aria-label="Breadcrumb navigation"
      >
        <Link
          href="/"
          className="w-fit pr-1 flex items-center gap-2 text-gray-medium hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded transition-colors"
          aria-label="Go back to games catalog"
        >
          <LeftArrowIcon aria-hidden="true" />
          <span>Back to Catalog</span>
        </Link>
      </nav>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-medium mb-3">
        Your Cart
      </h1>
      <ItemCounts />
      <Cart />
    </MainContainer>
  );
}
