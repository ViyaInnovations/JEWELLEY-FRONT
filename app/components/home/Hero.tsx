"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[rgb(148,70,70)] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/category/Chains.jpg" // replace with your image
          alt="Luxury Jewellery"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
            Larix Jewellery
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Crafted to Shine <br />
            Designed to Last
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
            Discover handcrafted gold and diamond jewellery made for moments
            that deserve forever. Precision, purity, and elegance — nothing
            less.
          </p>

          <div className="flex gap-5">
            <a
              href="/collections"
              className="px-8 py-3 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition"
            >
              Explore Collection
            </a>

            <a
              href="/contact"
              className="px-8 py-3 border border-white/60 hover:border-white transition"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
