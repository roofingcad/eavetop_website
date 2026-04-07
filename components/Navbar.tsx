"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <nav className={`w-full flex justify-between items-center px-10 py-6 relative z-50 max-w-7xl mx-auto ${isDark ? "text-white" : "text-gray-900"}`}>
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image 
            src="/eavetop_logo.jpg" 
            alt="Eavetop Logo" 
            width={120} 
            height={48} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      <div className={`flex gap-10 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        <Link href="/about" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>About us</Link>
        <Link href="/careers" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Careers</Link>
        <Link href="/contact" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Contact us</Link>
        <Link href="/services" className={`hover:${isDark ? "text-white" : "text-black"} transition`}>Services</Link>
      </div>

      <Link href="/contact" className={`border ${isDark ? "border-white/20 hover:bg-white hover:text-black" : "border-black/10 hover:bg-black hover:text-white"} px-8 py-2.5 rounded-full transition text-sm font-medium`}>
        Get in touch →
      </Link>
    </nav>
  );
}
