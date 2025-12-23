import products from "../data/products.json";
import ProductCard from "../components/home/ProductCard";
import type { Product } from "../types/product";

// 🚨 Tell Next.js this page is dynamic (required for searchParams)
export const dynamic = "force-dynamic";

type PageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ShopPage({ searchParams }: PageProps) {
  const category = searchParams?.category;

  const filteredProducts: Product[] = category
    ? (products as Product[]).filter(
        (product) => product.category === category
      )
    : (products as Product[]);

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
