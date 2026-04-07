"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "IT Services",
      description: "Comprehensive IT solutions including infrastructure management, cloud services, and custom software development tailored for efficiency.",
      icon: "💻"
    },
    {
      title: "Symbility Measurements",
      description: "Precision-driven Symbility measurement services for accurate property estimation and insurance claims processing.",
      icon: "📐"
    },
    {
      title: "Mortgage Underwriting",
      description: "Expert mortgage underwriting services to evaluate risk and ensure compliance with the highest financial standards.",
      icon: "🏠"
    },
    {
      title: "Medical Coding",
      description: "Highly accurate medical coding and billing services to streamline healthcare operations and maximize revenue cycle efficiency.",
      icon: "🏥"
    },
    {
      title: "Xactimate Estimating Services",
      description: "Professional Xactimate estimating for detailed and transparent property damage assessments and restoration projects.",
      icon: "📋"
    },
    {
      title: "Mortgage Title Search",
      description: "Thorough mortgage title search services to verify ownership, identify liens, and ensure clear property transitions.",
      icon: "🔍"
    },
    {
      title: "Medical Billing",
      description: "Our medical billing services ensure accurate and timely processing of healthcare claims, from patient registration to final reimbursement. We help providers reduce claim denials and improve cash flow.",
      icon: "🧾"
    },
    {
      title: "Healthcare BPO",
      description: "Our healthcare BPO services support providers with efficient back-office operations, including data management, claims processing, and administrative support to improve productivity.",
      icon: "🏥"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      <Navbar theme="light" />

      {/* Hero Section */}
      <section className="mt-12 md:mt-20 px-6 max-w-4xl text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Services</h1>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
          We provide a diverse range of professional services designed to streamline your business operations and deliver exceptional value.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mt-20 md:mt-32 w-full max-w-7xl px-6 md:px-10 mb-20 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group p-8 md:p-10 bg-white border border-gray-100 rounded-3xl md:rounded-[2.5rem] hover:border-[#bdf46d] hover:shadow-2xl hover:shadow-[#bdf46d]/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-6 bg-gray-50 h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-2xl md:rounded-3xl group-hover:bg-[#bdf46d]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#022c22] transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-transparent hover:border-[#022c22] transition-all"
              >
                Inquire now <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full px-4 md:px-6 mb-32 md:mb-40">
        <div className="max-w-7xl mx-auto bg-[#022c22] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative text-center md:text-left">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in our services?</h2>
            <p className="text-gray-400 text-sm max-w-md">Our team of experts is ready to discuss how we can help you achieve your goals with our professional solutions.</p>
          </div>
          <Link href="/contact">
            <button className="relative z-10 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-bold hover:bg-[#a9e25d] transition shadow-lg shadow-black/20">
              Get in Touch
            </button>
          </Link>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bdf46d]/10 blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
