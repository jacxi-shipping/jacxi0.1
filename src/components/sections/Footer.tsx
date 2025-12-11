'use client';

import Link from 'next/link';
import { Ship, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-xl">
                <Ship className="w-6 h-6 text-[#0A0A0A]" />
              </div>
              <span className="text-2xl font-bold tracking-tight">JACXI</span>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              Pioneering the future of global logistics with AI-driven solutions and unwavering reliability.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-[#0A0A0A] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'News', 'Partners', 'Legal'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Ocean Freight', 'Air Cargo', 'Ground Transport', 'Warehousing', 'Customs Brokerage'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <span className="text-zinc-400">123 Logistics Blvd, Global Trade Center, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-zinc-400">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-zinc-400">contact@jacxi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Jacxi Shipping. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
