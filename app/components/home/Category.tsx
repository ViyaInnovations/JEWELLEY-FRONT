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
  { name: "Gold Ring", slug: "gold-ring", image: "/images/category/Gold-Ring.jpg" },
  { name: "Nose Pins", slug: "nose-pins", image: "/images/category/Nose Pins.jpg" },
  { name: "Anklets", slug: "anklets", image: "/images/category/anklets.jpg" },
  { name: "Bangles", slug: "bangles", image: "/images/category/Bangles.jpg" },
  // { name: "Earrings", slug: "earrings", image: "/images/category/Earrings.jpg" },
  { name: "Necklace", slug: "necklace", image: "/images/category/Necklac.jpg" },
];

const sliderItems = [...categories, ...categories];

export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // RESET LOOP
  useEffect(() => {
    if (currentIndex === categories.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 800);
    }

    if (currentIndex < 0) {
      setIsAnimating(false);
      setCurrentIndex(categories.length - 1);
    }
  }, [currentIndex]);

  // NEXT
  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // PREV
  const handlePrev = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="relative bg-secondary-dark text-white overflow-hidden">
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
        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 p-3 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 p-3 rounded-full"
        >
          ›
        </button>

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
              href={`/shop?category=${category.slug.toUpperCase()}`}
              className="relative min-w-60 h-40 rounded-xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

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
