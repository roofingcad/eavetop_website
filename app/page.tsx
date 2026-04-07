"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-6 relative z-10 max-w-7xl">
        <div className="flex items-center gap-3">
          <Image 
            src="/eavetop_logo.jpg" 
            alt="Eavetop Logo" 
            width={120} 
            height={48} 
            className="h-12 w-auto object-contain"
            priority
          />
        </div>

        <div className="flex gap-10 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition">About us</Link>
          <Link href="#" className="hover:text-white transition">Careers</Link>
          <Link href="#" className="hover:text-white transition">Contact us</Link>
          <Link href="#" className="hover:text-white transition">Blog</Link>
        </div>

        <button className="border border-white/20 px-8 py-2.5 rounded-full hover:bg-white hover:text-black transition text-sm font-medium">
          Get in touch →
        </button>
      </nav>

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

      {/* Footer */}
      <footer className="w-full bg-[#fdf8f1] pt-20 pb-10 px-10 relative z-10 mt-auto overflow-hidden">
        {/* Background Wavy Lines Image */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-no-repeat bg-[left_bottom] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: 'url("/transparent.jpg")', backgroundSize: '70% auto' }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <Image src="/eavetop_logo.jpg" alt="Eavetop Logo" width={100} height={40} className="h-10 w-auto object-contain" />
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-3 lg:col-span-2 gap-8">
              <div>
                <h4 className="font-bold text-[#022c22] mb-6">Models</h4>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li><Link href="#" className="hover:text-[#022c22] transition">Solutions</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">How it works</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#022c22] mb-6">Resources</h4>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li><Link href="#" className="hover:text-[#022c22] transition">Blog</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#022c22] mb-6">Company</h4>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li><Link href="#" className="hover:text-[#022c22] transition">About</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">Our Mission</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">Careers</Link></li>
                  <li><Link href="#" className="hover:text-[#022c22] transition">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2 bg-[#064e3b] p-8 rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-4">Your Source for Green Energy Updates</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Stay in the loop with our Green Future newsletter, where we share our latest insights into the clean green energy solutions.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your e-mail..." 
                  className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-green-400 text-white"
                />
                <button className="bg-[#bdf46d] text-[#022c22] px-6 py-3 rounded-full font-bold hover:bg-[#a9e25d] transition">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#022c22]/10 gap-6">
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-[#022c22] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#022c22] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.761.011-3.729.055-.944.043-1.458.201-1.8.334-.452.175-.773.385-1.112.724-.339.339-.55.66-.724 1.112-.133.342-.291.856-.334 1.8-.044.97-.055 1.274-.055 3.73v.468c0 2.456.011 2.761.055 3.729.043.944.201 1.458.334 1.8.175.452.385.773.724 1.112.339.339.66.55 1.112.724.342.133.856.291 1.8.334.97.044 1.274.055 3.73.055h.468c2.456 0 2.761-.011 3.729-.055.944-.043 1.458-.201 1.8-.334.452-.175.773-.385 1.112-.724.339-.339.55-.66.724-1.112.133-.342.291-.856.334-1.8.044-.97.055-1.274-.055-3.73v-.468c0-2.456-.011-2.761-.055-3.729-.043-.944-.201-1.458-.334-1.8-.175-.452-.385-.773-.724-1.112-.339-.339-.66-.55-1.112-.724-.342-.133-.856-.291-1.8-.334-.97-.044-1.274-.055-3.73-.055zM12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM12 9.05a2.95 2.95 0 110 5.9 2.95 2.95 0 010-5.9zm5.222-2.112a1.14 1.14 0 110 2.28 1.14 1.14 0 010-2.28z"/></svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#022c22] transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
            </div>
            <p className="text-gray-600 text-xs">
              © 2024 Eavetop. All rights reserved by <Link href="#" className="font-semibold hover:text-black transition">Eavetop.net</Link>
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}