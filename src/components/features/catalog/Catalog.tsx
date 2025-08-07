import { fetchGames } from "@/services/gameService";
import CatalogContent from "./CatalogContent";
import CatalogFilter from "./CatalogFilter";

type CatalogProps = {
  genre?: string;
};

export default async function Catalog({ genre }: CatalogProps) {
  const initialData = await fetchGames({ genre });

  return (
    <>
      <CatalogFilter availableFilters={initialData.availableFilters} />
      <div className="separator"></div>
      <CatalogContent key={genre} initialData={initialData} />
    </>
  );
}
