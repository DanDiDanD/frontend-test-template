import { Suspense } from "react";
import type { Metadata } from "next";
import Catalog from "@/components/features/catalog/Catalog";
import CatalogSkeleton from "@/components/features/catalog/CatalogSkeleton";
import MainContainer from "@/components/layout/MainContainer";

export const metadata: Metadata = {
  title: "Top Sellers - Game Store | Apply Digital Test",
  description:
    "Discover the best-selling games across all genres. Browse our curated collection of top-rated games and add them to your cart.",
  keywords: [
    "games",
    "top sellers",
    "video games",
    "gaming",
    "game store",
    "popular games",
  ],
  openGraph: {
    title: "Top Sellers - Game Store",
    description:
      "Discover the best-selling games across all genres. Browse our curated collection of top-rated games.",
    type: "website",
    siteName: "Game Store",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type HomeProps = {
  searchParams?: {
    genre?: string;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const genre = searchParams?.genre || "";
  return (
    <MainContainer className="py-8 md:py-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-medium">
        TOP SELLERS
      </h1>
      <Suspense key={genre} fallback={<CatalogSkeleton genre={genre} />}>
        <Catalog genre={genre} />
      </Suspense>
    </MainContainer>
  );
}
