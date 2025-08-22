import CartItems from "../Components/CartItems";
import useCart from "../useHooks/useCart";

export default function Cart() {
  const { cart, subtotal, clearCart } = useCart();

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <CartItems key={item.id} item={item} serial={i} />
            ))}
          </tbody>
        </table>
        <h1 className="text-center text-5xl m-10">Sub Total: {subtotal}</h1>
        {subtotal > 0 && (
          <div className="flex items-center justify-center">
            <button
              className="btn btn-outline btn-secondary px-5 py-5 text-2xl"
              onClick={() => {
                clearCart();
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
