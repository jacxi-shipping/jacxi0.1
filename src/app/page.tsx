'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Package, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Ship, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Star,
  Search
} from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

// --- Components ---

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(9,9,11,1)_100%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.05 }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Global Logistics Redefined</span>
        </motion.div>

        <motion.h1 
          style={{ y: y2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]"
        >
          <span className="block">Shipping Beyond</span>
          <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Boundaries.</span>
        </motion.h1>

        <motion.p 
          style={{ opacity }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experience premium logistics with precision tracking, white-glove service, and a global network that moves your world forward.
        </motion.p>

        {/* Tracking Input */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-lg mx-auto relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-2 flex items-center shadow-2xl">
            <div className="pl-4 text-zinc-500">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Enter Tracking ID (e.g., JX-82910)" 
              className="w-full bg-transparent border-none text-white placeholder-zinc-500 focus:ring-0 px-4 py-3 text-base"
            />
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
              Track <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          style={{ y: y1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-zinc-800/50 pt-10"
        >
          {[
            { label: "Active Countries", value: "45+" },
            { label: "Shipments/Year", value: "12k+" },
            { label: "On-Time Delivery", value: "99.8%" },
            { label: "Client Satisfaction", value: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Global Reach",
      description: "Seamless shipping to over 45 countries with streamlined customs clearance.",
      icon: Globe,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Real-Time Tracking",
      description: "Watch your cargo move across the globe with live GPS updates.",
      icon: MapPin,
      color: "bg-amber-500/10 text-amber-500"
    },
    {
      title: "Secure Handling",
      description: "White-glove service ensuring your valuable assets arrive mostly pristine.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-500"
    },
    {
      title: "Fast Delivery",
      description: "Optimized routes and priority handling for time-sensitive shipments.",
      icon: Clock,
      color: "bg-purple-500/10 text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Industry Leaders Choose Us</h2>
          <p className="text-zinc-400 text-lg">We don't just move cargo; we engineer reliability into every mile of the journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/80"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
        <feature.icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{feature.title}</h3>
      <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
      
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
        <ArrowRight className="w-5 h-5 text-zinc-500" />
      </div>
    </motion.div>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-medium tracking-wider uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-bold">Comprehensive Logistics</h2>
          </div>
          <Link href="/#services">
            <button className="group flex items-center gap-2 border border-zinc-700 hover:border-white px-6 py-3 rounded-full transition-colors duration-300">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Vehicle Shipping" 
            desc="Secure transport for luxury and standard vehicles."
            image="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"
            index={0}
          />
          <ServiceCard 
            title="Ocean Freight" 
            desc="Cost-effective global container shipping solutions."
            image="https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2064&auto=format&fit=crop"
            index={1}
          />
          <ServiceCard 
            title="Air Cargo" 
            desc="Expedited shipping for time-critical deliveries."
            image="https://images.unsplash.com/photo-1583253683267-3304564299b4?q=80&w=2070&auto=format&fit=crop"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, image, index }: { title: string, desc: string, image: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors duration-300">
          <ArrowRight className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function Testimonial() {
  return (
    <section className="py-24 bg-zinc-950 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-8 flex justify-center gap-1">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />)}
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
          "The level of precision and care JACXI brings to logistics is unmatched. They handled our fleet shipment with absolute professionalism."
        </h2>
        <div>
          <p className="text-lg font-bold text-white">Sarah Jenkins</p>
          <p className="text-zinc-500">Director of Operations, AutoMotive Global</p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-6">Ready to ship?</h2>
          <p className="text-xl text-zinc-900/80 font-medium">Get a competitive quote in minutes and start your journey.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/auth/signin">
            <button className="bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-95 shadow-2xl">
              Get a Quote
            </button>
          </Link>
          <Link href="/#contact">
            <button className="bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-transform hover:scale-105 active:scale-95 shadow-xl">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 selection:bg-amber-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ServicesPreview />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
