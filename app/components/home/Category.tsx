"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEM_WIDTH = 260;

const categories = [
  { name: "Rings", slug: "rings", image: "/images/category/Bracelets.png" },
  { name: "Necklaces", slug: "necklaces", image: "/images/category/chains.jpg" },
  { name: "Bracelets", slug: "bracelets", image: "/images/category/Bracelets.png" },
  { name: "Gold Ring", slug: "earrings", image: "/images/category/Gold-Ring.jpg" },
  { name: "Nose Pins", slug: "nose-pins", image: "/images/category/Nose Pins.jpg" },
  { name: "Anklets", slug: "anklets", image: "/images/category/anklets.jpg" },
   { name: "Bangles", slug: "earrings", image: "/images/category/Bangles.jpg" },
  { name: "Earrings", slug: "nose-pins", image: "/images/category/Nose Pins.jpg" },
  { name: "Necklac", slug: "anklets", image: "/images/category/Necklac.jpg" },
];

// duplicate for infinite loop
const sliderItems = [...categories, ...categories];

export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsAnimating(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // reset index silently when reaching midpoint
  useEffect(() => {
    if (currentIndex === categories.length) {
      // wait for animation to finish
      setTimeout(() => {
        setIsAnimating(false); // disable animation
        setCurrentIndex(0);    // jump back silently
      }, 800); // must match animation duration
    }
  }, [currentIndex]);

  return (
    <section className="relative bg-[var(--color-secondary-dark)] text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
          Fine Jewellery Collections
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Discover handcrafted elegance across every category.
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden pb-20">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: -currentIndex * ITEM_WIDTH }}
          transition={
            isAnimating
              ? { duration: 0.8, ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          {sliderItems.map((category, index) => (
            <Link
              key={index}
              href={`/products?category=${category.slug}`}
              className="relative min-w-[240px] h-40 rounded-xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* Text */}
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <span className="text-sm uppercase tracking-wider">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
