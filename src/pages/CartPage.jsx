import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Cart 🛒</h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div>{items.map(item => <CartItem key={item.id} item={item} />)}</div>
          <p className="text-right font-semibold text-lg mt-4">
            Total: ₱{total}
          </p>
          <button className="bg-green-700 text-white px-4 py-2 mt-2 rounded hover:bg-green-800">
            Checkout (Coming Soon)
          </button>
        </>
      )}
      <div className="text-center mt-4">
        <Link to="/products" className="text-green-700 underline hover:text-green-800">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
