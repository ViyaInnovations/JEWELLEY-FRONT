"use client";

interface Props {
  product: {
    name: string;
    description: string;
    image: string;
    slug: string;
  };
}

export default function SeoProduct({ product }: Props) {
  const title = `${product.name} | Larix-Gold-Diamonds`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={product.description} />
      <link
        rel="canonical"
        href={`https://larix-gold-diamonds.vercel.app/${product.slug}`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <meta property="og:type" content="product" />
    </>
  );
}
