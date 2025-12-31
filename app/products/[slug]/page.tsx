"use client"
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "../../data/products.json";
import { Product } from "../../types/product";
import SeoProduct from "./SeoProduct";
import SeoSchema from "./SeoSchemaProduct";
import {
  ShieldCheck,
  Ruler,
  Gem,
  Palette,
  BadgeCheck,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  
  const product = (products as Product[]).find(
    (p) => p.slug === slug
  );

  if (!product) notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
       {/* ✅ SEO Schema */}
       <SeoProduct product={product} />
      <SeoSchema product={products} />
      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT: Images */}
        <div className="grid gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-100"
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-neutral-900">
              {product.name}
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              {product.category} Jewellery
            </p>
          </div>

          {/* Price */}
          <div className="text-2xl font-medium text-secondary">
            {product.price
              ? `₹${product.price.toLocaleString()}`
              : "Price on Request"}
          </div>

          {/* Short Description */}
          {product.shortDescription && (
            <p className="text-neutral-600 leading-relaxed">
              {product.shortDescription}
            </p>
          )}

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <InfoItem
              icon={<Gem size={18} />}
              label="Metal"
              value={`${product.metal.purity} ${product.metal.type}`}
            />
            <InfoItem
              icon={<Ruler size={18} />}
              label="Weight"
              value={`${product.metal.weight} g`}
            />
            {product.metal.finish && (
              <InfoItem
                icon={<Palette size={18} />}
                label="Finish"
                value={product.metal.finish}
              />
            )}
            {product.certified && (
              <InfoItem
                icon={<ShieldCheck size={18} />}
                label="Certified"
                value="Yes"
              />
            )}
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-primary-dark transition">
              Enquire Now
            </button>
            <button className="flex-1 rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-100 transition">
              Book Consultation
            </button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2">
            <BadgeCheck size={16} className="text-success" />
            BIS Hallmark & Quality Assured
          </div>
        </div>
      </div>

      {/* Description */}
      {product.description && (
        <div className="mt-16 max-w-3xl">
          <h2 className="text-xl font-semibold text-neutral-900 mb-3">
            Product Details
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            {product.description}
          </p>
        </div>
      )}
    </section>
  );
}

/* ---------------- Small Helper Component ---------------- */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-secondary">{icon}</div>
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="font-medium text-neutral-800">{value}</p>
      </div>
    </div>
  );
}