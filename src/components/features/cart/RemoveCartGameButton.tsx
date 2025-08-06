"use client";

import CloseIcon from "@/components/icons/CloseIcon";
import Button from "@/components/ui/Button";
import { useCart } from "@/contexts/CartContext";
import { Game } from "@/types/game";

type RemoveCartGameButtonProps = { game: Game };

export default function RemoveCartGameButton({
  game,
}: RemoveCartGameButtonProps) {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(game.id);
  };

  return (
    <Button
      color="icon-primary"
      variant="ghost"
      className="!p-0 text-icon-primary border-none hover:bg-red-50"
      aria-label={`Remove ${game.name} from cart`}
      onClick={handleRemove}
    >
      <CloseIcon />
    </Button>
  );
}
