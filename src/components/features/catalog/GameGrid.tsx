import { Game } from "@/types/game";
import GameCard from "./GameCard";
import CatalogSkeleton from "./CatalogSkeleton";
import { memo } from "react";

type GameGridProps = {
  games: Game[];
  loading: boolean;
};

const MemoGameCard = memo(GameCard);

export default function GameGrid({ games, loading }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 md:mb-12">
      {games.map((game, index) => (
        <MemoGameCard key={game.id} game={game} index={index} />
      ))}
      {loading && <CatalogSkeleton.GameList />}
    </div>
  );
}
