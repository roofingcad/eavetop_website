"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {


  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Navbar with light theme */}
      <Navbar theme="light" />

      {/* Hero Section - Centered About Us */}
      <section className="mt-12 md:mt-20 px-6 max-w-4xl text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About us</h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">
          At Eavetop, we are more than just a service provider we are your strategic partner in building sustainable growth and operational excellence. With years of industry experience and a deep understanding of evolving business landscapes, we deliver intelligent, results-driven solutions tailored to meet the unique needs of every client.
          <br /><br />
          Our expertise spans across IT services, medical coding, insurance estimation, and mortgage solutions, enabling us to support businesses across multiple sectors with precision and efficiency. We combine technical excellence with a client-first approach, ensuring that every solution we deliver is not only scalable and secure, but also aligned with your long-term business objectives.
          <br /><br />
          From startups looking to establish a strong foundation to established enterprises aiming to optimize performance, Eavetop empowers organizations at every stage of their journey. Our team is committed to maintaining the highest standards of accuracy, compliance, and innovation helping you streamline operations, reduce risks, and unlock new opportunities for growth.
          <br /><br />
          At the core of everything we do is a simple belief: success is built on trust, consistency, and meaningful partnerships. That’s why we focus on delivering measurable value, maintaining transparency, and building relationships that last.
        </p>
        <button className="border border-black/20 px-8 py-2.5 rounded-full hover:bg-black hover:text-white transition text-xs font-semibold tracking-wider">
          Read more
        </button>
      </section>

      {/* Split About Us Section */}
      <section className="mt-24 md:mt-40 w-full max-w-7xl px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-center md:text-left">
          Our Vision
        </h2>
        <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left">
          <p className="text-gray-900 text-sm leading-relaxed font-medium">
           To be a globally recognized and trusted partner in delivering innovative, technology-driven solutions that empower businesses to thrive in a rapidly evolving digital landscape. We envision a future where organizations of all sizes can leverage intelligent systems, streamlined processes, and reliable expertise to achieve sustainable growth, operational excellence, and long-term success.
          </p>
          <button className="bg-[#bdf46d] text-[#022c22] px-8 md:px-10 py-3 rounded-full font-bold text-xs hover:bg-[#a9e25d] transition shadow-lg shadow-green-900/10 uppercase tracking-widest">
            Read more
          </button>
        </div>
      </section>


      <section className="mt-24 md:mt-40 mb-32 md:mb-56 w-full max-w-7xl px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="flex flex-col items-center md:items-start gap-8 order-2 md:order-1 text-center md:text-left">
          <p className="text-gray-900 text-sm leading-relaxed font-medium">
          Our mission is to deliver high-quality, precision-driven services across IT, healthcare, insurance, and mortgage domains by combining advanced technology with deep industry expertise. We are committed to helping businesses improve efficiency, ensure accuracy, and reduce operational complexities through tailored solutions. By maintaining a strong focus on client satisfaction, transparency, and continuous improvement, we aim to build lasting partnerships that drive measurable results and business growth.
          </p>
          <button className="bg-[#bdf46d] text-[#022c22] px-8 md:px-10 py-3 rounded-full font-bold text-xs hover:bg-[#a9e25d] transition shadow-lg shadow-green-900/10 uppercase tracking-widest">
            Read more
          </button>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] order-1 md:order-2 text-center md:text-right">
          Our Mission
        </h2>
      </section>

    

      <Footer />
    </main>
  );
}
