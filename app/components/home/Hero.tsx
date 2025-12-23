"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    image: "/images/category/Chains.jpg",
    title: "Crafted to Shine",
    subtitle: "Designed to Last",
  },
  {
    image: "/images/category/Rings.jpg",
    title: "Timeless Elegance",
    subtitle: "For Every Moment",
  },
  {
    image: "/images/category/Necklace.jpg",
    title: "Luxury That Speaks",
    subtitle: "Without Words",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const paginate = (newIndex: number) => {
    if (newIndex < 0) setIndex(slides.length - 1);
    else if (newIndex >= slides.length) setIndex(0);
    else setIndex(newIndex);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden text-white">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) paginate(index + 1);
            if (info.offset.x > 80) paginate(index - 1);
          }}
        >
          {/* Background */}
          <Image
            src={slides[index].image}
            alt="Luxury Jewellery"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[90vh]">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
                Larix Jewellery
              </p>

              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                {slides[index].title}
                <br />
                {slides[index].subtitle}
              </h1>

              <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
                Discover handcrafted gold and diamond jewellery created for
                moments that deserve forever.
              </p>

              <div className="flex gap-5">
                <a
                  href="/collections"
                  className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  Explore Collection
                </a>

                <a
                  href="/contact"
                  className="px-8 py-3 border border-white/70 hover:border-white transition"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
