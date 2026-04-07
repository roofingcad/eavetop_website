import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
            <Link href="/">
              <Image src="/eavetop_logo.jpg" alt="Eavetop Logo" width={100} height={40} className="h-10 w-auto object-contain" />
            </Link>
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
                <li><Link href="/services" className="hover:text-[#022c22] transition">Services</Link></li>
                <li><Link href="#" className="hover:text-[#022c22] transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-[#022c22] transition">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#022c22] mb-6">Company</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li><Link href="/about" className="hover:text-[#022c22] transition">About</Link></li>
                <li><Link href="#" className="hover:text-[#022c22] transition">Our Mission</Link></li>
                <li><Link href="/careers" className="hover:text-[#022c22] transition">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[#022c22] transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2 bg-[#064e3b] p-8 rounded-3xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-4">Stay ahead with our latest insights, industry updates, and innovative solutions designed to help businesses scale, optimize operations, and achieve long-term success.</h4>
          
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
  );
}
