import { use } from "react";
import "../globals.css";
import CartIcon from "@/components/CartIcon";
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function ProductsPage() {
  const products = use(fetchProducts());
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-hover">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x400"
                  alt="Ethnic"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                  {product.name}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg text-black font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="text-lg font-semibold">
                  Rp{product.price}.000
                </span>
                <button className="bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-colors duration-300">
                  <CartIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
