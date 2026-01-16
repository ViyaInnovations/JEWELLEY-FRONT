"use client";

import Head from "next/head";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import products from "../../data/products.json";
import { Product } from "../../types/product";
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

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = (products as Product[]).find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!product) notFound();

  const currentImage = selectedImage || product.images[0];

  // --- WhatsApp Inquiry Logic ---
  const handleWhatsAppEnquiry = () => {
    const phoneNumber = "919645639916";
    const message = `Hello Larix Gold & Diamonds, I am interested in the following product:\n\n` +
                    `*Product:* ${product.name}\n` +
                    `*Category:* ${product.category}\n` +
                    `*Metal:* ${product.metal.purity} ${product.metal.type}\n` +
                    `*Weight:* ${product.metal.weight}g\n\n` +
                    `Please provide more details regarding the price.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: { "@type": "Brand", name: "Larix Gold & Diamonds" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `https://larix-gold-diamonds.vercel.app/products/${product.slug}`,
    },
  };

  return (
    <>
      <Head>
        <title>{`${product.name} | Larix Gold & Diamonds`}</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Gallery */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden ring-rose-200 ring-1 shadow-sm">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                priority
                className="object-cover transition-opacity duration-300"
              />
            </div>

            {/* Thumbnail Grid */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-xl overflow-hidden bg-neutral-100 ring-2 transition-all ${
                      currentImage === img 
                        ? "ring-rose-200 shadow-md" 
                        : "ring-transparent hover:ring-rose-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} angle ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Details */}
          <div className="lg:col-span-7 space-y-8 lg:pl-8">
            <div>
              <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm text-neutral-500 mt-2 uppercase tracking-wider">
                {product.category} Collection
              </p>
            </div>

            {product.shortDescription && (
              <p className="text-neutral-600 leading-relaxed text-lg">
                {product.shortDescription}
              </p>
            )}

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-neutral-100 py-6">
              <InfoItem
                icon={<Gem size={20} />}
                label="Metal Type"
                value={`${product.metal.purity} ${product.metal.type}`}
              />
              <InfoItem
                icon={<Ruler size={20} />}
                label="Approx. Weight"
                value={`${product.metal.weight} g`}
              />
              {product.metal.finish && (
                <InfoItem
                  icon={<Palette size={20} />}
                  label="Polish Finish"
                  value={product.metal.finish}
                />
              )}
              <InfoItem
                icon={<ShieldCheck size={20} />}
                label="Certification"
                value={product.certified ? "BIS Hallmarked" : "Standard"}
              />
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button 
                onClick={handleWhatsAppEnquiry}
                className="w-full md:w-3/5 rounded-xl bg-neutral-900 px-8 py-4 text-sm font-bold text-white hover:bg-neutral-800 transition-all active:scale-95 shadow-lg shadow-neutral-200"
              >
                Enquire for Price
              </button>
              
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-4">
                <BadgeCheck size={16} className="text-emerald-600" />
                Authenticity Guaranteed & Secure Packaging
              </div>
            </div>
          </div>
        </div>

        {product.description && (
          <div className="mt-20 max-w-4xl">
            <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b pb-2">
              The Craftsmanship
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>
        )}
      </section>
    </>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-neutral-400 mt-0.5">{icon}</div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">{label}</p>
        <p className="font-medium text-neutral-900">{value}</p>
      </div>
    </div>
  );
}