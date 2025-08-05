import { fetchGames } from "@/services/gameService";
import CatalogContent from "./CatalogContent";

export default async function Catalog() {
  const initialData = await fetchGames({ page: 1 });

  return <CatalogContent initialData={initialData} />;
}
