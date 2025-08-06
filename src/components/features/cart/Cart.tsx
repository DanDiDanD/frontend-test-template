import Button from "@/components/ui/Button";
import OrderSummary from "./OrderSummary";
import CartGameList from "./CartGameList";

export default function Cart() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="w-full md:w-4/7">
        <CartGameList />
      </div>
      <div className="w-full md:w-3/7">
        <OrderSummary />
        <Button className="md:w-full" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );
}
