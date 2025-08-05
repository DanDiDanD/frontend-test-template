import { Game } from "@/types/game";
import GameCard from "./GameCard";

type GameGridProps = {
  games: Game[];
};

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
