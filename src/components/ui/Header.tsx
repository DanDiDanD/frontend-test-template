import CartIcon from "../icons/CartIcon";

export default function Header() {
  return (
    <header className="bg-surface-secondary py-5 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-header">GamerShop</h1>
        <CartIcon className="text-header" />
      </div>
    </header>
  );
}
