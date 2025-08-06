import OrderSummary from "./OrderSummary";
import CartGameList from "./CartGameList";
import ItemCounts from "./ItemCounts";

export default function Cart() {
  return (
    <>
      <ItemCounts />
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <CartGameList />
        <OrderSummary />
      </div>
    </>
  );
}
