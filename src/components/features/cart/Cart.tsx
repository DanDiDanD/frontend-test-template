export default function Cart() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20">
      <div className="w-full md:w-4/7">
        <h3>Cart Item List</h3>
      </div>
      <div className="w-full md:w-3/7">
        <h3>Order Summary</h3>
      </div>
    </div>
  );
}
