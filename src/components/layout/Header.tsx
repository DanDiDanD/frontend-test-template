import { areaNormal } from "@/app/fonts";
import CartButton from "../navigation/CartButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface-secondary px-6" role="banner">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`${areaNormal.className} text-2xl text-primary font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded`}
          aria-label="GamerShop - Go to home page"
        >
          GamerShop
        </Link>
        <CartButton />
      </div>
    </header>
  );
}
