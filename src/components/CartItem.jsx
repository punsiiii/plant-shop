import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow mb-2">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-green-700">₱{item.price}</p>
        <p>Qty: {item.quantity}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment(item.id))} className="bg-green-600 text-white px-2 rounded">
          +
        </button>
        <button onClick={() => dispatch(decrement(item.id))} className="bg-yellow-500 text-white px-2 rounded">
          -
        </button>
        <button onClick={() => dispatch(removeItem(item.id))} className="bg-red-600 text-white px-2 rounded">
          ✕
        </button>
      </div>
    </div>
  );
}
