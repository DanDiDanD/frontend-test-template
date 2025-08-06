import { Game } from "@/types/game";
import Card from "@/components/ui/Card";
import Image from "next/image";
import RemoveCartGameButton from "./RemoveCartGameButton";

type CartItemProps = {
  game: Game;
};

export default function CartGame({ game }: CartItemProps) {
  return (
    <Card
      className="flex flex-col md:flex-row md:items-center rounded-none !px-4 !py-5 border-0 border-b border-gray-light last:border-b-0"
      role="article"
      aria-labelledby={`game-${game.id}-name`}
    >
      <div className="md:hidden">
        <div className="flex mb-4 justify-between gap-4">
          <div className="relative flex-1 aspect-[16/9] flex-shrink-0">
            <Image
              src={game.image}
              alt={`${game.name} game cover art mobile view`}
              fill
              className="object-cover"
              sizes="259px"
            />
          </div>
          <div className="flex-shrink-0">
            <RemoveCartGameButton game={game} />
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-sm leading-4 font-bold text-neutral-500 uppercase tracking-wide mb-3">
            {game.genre}
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <h3
                id={`game-${game.id}-name`}
                className="text-lg leading-5 font-bold text-gray-medium"
              >
                {game.name}
              </h3>
              {game.isNew && (
                <span
                  className="text-xs font-bold text-green-600 uppercase bg-green-100 px-2 py-1 rounded"
                  aria-label="New game"
                >
                  New
                </span>
              )}
            </div>
            <p className="text-neutral-500 leading-5">{game.description}</p>
          </div>
          <div className="text-right mt-5">
            <span
              className="text-lg font-bold text-gray-medium leading-5"
              aria-label={`Price: $${game.price.toFixed(0)}`}
            >
              ${game.price.toFixed(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-full md:gap-6">
        <div className="relative aspect-[16/9] w-40 lg:w-64 flex-shrink-0">
          <Image
            src={game.image}
            alt={`${game.name} game cover art desktop view`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 256px, 192px"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <p className="leading-4 font-bold text-neutral-500 uppercase tracking-wide mb-3">
            {game.genre}
          </p>
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-3">
              <h3 className="text-xl leading-6 font-bold text-gray-medium">
                {game.name}
              </h3>
              {game.isNew && (
                <span
                  className="text-xs font-bold text-green-600 uppercase bg-green-100 px-2 py-1 rounded"
                  aria-label="New game"
                >
                  New
                </span>
              )}
            </div>
            <p className="text-neutral-500 leading-5">{game.description}</p>
          </div>
          <div className="text-right mt-4">
            <span
              className="text-xl font-bold text-gray-medium leading-6"
              aria-label={`Price: $${game.price.toFixed(0)}`}
            >
              ${game.price.toFixed(0)}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <RemoveCartGameButton game={game} />
        </div>
      </div>
    </Card>
  );
}
