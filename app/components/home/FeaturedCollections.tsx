import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/product";
import productsData from "../../data/products.json";
import Link from "next/link";

export default function FeaturedCollections() {
  const products = productsData as Product[];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-3">
          Featured Collections
        </h2>

        <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto">
          Handpicked jewellery crafted with precision, purity, and timeless design.
        </p>
      </div>

      {/* SAME GRID AS ProductGrid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-12">
        <Link
          href="/collections"
          className="inline-block px-8 py-3 border border-neutral-300 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}
