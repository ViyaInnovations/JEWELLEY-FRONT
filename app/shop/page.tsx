"use client";

import { useSearchParams } from "next/navigation";
import products from "../data/products.json";
import ProductCard from "../components/home/ProductCard";
import type { Product } from "../types/product";

export default function page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  console.log( category)

  const filteredProducts = category
    ? (products as Product[]).filter(
        (product) => product.category === category
      )
    : (products as Product[]);
 console.log ('filered products', filteredProducts)
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
