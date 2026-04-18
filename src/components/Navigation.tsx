"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Kiten' },
    { href: '/our_hotel', label: 'Our Hotel' },
    { href: '/prices', label: 'Prices' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contacts', label: 'Contacts' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 shadow-xl">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 hidden md:block">
        <ul className="flex items-center justify-between h-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-white font-medium tracking-wide py-2 px-3 transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300 uppercase text-sm tracking-wider"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 top-4 text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} pt-12 pb-4`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-white font-medium py-3 px-4 hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="px-4 pt-2">
            <Link
              href="/booking"
              className="block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
