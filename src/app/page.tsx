'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Search,
  Star,
  Ship,
  TrendingUp,
  Anchor,
  Truck
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)] pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-gold-rgb),0.03)_0%,transparent_70%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[rgba(var(--accent-gold-rgb),0.05)] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.03 }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--panel)] border border-[var(--border)] backdrop-blur-sm shadow-lg"
        >
          <span className="flex h-2 w-2 rounded-full bg-[var(--accent-gold)] animate-pulse"></span>
          <span className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase">Global Logistics Redefined</span>
        </motion.div>

        <motion.h1 
          style={{ y: y2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-8 max-w-6xl mx-auto leading-[1.1]"
        >
          <span className="block">Shipping Beyond</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-gold)] via-[#FCD34D] to-[#B45309]">Boundaries.</span>
        </motion.h1>

        <motion.p 
          style={{ opacity }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed font-light"
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
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)] to-blue-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20"></div>
          <div className="relative bg-[var(--panel)] border border-[var(--border)] rounded-2xl p-2 flex items-center shadow-2xl transition-colors duration-300 focus-within:border-[var(--accent-gold)]">
            <div className="pl-4 text-[var(--text-secondary)]">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Enter Tracking ID (e.g., JX-82910)" 
              className="w-full bg-transparent border-none text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:ring-0 px-4 py-3 text-base font-medium outline-none"
            />
            <button className="bg-[var(--text-primary)] text-[var(--background)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--text-secondary)] transition-colors flex items-center gap-2">
              Track <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          style={{ y: y1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-[var(--border)] pt-12 w-full max-w-5xl"
        >
          {[
            { label: "Active Countries", value: "45+" },
            { label: "Shipments/Year", value: "12k+" },
            { label: "On-Time Delivery", value: "99.8%" },
            { label: "Client Satisfaction", value: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2 font-mono">{stat.value}</span>
              <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl bg-[var(--panel)] border border-[var(--border)] hover:border-[var(--accent-gold)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(var(--accent-gold-rgb),0.1)]"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[var(--background)] border border-[var(--border)] group-hover:bg-[var(--accent-gold)] group-hover:text-[#0A0A0A] transition-colors duration-300`}>
        <feature.icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold)] transition-colors">{feature.title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed font-light">{feature.description}</p>
    </motion.div>
  );
}

function Features() {
  const features = [
    {
      title: "Global Reach",
      description: "Seamless shipping to over 45 countries with streamlined customs clearance and local expertise.",
      icon: Globe,
    },
    {
      title: "Real-Time Tracking",
      description: "Watch your cargo move across the globe with live GPS updates and proactive notifications.",
      icon: MapPin,
    },
    {
      title: "Secure Handling",
      description: "White-glove service ensuring your valuable assets arrive in pristine condition, every time.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Delivery",
      description: "Optimized routes and priority handling for time-sensitive shipments that can't wait.",
      icon: Clock,
    }
  ];

  return (
    <section className="py-32 bg-[var(--background)] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[var(--accent-gold)] font-bold tracking-widest uppercase text-sm mb-4 block">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Why Industry Leaders Choose Us</h2>
          <p className="text-[var(--text-secondary)] text-lg font-light">We don't just move cargo; we engineer reliability into every mile of the journey.</p>
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

function ServiceCard({ title, desc, icon: Icon, index }: { title: string, desc: string, icon: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-[var(--border)] bg-[var(--panel)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--panel)] opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
      
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-gold)] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

      <div className="absolute inset-0 flex flex-col p-8 z-10">
        <div className="flex-1">
          <div className="w-16 h-16 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center mb-8 group-hover:border-[var(--accent-gold)] transition-colors duration-300">
            <Icon className="w-8 h-8 text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors duration-300" />
          </div>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight">{title}</h3>
          <p className="text-[var(--text-secondary)] font-light leading-relaxed">
            {desc}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-[var(--accent-gold)] font-bold text-sm tracking-wider uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore Service <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

function ServicesPreview() {
  return (
    <section id="services" className="py-32 bg-[var(--background)] text-[var(--text-primary)] overflow-hidden border-t border-[var(--border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Comprehensive<br/><span className="text-[var(--text-secondary)]">Logistics Solutions</span></h2>
          </div>
          <Link href="/services">
            <button className="group flex items-center gap-3 border border-[var(--border)] hover:border-[var(--accent-gold)] bg-[var(--panel)] px-8 py-4 rounded-full transition-all duration-300 hover:text-[var(--accent-gold)]">
              <span className="font-semibold">View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Ocean Freight" 
            desc="Cost-effective global container shipping solutions tailored for bulk transport."
            icon={Anchor}
            index={0}
          />
          <ServiceCard 
            title="Air Cargo" 
            desc="Expedited shipping for time-critical deliveries that need to be there yesterday."
            icon={TrendingUp}
            index={1}
          />
          <ServiceCard 
            title="Inland Transport" 
            desc="Secure ground transportation network connecting ports to your door."
            icon={Truck}
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-32 bg-[var(--panel)] flex items-center justify-center border-y border-[var(--border)]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="mb-10 flex justify-center gap-2">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-[var(--accent-gold)] fill-[var(--accent-gold)]" />)}
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] mb-12 leading-tight">
          "The level of precision and care JACXI brings to logistics is unmatched. They handled our fleet shipment with absolute professionalism."
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[var(--background)] rounded-full mb-4 border-2 border-[var(--border)] overflow-hidden">
             {/* Placeholder avatar or just initials */}
             <div className="w-full h-full flex items-center justify-center text-xl font-bold text-[var(--text-secondary)]">SJ</div>
          </div>
          <p className="text-xl font-bold text-[var(--text-primary)]">Sarah Jenkins</p>
          <p className="text-[var(--text-secondary)] font-medium">Director of Operations, AutoMotive Global</p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[var(--background)]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--panel)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-20" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-8 tracking-tight">Ready to ship?</h2>
        <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mb-12">
          Get a competitive quote in minutes and start your journey with the world's most reliable logistics partner.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Link href="/auth/signin">
            <button className="w-full sm:w-auto bg-[var(--accent-gold)] text-[#0A0A0A] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#b89328] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(var(--accent-gold-rgb),0.4)]">
              Get a Quote
            </button>
          </Link>
          <Link href="/#contact">
            <button className="w-full sm:w-auto bg-transparent border border-[var(--border)] text-[var(--text-primary)] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[var(--panel)] transition-all">
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
    <div className="dark min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent-gold)] selection:text-[#0A0A0A]">
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
