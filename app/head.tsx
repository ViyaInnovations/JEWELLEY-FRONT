import { SEO } from "./utils/seo.confing";

export default function Head() {
  return (
    <>
      <title>{SEO.defaultTitle}</title>
      <meta name="description" content={SEO.description} />
      <link rel="canonical" href={SEO.canonical} />

    
      <meta property="og:title" content={SEO.defaultTitle} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:url" content={SEO.canonical} />
      <meta property="og:type" content="website" />
    </>
  );
}
