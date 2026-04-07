"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CareersPage() {
  const jobs = {
    "Research and Development (R&D)": [
      { title: "DevOps Engineer ", location: "Bangalore,Karnataka, India", type: "Full-Time" },
      { title: "Materials Scientist", location: "Bangalore,Karnataka, India", type: "Full-Time" },
    ],
    "Engineering": [
      { title: "Medical Coding Auditor", location: "Bangalore,Karnataka, India", type: "Full-Time" },
      { title: "Coding Quality Analyst", location: "Bangalore,Karnataka, India", type: "Full-Time" },
      { title: "Cloud Engineer", location: "Bangalore,Karnataka, India", type: "Full-Time" },
    ]
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      <Navbar theme="light" />

      {/* Hero Section */}
      <section className="mt-20 px-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight">Join our team</h1>
          <p className="text-gray-500 text-lg">Our philosophy is simple — deliver solutions that drive real business impact..</p>
        </div>

        {/* Team Grid Placeholder */}
        <div className="relative h-[300px] flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold ml-10">Team</div>
            <div className="w-24 h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 font-bold -mt-10">Team</div>
            <div className="w-24 h-24 rounded-full bg-green-200 flex items-center justify-center text-green-900 font-bold ml-10">Team</div>
            <div className="w-24 h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 font-bold ml-5">Team</div>
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-white font-bold -mt-10">Team</div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mt-40 w-full max-w-7xl px-10 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-3xl font-bold">Open positions</h2>
          <div className="flex gap-4">
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#bdf46d]/50">
              <option>All departments</option>
              <option>R&D</option>
              <option>Engineering</option>
            </select>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#bdf46d]/50">
              <option>All locations</option>
              <option>San Francisco, US</option>
              <option>Remote</option>
            </select>
          </div>
        </div>

        {Object.entries(jobs).map(([category, listings]) => (
          <div key={category} className="mb-20">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{category}</h3>
            <div className="flex flex-col gap-4">
              {listings.map((job, i) => (
                <div key={i} className="group border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:border-[#bdf46d] hover:shadow-xl hover:shadow-[#bdf46d]/5">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold group-hover:text-[#022c22] transition-colors">{job.title}</h4>
                    <div className="flex gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5 font-medium">📍 {job.location}</span>
                      <span className="flex items-center gap-1.5 font-medium">🕒 {job.type}</span>
                    </div>
                  </div>
                  <button className="mt-6 md:mt-0 font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Apply <span className="text-lg">↗</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Banner */}
      <section className="w-full px-6 mb-40">
        <div className="max-w-7xl mx-auto bg-[#022c22] rounded-[2rem] p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Innovation-Driven Team</h2>
            <p className="text-gray-400 text-sm max-w-md">Join us in shaping the future of businesses through technology, precision, and impactful solutions..</p>
          </div>
          <button className="relative z-10 bg-[#bdf46d] text-[#022c22] px-10 py-4 rounded-full font-bold hover:bg-[#a9e25d] transition shadow-lg shadow-black/20">
            Get Started
          </button>
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bdf46d]/10 blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
