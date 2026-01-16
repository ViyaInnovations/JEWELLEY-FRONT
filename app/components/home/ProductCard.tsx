import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white shadow-sm hover:ring-linear-gold transition"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-neutral-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-semibold text-neutral-900">
          {product.name}
        </h3>

        <p className="text-xs text-neutral-500">
          {product.metal.purity} {product.metal.type}
        </p>

        {/* Footer Link */}
        <div className="flex items-center justify-end pt-3">
          <span className="text-xs text-primary font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}