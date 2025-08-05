import Image from "next/image";
import { Game } from "@/types/game";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useCart } from "@/contexts/CartContext";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const { addToCart, removeFromCart, isInCart, isLoaded } = useCart();
  const inCart = isInCart(game.id);

  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  const buttonLabel = !isLoaded
    ? "LOADING..."
    : inCart
      ? "REMOVE"
      : "ADD TO CART";

  return (
    <Card
      className="flex flex-col"
      role="article"
      aria-labelledby={`game-${game.id}-title`}
    >
      <div className="aspect-[6/5] md:aspect-[4/3] relative mb-6">
        <Image
          src={game.image}
          alt={`${game.name} game cover art`}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <p
          className="font-bold text-neutral-500 mb-3 uppercase tracking-wide"
          aria-label={`Game genre: ${game.genre}`}
        >
          {game.genre}
        </p>

        <div className="flex justify-between gap-2 mb-5">
          <h2
            id={`game-${game.id}-title`}
            className="text-lg font-bold text-gray-medium"
          >
            {game.name}
          </h2>
          <p
            className="text-lg font-bold text-gray-medium"
            aria-label={`Price: ${game.price} dollars`}
          >
            ${game.price}
          </p>
        </div>

        <div className="mt-auto">
          <Button
            color={inCart ? "danger" : "gray-medium"}
            variant="outline"
            onClick={handleCartAction}
            className="md:w-full"
            disabled={!isLoaded}
            aria-label={
              !isLoaded
                ? "Loading game status..."
                : inCart
                  ? `Remove ${game.name} from shopping cart`
                  : `Add ${game.name} to shopping cart`
            }
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Card>
  );
}
