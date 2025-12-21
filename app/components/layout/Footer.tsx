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
      {/* Main Footer */}
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

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:Larixgoldkdly@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200">
                <Mail size={16} />
                <span>Larixgoldkdly@gmail.com</span>
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

          {/* Collections */}
          <div className="hidden sm:block">

            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">
              Collections
            </h3>

            <ul className="flex flex-row flex-wrap gap-4 sm:flex-col sm:gap-2.5">
              {collections.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Company */}
          <div className="hidden sm:block">

            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">Company</h3>
            <ul className="flex flex-row flex-wrap gap-4 sm:flex-col sm:gap-2.5">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-all duration-200 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="hidden sm:block">

            <h3 className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">Support</h3>
            <ul className="flex flex-row flex-wrap gap-4 sm:flex-col sm:gap-2.5">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm opacity-90 hover:text-primary hover:opacity-100 transition-all duration-200 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-secondary-light/30">
          <div className="max-w-md">
            <h3 className="text-primary font-semibold mb-2 text-sm tracking-wider uppercase">Stay Connected</h3>
            <p className="text-sm opacity-90 mb-4">Subscribe for exclusive offers and new arrivals</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-secondary-light/20 border border-secondary-light/30 rounded-lg text-sm focus:outline-none focus:border-primary focus:bg-secondary-light/30 transition-all duration-200 placeholder:text-primary-light/50"
              />
              <button className="px-6 py-2.5 bg-primary text-secondary font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar fixed */}
      <div className="border-t border-secondary-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm opacity-75 flex items-center gap-1">
              © {new Date().getFullYear()} jewellery Store. Made with <Heart size={14} className="text-accent-rose fill-accent-rose" /> 
              <Link href={"https://viyainnovations.com/"}>
              Viya Innovations</Link>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-light hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm opacity-75">
              {legal.map((item, index) => (
                <React.Fragment key={item}>
                  <a href="#" className="hover:text-primary hover:opacity-100 transition-all duration-200">
                    {item}
                  </a>
                  {index < legal.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}