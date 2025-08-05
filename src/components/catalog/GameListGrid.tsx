import { Game } from "@/types/game";

type GameGridProps = {
  games: Game[];
};

export default function GamesList({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <div key={game.id} className="border rounded-lg p-4 shadow-md">
          <h3 className="font-bold text-lg mb-2">{game.name}</h3>
        </div>
      ))}
    </div>
  );
}
