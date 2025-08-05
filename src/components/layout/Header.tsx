import { areaNormal } from "@/app/fonts";
import CartIcon from "../icons/CartIcon";

export default function Header() {
  return (
    <header className="bg-surface-secondary px-6">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <h1 className={`${areaNormal.className} text-2xl text-primary`}>
          GamerShop
        </h1>
        <CartIcon className="text-primary" />
      </div>
    </header>
  );
}
