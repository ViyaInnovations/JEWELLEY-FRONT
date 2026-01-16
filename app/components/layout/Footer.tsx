'use client'
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const collections = ['Rings', 'Necklaces', 'Bracelets', 'Earrings'];
  const company = ['About Us', 'Our Story', 'Careers', 'Press'];
  const support = ['Contact', 'FAQs', 'Shipping', 'Returns'];
  const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <footer className="bg-secondary text-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed mb-6 opacity-90 max-w-sm">
              Crafting timeless elegance since 1995. Every piece tells a story of passion, precision, and unparalleled beauty.
            </p>

            <div className="space-y-3">
              <a href="mailto:larixgoldkdly@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200">
                <Mail size={16} />
                <span>larixgoldkdly@gmail.com</span>
              </a>
              <a href="tel:+919645639916" className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200">
                <Phone size={16} />
                <span>+919645639916</span>
              </a>
              <p className="flex items-center gap-2 text-sm opacity-90">
                <MapPin size={16} />
                <span>25/745, Main Road, Koduvally Kozhikode, Kerala </span>
              </p>
            </div>
          </div>

          {/* Links Sections (Hidden on mobile for cleaner look as per your original code) */}
          <div className="hidden sm:block">
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">Collections</h3>
            <ul className="sm:flex-col sm:gap-2.5">
              {collections.map((item) => (
                <li key={item}><a href="#" className="text-sm opacity-90 hover:text-primary transition-all duration-200">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">Company</h3>
            <ul className="sm:flex-col sm:gap-2.5">
              {company.map((item) => (
                <li key={item}><a href="#" className="text-sm opacity-90 hover:text-primary transition-all duration-200">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">Support</h3>
            <ul className="sm:flex-col sm:gap-2.5">
              {support.map((item) => (
                <li key={item}><a href="#" className="text-sm opacity-90 hover:text-primary transition-all duration-200">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Fix: Added flex-col on mobile, flex-row on sm screens */}
        <div className="mt-12 pt-8 border-t border-secondary-light/30">
          <div className="max-w-md">
            <h3 className="text-primary font-semibold mb-2 text-sm tracking-wider uppercase">Stay Connected</h3>
            <p className="text-sm opacity-90 mb-4">Subscribe for exclusive offers and new arrivals</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-secondary-light/20 border border-secondary-light/30 rounded-lg text-sm focus:outline-none focus:border-primary transition-all duration-200"
              />
              <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-secondary font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright Fix: Added flex-wrap and justify-center/text-center for mobile */}
            <p className="text-sm opacity-75 flex flex-wrap items-center justify-center gap-1 text-center">
              <span>© {new Date().getFullYear()} Jewellery Store.</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-accent-rose fill-accent-rose" /> 
                <Link href={"https://viyainnovations.com/"} className="hover:text-primary transition-colors">
                  Viya Innovations
                </Link>
              </span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200"><Facebook size={20} /></a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200"><Instagram size={20} /></a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200"><Twitter size={20} /></a>
            </div>

            {/* Legal Links: Added justify-center for mobile */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm opacity-75">
              {legal.map((item, index) => (
                <React.Fragment key={item}>
                  <a href="#" className="hover:text-primary transition-all duration-200">{item}</a>
                  {index < legal.length - 1 && <span className="hidden sm:inline">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}