import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Plant Shop 🌿</h1>
      <p className="mb-6 text-lg max-w-md">
        Discover beautiful houseplants that bring life and freshness to your home.
      </p>
      <Link
        to="/products"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
      >
        Get Started
      </Link>
    </div>
  );
}
