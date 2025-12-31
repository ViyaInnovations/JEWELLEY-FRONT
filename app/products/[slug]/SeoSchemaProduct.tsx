"use client";

type ProductSchemaProps = {
  product: {
    name: string;
    image: string;
    description: string;
    price: number | string;
  };
};

export default function SeoSchema({ product }: ProductSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Ziya Jewels"
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: typeof window !== "undefined" ? window.location.href : ""
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
