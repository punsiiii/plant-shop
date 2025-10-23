import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="flex justify-between items-center p-4 bg-green-700 text-white rounded-b-lg">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        🌿 Plant Shop
      </Link>
      <Link
        to="/cart"
        className="flex items-center gap-2 bg-green-900 px-3 py-1 rounded-lg"
      >
        <ShoppingCart className="w-5 h-5" />
        Cart ({totalItems})
      </Link>
    </header>
  );
}
