"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const galleryImages = [
    { label: "Solar Energy", color: "bg-blue-100" },
    { label: "Nature & Water", color: "bg-green-100" },
    { label: "Wind Power", color: "bg-gray-100" },
    { label: "Clean Tech", color: "bg-slate-100" },
    { label: "Ocean Waves", color: "bg-cyan-100" },
    { label: "Modern Home", color: "bg-emerald-100" },
  ];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Navbar with light theme */}
      <Navbar theme="light" />

      {/* Hero Section - Centered About Us */}
      <section className="mt-20 px-6 max-w-4xl text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 tracking-tight">About us</h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">
          At Eavetop, we&apos;re committed to a sustainable future. As a pioneering
          force in the green energy sector, we&apos;ve been at the forefront of the
          transition to clean, renewable power sources. Our mission is simple yet
          profound: to create a world where energy is not only abundant but also
          environmentally responsible. We believe that by harnessing the power of
          nature, we can power the world and protect it simultaneously.
        </p>
        <button className="border border-black/20 px-10 py-3 rounded-full hover:bg-black hover:text-white transition text-xs font-semibold tracking-wider">
          Read more
        </button>
      </section>

      {/* Split About Us Section */}
      <section className="mt-40 w-full max-w-7xl px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <h2 className="text-7xl font-bold tracking-tighter leading-[0.9]">
          About us
        </h2>
        <div className="flex flex-col items-start gap-8">
          <p className="text-gray-900 text-sm leading-relaxed font-medium">
            At Eavetop, we&apos;re committed to a sustainable future. 
            As a pioneering force in the green energy sector, we&apos;ve 
            been at the forefront of the transition to clean, 
            renewable power sources. Our mission is simple yet 
            profound: to create a world where energy is not only 
            abundant but also environmentally responsible. We 
            believe that by harnessing the power of nature, we can 
            power the world and protect it simultaneously.
          </p>
          <button className="bg-[#bdf46d] text-[#022c22] px-10 py-3.5 rounded-full font-bold text-xs hover:bg-[#a9e25d] transition shadow-lg shadow-green-900/10 uppercase tracking-widest">
            Read more
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mt-32 w-full px-6 mb-40">
        <div className="max-w-[1400px] mx-auto overflow-x-auto pb-10 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className={`w-[400px] aspect-[4/5] ${img.color} rounded-[2.5rem] flex items-center justify-center text-black/10 font-bold text-2xl uppercase tracking-tighter transition-transform hover:scale-[1.02] cursor-pointer`}
              >
                {img.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
