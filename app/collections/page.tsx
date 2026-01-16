"use client";

import { useState } from "react";
import productsData from "../data/products.json";
import { Product, category } from "../types/product";
import ProductCard from "../components/home/ProductCard";

export default function CollectionsPage() {
  const allProducts = productsData as Product[];
  
  // State for filtering categories
  const [activeCategory, setActiveCategory] = useState<category | "All">("All");

  // Filter logic
  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // List of categories for the filter buttons
  const categories: (category | "All")[] = [
    "All", "Ring", "Necklace", "Earring", "Bangle", "Bracelet", "Pendant"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="bg-neutral-50 border-b border-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
            Our Collections
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Discover our curated selection of fine gold and diamond jewellery, 
            each piece telling a story of heritage and craftsmanship.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            Showing <span className="font-semibold text-neutral-900">{filteredProducts.length}</span> products
          </p>
          <div className="h-px bg-neutral-100 flex-grow ml-4"></div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg italic">
              No products found in the "{activeCategory}" category.
            </p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-neutral-900 font-semibold underline"
            >
              View all collections
            </button>
          </div>
        )}
      </section>
    </main>
  );
}