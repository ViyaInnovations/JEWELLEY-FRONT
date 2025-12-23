import React from 'react';
import Image from 'next/image';

export default function Jewellery() {
  return (
    <section className="">
      <div className="mx-auto space-y-0">
        
        {/* Gold Jewellery */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-linear-to-br from-amber-50 to-yellow-200 px-4 md:px-12 py-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-2">
                Gold Jewellery
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-accent-gold to-[#aa8c2c]" />
            </div>
            
            <p className="text-neutral-700 leading-relaxed">
              Timeless elegance crafted in pure gold. Each piece tells a story of tradition 
              meeting modern artistry, designed to elevate every moment—from grand celebrations 
              to cherished everyday memories.
            </p>
            
            <button className="px-6 py-3 bg-[#2f2f2f] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 font-medium shadow-lg">
              Explore Collection
            </button>
          </div>
          
          <div className="relative h-100 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/jewellery/gold.png"
              alt="Gold Jewellery Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Diamond Jewellery - Reversed Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-linear-to-br from-slate-200 to-blue-50 px-4 md:px-12 py-16">
          <div className="relative h-100 md:h-125 rounded-2xl overflow-hidden shadow-2xl md:order-first">
            <Image
              src="/images/jewellery/diamond.jpg"
              alt="Diamond Jewellery Collection"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-2">
                Diamond Jewellery
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-[#b9f2ff] to-[#1e90ff]" />
            </div>
            
            <p className="text-neutral-700 leading-relaxed">
              Brilliance that captures light and hearts. Our diamond collection features 
              meticulously selected stones set in exquisite designs, perfect for life's 
              most precious moments and eternal celebrations.
            </p>
            
            <button className="px-6 py-3 bg-[#2f2f2f] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 font-medium shadow-lg">
              Explore Collection
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}