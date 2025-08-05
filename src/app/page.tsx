import { fetchGames } from "@/services/gameService";

export default async function Home() {
  const data = await fetchGames();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Game Catalog</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
