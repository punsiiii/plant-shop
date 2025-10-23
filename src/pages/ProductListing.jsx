import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Aloe Vera", price: 199, image: "/plants/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 249, image: "/plants/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 299, image: "/plants/peace.jpg" },
  { id: 4, name: "Spider Plant", price: 179, image: "/plants/spider.jpg" },
  { id: 5, name: "Monstera", price: 399, image: "/plants/monstera.jpg" },
  { id: 6, name: "Succulent", price: 149, image: "/plants/succulent.jpg" },
];

export default function ProductListing() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Plants 🌱</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
