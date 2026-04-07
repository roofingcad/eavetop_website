"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is green energy?",
      answer: "Green energy is energy that comes from renewable, non-polluting sources such as solar, wind, and water."
    },
    {
      question: "How does green energy benefit the environment?",
      answer: "It reduces carbon emissions, decreases reliance on fossil fuels, and helps mitigate climate change."
    },
    {
      question: "What green energy solutions does your company offer?",
      answer: "We offer EV charging stations, solar panel installations, wind energy systems, and hydropower solutions."
    },
    {
      question: "What support services do you offer after installing green energy solutions?",
      answer: "We provide 24/7 monitoring, maintenance, and technical support to ensure your systems run efficiently."
    },
    {
      question: "How do solar panels work?",
      answer: "Solar panels convert sunlight into electricity using photovoltaic cells, which create an electric field."
    }
  ];

  return (
    <main className="min-h-screen bg-[#022c22] text-white relative overflow-hidden flex flex-col items-center">

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15),transparent_40%)]"></div>

      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: 'url("/transparent.jpg")' }}
      ></div>

      <Navbar theme="dark" />


      {/* Hero Section */}
       <section className="flex flex-col items-center justify-center text-center mt-16 relative z-10 px-6 pb-32">
        <h1 className="text-8xl font-semibold leading-tight tracking-tight">
          Energizing a <br />
          Green Future
        </h1>

        <p className="text-gray-400 max-w-2xl mt-8 text-lg leading-8">
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet. Join us on a journey towards a future where clean,
          renewable energy sources transform the way we power our lives.
        </p>

        <button className="mt-12 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-semibold hover:bg-[#a9e25d] transition shadow-lg shadow-green-900/20">
          See our solutions
        </button>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#fdf8f1] py-20 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">
          {[
            { value: "5,000 MWh", label: "Renewable Energy Generated" },
            { value: "2,500+", label: "Projects Completed" },
            { value: "10,000+", label: "Happy Customers" },
            { value: "15%", label: "Global Market Share" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <h2 className="text-3xl font-bold text-[#022c22] mb-2 transition">{stat.value}</h2>
              <p className="text-gray-600 text-[10px] tracking-widest uppercase font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section (Lime Green) */}
      <section className="w-full mt-20 px-6 py-24 bg-[#bdf46d] text-[#022c22] relative z-10 rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
            <span className="text-xs font-bold tracking-widest uppercase opacity-70">Solutions</span>
          </div>
          <h2 className="text-5xl font-semibold mb-20 tracking-tight">Key to clean future</h2>

          <div className="grid grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                title: "EV Charging",
                desc: "Electric vehicles are a cleaner option, which can be powered from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.",
                icon: "⚡"
              },
              {
                title: "Solar Energy",
                desc: "Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on the panels capture the energy from the sun and convert it into electrical power.",
                icon: "☀️"
              },
              {
                title: "Wind Energy",
                desc: "Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.",
                icon: "🎐"
              },
              {
                title: "Hydropower",
                desc: "The technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It is one of the oldest forms of renewable energy.",
                icon: "💧"
              }
            ].map((card, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-4xl mb-2">{card.icon}</div>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-[#022c22]/70 text-sm leading-relaxed max-w-sm">{card.desc}</p>
                <Link href="#" className="font-bold text-sm mt-2 border-b-2 border-current w-fit">Read more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement Section */}
      <section className="mt-40 text-center px-6 relative z-10 max-w-4xl">
        <h2 className="text-5xl font-semibold leading-tight tracking-tight">
          Our commitment to green energy is paving the way for a cleaner, healthier planet.
        </h2>
        <button className="mt-12 bg-[#022c22] text-white px-10 py-4 rounded-full font-semibold hover:bg-black transition border border-white/10">
          Get Started
        </button>
      </section>

      {/* Gallery Section */}
      <section className="mt-32 w-full px-10 relative z-10 max-w-7xl">
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-1 aspect-[3/4] bg-white/5 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              {/* Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-white/20 font-bold italic">
                {i === 1 && "Field View"}
                {i === 2 && "Wind Farm"}
                {i === 3 && "EV Port"}
                {i === 4 && "Green Forest"}
                {i === 5 && "Sun Light"}
                {i === 6 && "Eco Home"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-40 w-full max-w-3xl px-6 relative z-10 pb-40">
        <h2 className="text-4xl font-semibold text-center mb-4 tracking-tight">FAQ</h2>
        <p className="text-gray-500 text-center text-sm mb-16">Here you will find the answers for the frequently asked questions.</p>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="flex justify-between items-center px-8 py-6">
                <span className="font-medium text-gray-200">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === i && (
                <div className="px-8 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-20 bg-[#bdf46d]/10 border border-[#bdf46d]/20 p-8 rounded-[2rem] flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#bdf46d] flex items-center justify-center text-[#022c22] text-xl">💬</div>
          <div>
            <h4 className="font-bold text-gray-200">Still have questions?</h4>
            <p className="text-gray-500 text-sm mt-1">For assistance, please visit our <Link href="#" className="underline text-gray-300">Contact us</Link> page or call our support line at 805-322-6112.</p>
          </div>
        </div>
      </section>

      <Footer />


    </main>
  );
}