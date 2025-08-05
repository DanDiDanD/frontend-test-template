import { areaNormal } from "@/app/fonts";
import CartIcon from "../icons/CartIcon";

export default function Header() {
  return (
    <header className="bg-surface-secondary px-6" role="banner">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div
          className={`${areaNormal.className} text-2xl text-primary font-bold`}
          role="img"
          aria-label="GamerShop - Gaming store logo"
        >
          GamerShop
        </div>
        <button
          className="text-primary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="View shopping cart"
          type="button"
        >
          <CartIcon className="text-primary" />
        </button>
      </div>
    </header>
  );
}
