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
// import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
  <>
   {/* <HomeSection/> */}


   <Hero />                 
     {/* // Eye-catching first impression */}



{/* <Category />                */}
 {/* // Allow user to filter/explore by type */}


{/* <FeaturedCollections />    */}
 {/* // Latest or premium collections */}

 
{/* <ProductGrid/> */}

{/* <Jewellery />                */}
{/* // Gold/Diamond card showcase */}

{/* <AboutSection />            */}
 {/* // Brand story, trust, team */}

{/* <Testimonials />            */}
 {/* // Social proof */}

 {/* <ContactSection/> */}
 {/* // contact section */}

   </>


 
  );
}
