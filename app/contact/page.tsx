import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Larix Gold & Diamonds | Jewellery Showroom Kerala",
  description:
    "Contact Larix Gold & Diamonds for bridal and bespoke jewellery consultations in Koduvally, Kozhikode, Kerala.",
  alternates: {
    canonical: "https://larix-gold-diamonds.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Larix Gold & Diamonds",
    description:
      "Visit or contact Larix Gold & Diamonds for premium gold and diamond jewellery.",
    url: "https://larix-gold-diamonds.vercel.app/contact",
    images: ["/images/Necklac.jpg"],
    type: "website",
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Contact",
    name: "Larix Gold & Diamonds",
    url: "https://larix-gold-diamonds.vercel.app",
    telephone: "+91 96456 39916",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25/745, Main Road",
      addressLocality: "Koduvally",
      addressRegion: "Kerala",
      postalCode: "673572",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <ContactClient />
    </>
  );
}
