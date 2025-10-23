import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const inCart = items.find(i => i.id === product.id);

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-md" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-green-700 font-medium mb-2">₱{product.price}</p>
      <button
        disabled={!!inCart}
        onClick={() => dispatch(addToCart(product))}
        className={`px-4 py-2 rounded-md ${
          inCart
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
