// app/page.tsx
import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/AboutSection";
import Category from "./components/home/Category";
import FeaturedCollections from "./components/home/FeaturedCollections";
import Jewellery from "./components/home/Jewellery";
import ProductGrid from "./components/home/ProdcutGrid";
import ContactSection from "./components/home/ContactSection";

export const metadata: Metadata = {
  title: "Gold & Diamond Jewellery in Koduvally, Kozhikode | Larix Gold & Diamonds",
  description:
    "Buy certified gold and diamond jewellery in Koduvally, Kozhikode from Larix Gold & Diamonds. Bridal collections, custom designs, hallmarked gold, and trusted craftsmanship since 1998.",
};

export default function Home() {
  return (
    <>
      {/* H1 — MUST be only one on Home page */}
      <h1 className="sr-only">
        Gold & Diamond Jewellery in Koduvally, Kozhikode
      </h1>

      <Hero />

      <Category />

      <FeaturedCollections />

      <ProductGrid />

      <Jewellery />

      <AboutSection />

      <ContactSection />

      {/* Local Business Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: "Larix Gold & Diamonds",
            url: "https://larixgoldanddiamonds.com",
            logo: "https://larixgoldanddiamonds.com/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Koduvally",
              addressLocality: "Kozhikode",
              addressRegion: "Kerala",
              postalCode: "673572",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 09:30-20:00",
            sameAs: [
              "https://www.instagram.com/larixgold",
              "https://www.facebook.com/larixgold"
            ],
          }),
        }}
      />
    </>
  );
}
