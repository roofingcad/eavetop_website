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
      question: "How accurate and reliable are your estimating and coding services??",
      answer: "e maintain high accuracy standards by following industry best practices and using advanced tools. Our team ensures precise Medical Coding and reliable estimates for platforms like Symbility and Xactimate."
    },
    {
      question: "How do you maintain data security and confidentiality?",
      answer: "We prioritize data security by implementing strict confidentiality protocols, secure systems, and controlled access measures. Our processes are designed to protect sensitive client information at every stage."
    },
    {
      question: "What industries do you primarily serve?",
      answer: "We serve a diverse range of industries including healthcare, insurance, and mortgage services. Our domain expertise allows us to adapt to industry-specific challenges and provide effective solutions."
    },
    {
      question: "What makes your services reliable for long-term business partnerships?",
      answer: "Our commitment to quality, consistency, and timely delivery makes us a trusted partner. We focus on building long-term relationships by delivering measurable results and maintaining transparent communication."
    },
    {
      question: "Do you offer customized solutions for businesses?",
      answer: "Yes, absolutely. Every business has unique needs, so we tailor our services to match your specific requirements, goals, and industry standards.."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black relative overflow-hidden flex flex-col items-center">

      {/* Header Section with Background Layer */}
      <header className="relative w-full overflow-hidden flex flex-col items-center bg-[#022c22] text-white">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-100"
          style={{ backgroundImage: 'url("/home_bg.png")' }}
        ></div>

        <Navbar theme="dark" />

        {/* Hero Section */}
         <section className="flex flex-col items-center justify-center text-center mt-16 relative z-10 px-6 pb-32">
          <h1 className="text-8xl font-semibold leading-tight tracking-tight">
            Empowering <br />
            Global Businesses
          </h1>

          <p className="text-gray-400 max-w-2xl mt-8 text-lg leading-8">
            Transform your business with expert engineering, seamless migrations, and innovative digital solutions, no matter where you are.
          </p>

          <button className="mt-12 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-semibold hover:bg-[#a9e25d] transition shadow-lg shadow-green-900/20">
            See our solutions
          </button>
        </section>
      </header>

      {/* Stats Section */}
      <section className="w-full bg-[#fdf8f1] py-20 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">
          {[
            { value: "95%", label: "Client Satisfaction Rate" },
            { value: "99%", label: "Uptime Guarantee" },
            { value: "40%", label: " Faster MVP Delivery" },
            { value: "300+", label: "Successful Projects Delivered" },
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
      <span className="text-xs font-bold tracking-widest uppercase opacity-70">
       Our Expertise
      </span>
    </div>

    <h2 className="text-5xl font-semibold mb-20 tracking-tight">
      Key to clean future
    </h2>

    <div className="grid grid-cols-2 gap-x-20 gap-y-16">
      {[
        {
          title: "IT Services",
          desc: "We provide end-to-end IT solutions including system setup, maintenance, cloud integration, and technical support. Our goal is to ensure your business runs smoothly with secure, scalable, and efficient technology infrastructure.",
          icon: "⚡"
        },
        {
          title: "Medical Coding",
          desc: "Our medical coding services ensure accurate conversion of healthcare diagnoses, procedures, and services into standardized codes. We help healthcare providers maintain compliance, reduce errors, and streamline billing processes.",
          icon: "☀️"
        },
        {
          title: "Symbility Measurements",
          desc: "We deliver precise property measurements using Symbility tools to support insurance claims and assessments. Our team ensures accurate data collection to help speed up claim processing and improve estimation reliability.",
          icon: "🎐"
        },
        {
          title: "Xactimate Estimating Services",
          desc: "We provide detailed and accurate cost estimates using Xactimate for property damage and insurance claims. Our expertise helps insurers and contractors make informed decisions with reliable and timely reports.",
          icon: "💧"
        },

        // ✅ NEW SERVICE 1
        {
          title: "Mortgage Title Search",
          desc: "We conduct thorough title searches to verify property ownership, identify liens, and uncover any legal issues associated with a property. Our accurate and detailed reports help ensure smooth and secure real estate transactions.",
          icon: "📈"
        },

        // ✅ NEW SERVICE 2
        {
          title: "Mortgage Underwriting",
          desc: "Our mortgage underwriting services involve evaluating borrower eligibility, financial documents, and risk factors to ensure compliance with lending standards. We help lenders make confident, accurate, and timely loan decisions..",
          icon: "💻"
        }
      ].map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="text-2xl">{item.icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Commitment Statement Section */}
      <section className="mt-40 text-center px-6 relative z-10 max-w-4xl">
        <h2 className="text-5xl font-semibold leading-tight tracking-tight text-[#022c22]">
          We deliver precision-driven services that build trust and accelerate business performance.
        </h2>
        <button className="mt-12 bg-[#022c22] text-white px-10 py-4 rounded-full font-semibold hover:bg-black transition shadow-lg shadow-green-900/10">
          Get Started
        </button>
      </section>

      {/* Gallery Section */}
      <section className="mt-32 w-full px-10 relative z-10 max-w-7xl">
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-1 aspect-[3/4] bg-gray-100 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#022c22]/10 to-transparent opacity-100 group-hover:opacity-100 transition duration-500"></div>
              <Image 
                src={`/home_0${i}.jpg`} 
                alt={`Gallery image ${i}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-40 w-full max-w-3xl px-6 relative z-10 pb-40">
        <h2 className="text-4xl font-semibold text-center mb-4 tracking-tight text-[#022c22]">FAQ</h2>
        <p className="text-gray-500 text-center text-sm mb-16">Here you will find the answers for the frequently asked questions.</p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="flex justify-between items-center px-8 py-6">
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </div>
              {openFaq === i && (
                <div className="px-8 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-20 bg-[#bdf46d]/20 border border-[#bdf46d]/30 p-8 rounded-[2rem] flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#bdf46d] flex items-center justify-center text-[#022c22] text-xl">💬</div>
          <div>
            <h4 className="font-bold text-[#022c22]">Still have questions?</h4>
            <p className="text-gray-600 text-sm mt-1">For assistance, please visit our <Link href="#" className="underline text-[#022c22]">Contact us</Link> page or call our support line at 805-322-6112.</p>
          </div>
        </div>
      </section>

      <Footer />


    </main>
  );
}