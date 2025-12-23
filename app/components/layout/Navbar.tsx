'use client'
import React, { useState } from 'react';
import { Menu, X, Search, Heart, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'New Arrivals', href: '#new' },
    { name: 'About', href: '#about' },
    // { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="shrink-0">
            <img
  src="/logo.png"
  alt="Larix Gold & Diamonds"
  className="h-12 md:h-16 w-auto object-contain"
/>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-secondary hover:text-primary transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-secondary hover:text-primary transition-colors duration-200 relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-secondary text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                2
              </span>
            </button>
            <button className="text-secondary hover:text-primary transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-secondary text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                3
              </span>
            </button>
            <button className="text-secondary hover:text-primary transition-colors duration-200">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-secondary">
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-secondary hover:text-primary hover:bg-accent-pearl rounded-lg px-3 transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-3 border-t border-neutral-200">
              <button className="flex-1 py-2 text-secondary hover:bg-accent-pearl rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                <Search size={18} />
                <span className="text-sm font-medium">Search</span>
              </button>
              <button className="flex-1 py-2 text-secondary hover:bg-accent-pearl rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                <Heart size={18} />
                <span className="text-sm font-medium">Wishlist</span>
              </button>
              <button className="flex-1 py-2 text-secondary hover:bg-accent-pearl rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                <User size={18} />
                <span className="text-sm font-medium">Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}