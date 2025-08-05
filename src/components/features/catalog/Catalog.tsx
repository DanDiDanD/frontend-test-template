import { fetchGames } from "@/services/gameService";
import CatalogContent from "./CatalogContent";

type CatalogProps = {
  genre?: string;
};

export default async function Catalog({ genre }: CatalogProps) {
  const initialData = await fetchGames({ genre });

  return <CatalogContent key={genre} initialData={initialData} />;
}
