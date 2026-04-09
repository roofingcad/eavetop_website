"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      <Navbar theme="light" />

      {/* Hero Section with Background Image */}
      <section className="w-full relative py-20 px-6 flex flex-col items-center overflow-hidden">
        {/* Transparent Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-center bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: 'url("/contactus_bg.jpg")', 
            backgroundSize: 'cover' 
          }}
        ></div>

        <div className="relative z-10 text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Contact us</h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
            We are here to help you make a first move to greener choice.
          </p>
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-lg bg-white rounded-[2rem] shadow-2xl shadow-black/5 p-10 border border-gray-100">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                placeholder="Your name" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#bdf46d] focus:bg-white transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="example@mail.com" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#bdf46d] focus:bg-white transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Company <span className="text-gray-300 font-normal">(optional)</span></label>
              <input 
                type="text" 
                id="company" 
                placeholder="Your company name" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#bdf46d] focus:bg-white transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Service</label>
              <select 
                id="service" 
                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#bdf46d] focus:bg-white transition appearance-none cursor-pointer"
              >
                <option value="">Select service</option>
                <option value="it_services">IT Services</option>
                <option value="symbility">Symbility Measurements</option>
                <option value="mortgage_underwriting">Mortgage Underwriting</option>
                <option value="medical_coding">Medical Coding</option>
                <option value="xactimate">Xactimate Estimating Services</option>
                <option value="mortgage_title_search">Mortgage Title Search</option>
                <option value="medical_billing">Medical Billing</option>
                <option value="healthcare_bpo">Healthcare BPO</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="mt-4 bg-[#022c22] text-white py-4 rounded-2xl font-bold text-sm hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              Submit <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full px-6 mb-40 mt-20">
        <div className="max-w-7xl mx-auto bg-[#022c22] rounded-[2rem] p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to start your green journey?</h2>
            <p className="text-gray-400 text-sm max-w-md">Our experts are standing by to help you choose the best renewable energy solutions for your needs.</p>
          </div>
          <button className="relative z-10 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-bold hover:bg-[#a9e25d] transition shadow-lg shadow-black/20">
            Get Started
          </button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bdf46d]/10 blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
