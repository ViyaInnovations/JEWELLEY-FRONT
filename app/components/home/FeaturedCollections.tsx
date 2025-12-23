import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import productsData from '../../data/products.json';

export default function FeaturedCollections() {
  const products = productsData as Product[];

  return (
    <section className="py-16 px-4 md:px-8 bg-linear-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading with Diamond Accent */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            Featured Collections
          </h2>
          
          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-linear-gold" />
            <div className="w-3 h-3 rotate-45 bg-linear-gold shadow-md" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-linear-gold" />
          </div>
          
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our handpicked collection of exquisite jewelry crafted with precision and love
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300 font-medium shadow-lg hover:shadow-xl">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}