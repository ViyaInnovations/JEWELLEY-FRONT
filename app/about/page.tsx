import Image from "next/image";

/* ---------------- SEO METADATA ---------------- */
export const metadata = {
  title: "About Larix Gold & Diamonds | Trusted Jewellery Showroom in Kerala",
  description:
    "Larix Gold & Diamonds is a trusted jewellery showroom in Koduvally, Kerala, specialising in bridal, bespoke, and certified gold & diamond jewellery.",
  alternates: {
    canonical: "https://larix-gold-diamonds.vercel.app/about",
  },
  openGraph: {
    title: "About Larix Gold & Diamonds",
    description:
      "Discover the story, values, and craftsmanship behind Larix Gold & Diamonds – premium gold and diamond jewellery in Kerala.",
    url: "https://larix-gold-diamonds.vercel.app/about",
    images: ["/images/Necklac.jpg"],
    type: "website",
  },
};

/* ---------------- JSON-LD (Organization) ---------------- */
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "About",
    name: "Larix Gold & Diamonds",
    url: "https://larix-gold-diamonds.vercel.app",
    logo: "https://larix-gold-diamonds.vercel.app/logo.png",
    image: "https://larix-gold-diamonds.vercel.app/images/Necklac.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Koduvally",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [
      "https://wa.me/919645639916"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <OrganizationSchema />

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-12">
  {/* Heading */}
  <div className="max-w-2xl mb-8">
    <h1 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-3">
      About Larix Gold & Diamonds
    </h1>
    <p className="text-neutral-600 leading-relaxed">
      Jewellery is not just an ornament — it is a reflection of heritage,
      trust, and craftsmanship passed through generations.
    </p>
  </div>

  {/* Content Grid */}
  <div className="grid md:grid-cols-2 gap-8 items-center">
    
    {/* Image */}
    <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden bg-neutral-100">
      <Image
        src="/images/category/about.jpg"
        alt="Larix Gold & Diamonds Showroom"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Text */}
    <div className="space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
      <p>
        Based in <strong>Koduvally, Kerala</strong>, Larix Gold & Diamonds
        specialises in bridal jewellery, bespoke designs, and certified
        gold and diamond collections.
      </p>

      <p>
        With over <strong>15 years of experience</strong>, our focus has
        always been purity, transparency, and timeless design.
      </p>

      <p>
        From custom creations to personal consultations, we help customers
        celebrate life’s most meaningful moments with jewellery that lasts.
      </p>
    </div>

  </div>
</section>



      
    </>
  );
}
