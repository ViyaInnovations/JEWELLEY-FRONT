import Image from "next/image";
import HomeSection from "./components/home/HomeSection";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/AboutSection";
import Category from "./components/home/Category";
import CTASection from "./components/home/CTASection";
import FeaturedCollections from "./components/home/FeaturedCollections";
import Testimonials from "./components/home/Testimonials";
import Jewellery from "./components/home/Jewellery";

import ProductGrid from "./components/home/ProdcutGrid";
import Contact from "./contact/page";

export default function Home() {
  return (
  <>
   {/* <HomeSection/> */}


   <Hero />                 
     {/* // Eye-catching first impression */}

<FeaturedCollections />   
 {/* // Latest or premium collections */}

<Category />               
 {/* // Allow user to filter/explore by type */}

<ProductGrid/>

<Jewellery />               
{/* // Gold/Diamond card showcase */}

<AboutSection />           
 {/* // Brand story, trust, team */}

<Testimonials />           
 {/* // Social proof */}

 <Contact/>
 {/* // contact section */}

   </>


 
  );
}
