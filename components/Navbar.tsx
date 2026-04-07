"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className={`w-full relative z-50 bg-[#fdf8f1]`}>
      <div className={`flex justify-between items-center px-6 md:px-10 py-3 md:py-4 max-w-7xl mx-auto ${isDark ? "text-white" : "text-gray-900"}`}>
        <div className="flex items-center gap-3">
          <Link href="/" className="relative z-50">
            <Image 
              src="/logo_bg_remove.png" 
              alt="Eavetop Logo" 
              width={120} 
              height={48} 
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-10 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          <Link href="/about" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>About us</Link>
          <Link href="/careers" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Careers</Link>
          <Link href="/contact" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Contact us</Link>
          <Link href="/services" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Services</Link>
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className={`hidden md:block border ${isDark ? "border-white/20 hover:bg-white hover:text-black" : "border-black/10 hover:bg-black hover:text-white"} px-8 py-2.5 rounded-full transition text-sm font-medium`}>
          Get in touch →
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#022c22] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bdf46d] transition">Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bdf46d] transition">About us</Link>
          <Link href="/careers" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bdf46d] transition">Careers</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bdf46d] transition">Contact us</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bdf46d] transition">Services</Link>
        </div>
        
        <Link 
          href="/contact" 
          onClick={() => setIsMenuOpen(false)}
          className="mt-8 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-bold shadow-lg"
        >
          Get in touch →
        </Link>
      </div>
    </nav>
  );
}
