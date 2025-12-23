"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEM_WIDTH = 260;
const AUTO_SLIDE_DELAY = 3000;

const categories = [
  { name: "Rings", slug: "rings", image: "/images/category/Bracelets.png" },
  { name: "Necklaces", slug: "necklaces", image: "/images/category/chains.jpg" },
  { name: "Bracelets", slug: "bracelets", image: "/images/category/Bracelets.png" },
  { name: "Gold Ring", slug: "gold-ring", image: "/images/category/Gold-Ring.jpg" },
  { name: "Nose Pins", slug: "nose-pins", image: "/images/category/Nose Pins.jpg" },
  { name: "Anklets", slug: "anklets", image: "/images/category/anklets.jpg" },
  { name: "Bangles", slug: "bangles", image: "/images/category/Bangles.jpg" },
  { name: "Necklace", slug: "necklace", image: "/images/category/Necklac.jpg" },
];

// duplicate for seamless loop
const sliderItems = [...categories, ...categories];

export default function Category() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const realLength = categories.length;

  /* AUTO SLIDE */
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [isDragging]);

  /* SILENT RESET (NO JUMP) */
  useEffect(() => {
    if (index === realLength) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);
      }, 700); // match animation duration
    }
  }, [index, realLength]);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    setIsAnimating(true);

    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -80 || velocity < -500) {
      setIndex((prev) => prev + 1);
    } else if (offset > 80 || velocity > 500) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="bg-secondary-dark text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Fine Jewellery Collections
        </h2>
        <p className="mt-4 text-gray-400">
          Discover handcrafted elegance across every category.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden pb-20">
        <motion.div
          className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -(realLength * ITEM_WIDTH), right: 0 }}
          animate={{ x: -index * ITEM_WIDTH }}
          transition={
            isAnimating
              ? { duration: 0.7, ease: "easeInOut" }
              : { duration: 0 }
          }
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {sliderItems.map((category, i) => (
            <Link
              key={i}
              href={`/shop?category=${category.slug.toUpperCase()}`}
              className="relative min-w-65 h-40 rounded-xl overflow-hidden border border-white/10 group"
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
