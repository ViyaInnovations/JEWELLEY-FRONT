import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-accent-pearl overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="text-accent-gold" size={16} />
              <span className="text-sm font-medium text-secondary">Our Legacy</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              Crafting Dreams Into{' '}
              <span className="text-primary">Timeless Treasures</span>
            </h2>

            <div className="space-y-4 text-secondary-light">
              <p className="text-lg leading-relaxed">
                For over 25 years, Larix Gold and Diamonds has been the heart of Kozhikode's jewelry heritage. What began as a small family workshop in Koduvally has blossomed into a trusted name synonymous with excellence and artistry.
              </p>
              
              <p className="leading-relaxed">
                Every piece we create tells a story—your story. From traditional Kerala designs to contemporary masterpieces, our skilled artisans pour decades of expertise into crafting jewelry that becomes part of your family's legacy.
              </p>

              <p className="leading-relaxed">
                We believe in the transformative power of fine jewelry. Each gemstone is hand-selected, every curve is meticulously shaped, and all pieces are certified to the highest standards of purity and craftsmanship.
              </p>
            </div>

            <Link href={'/story'} className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary-light font-semibold rounded-lg hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-4">
              Read Our Story
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>

            {/* Mini stats */}
            <div className="flex gap-8 pt-6 border-t border-secondary/10">
              <div>
                <p className="text-2xl font-bold text-accent-gold">15+</p>
                <p className="text-sm text-secondary-light">Years Legacy</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-gold">10K+</p>
                <p className="text-sm text-secondary-light">Happy Families</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-gold">100%</p>
                <p className="text-sm text-secondary-light">Certified</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute -inset-4 bg-linear-to-br from-accent-gold/20 via-primary/20 to-accent-rose/20 rounded-3xl blur-2xl" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image container with matching background */}
              <div className="relative aspect-4/5 bg-linear-to-br from-primary-light via-accent-pearl to-primary/30">
                <Image
                  src="/about-jewelry.jpg"
                  alt="Larix Gold craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-secondary/95 backdrop-blur-sm p-6 rounded-xl border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">BIS Hallmark Certified</h4>
                    <p className="text-sm text-primary-light/80">Every piece meets international quality standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-accent-gold/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-primary/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}