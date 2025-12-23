import Image from "next/image";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/AboutSection";
import Category from "./components/home/Category";
import FeaturedCollections from "./components/home/FeaturedCollections";
import Jewellery from "./components/home/Jewellery";

import ProductGrid from "./components/home/ProdcutGrid";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
  <>

   <Hero />                 
<Category />               


<FeaturedCollections />   

 
{/* <ProductGrid/> */}

<Jewellery />               
{/* // Gold/Diamond card showcase */}

<AboutSection />           
 {/* // Brand story, trust, team */}


 <ContactSection/>
 {/* // contact section */}

   </>


 
  );
}
