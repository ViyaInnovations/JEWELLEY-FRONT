"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AUTO_SLIDE_DELAY = 5000;

const slides = [
  {
    image: "/images/category/Chains.jpg",
    title: "Crafted to Shine",
    subtitle: "Designed to Last",
  },
  {
    image: "/images/category/Gold-Ring.jpg",
    title: "Timeless Elegance",
    subtitle: "For Every Moment",
  },
  {
    image: "/images/category/Necklac.jpg",
    title: "Luxury That Speaks",
    subtitle: "Without Words",
  },
  {
    image: "/images/category/Nose Pins.jpg",
    title: "Pure Beauty",
    subtitle: "Perfectly You",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const paginate = (newIndex: number) => {
    if (newIndex < 0) setIndex(slides.length - 1);
    else if (newIndex >= slides.length) setIndex(0);
    else setIndex(newIndex);
  };

  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      paginate(index + 1);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [index, isDragging]);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden text-white">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setIsDragging(false);
            if (info.offset.x < -80) paginate(index + 1);
            if (info.offset.x > 80) paginate(index - 1);
          }}
        >
          {/* Background Image */}
          <Image
            src={slides[index].image}
            alt="Luxury Jewellery"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center h-[70vh]">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-300 mb-3">
                Larix Gold & Diamonds
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-5">
                {slides[index].title}
                <br />
                {slides[index].subtitle}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                Discover handcrafted gold and diamond jewellery created for
                moments that deserve forever.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#category"
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
