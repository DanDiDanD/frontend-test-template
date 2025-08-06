import { Suspense } from "react";
import Catalog from "@/components/features/catalog/Catalog";
import CatalogSkeleton from "@/components/features/catalog/CatalogSkeleton";
import MainContainer from "@/components/layout/MainContainer";

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
        Top Sellers
      </h1>
      <Suspense fallback={<CatalogSkeleton />}>
        <Catalog genre={genre} />
      </Suspense>
    </MainContainer>
  );
}
