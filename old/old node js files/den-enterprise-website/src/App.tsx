"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Rocket, Zap, Globe, Layers, 
  ChevronRight, Play, Code, Camera, Cpu, 
  Search, BookOpen, GraduationCap, ArrowRight
} from 'lucide-react';

// --- Components ---

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-black">D</div>
        <span className="text-xl font-bold tracking-tighter text-white font-montserrat uppercase">Den Enterprise</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
        <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Ecosystem</a>
        <button className="px-5 py-2 bg-white text-black rounded-full hover:bg-cyan-400 transition-all font-semibold">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            The Next Generation Digital Parent
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter font-space-grotesk">
            Creating Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Brilliance
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
            Helping startups, creators, and innovators establish their presence in the digital world through a curated ecosystem of technology and creativity.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Explore Ecosystem <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Start Your Venture
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, desc, icon: Icon, features, colorClass, isMedia }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${colorClass}/10 blur-3xl group-hover:bg-${colorClass}/20 transition-all`} />
    <div className={`w-14 h-14 rounded-2xl bg-${colorClass}/20 flex items-center justify-center mb-6 border border-${colorClass}/30 text-${colorClass}`}>
      <Icon size={28} />
    </div>
    <h3 className="text-3xl font-bold text-white mb-4 font-space-grotesk">{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
          <div className={`w-1.5 h-1.5 rounded-full bg-${colorClass}`} /> {f}
        </li>
      ))}
    </ul>
    {isMedia ? (
       <div className="relative aspect-video rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Cinematic Preview</span>
          <Play className="text-white relative z-10 opacity-50" fill="white" size={40} />
       </div>
    ) : (
      <div className="grid grid-cols-2 gap-2">
        {[1,2,3,4].map(i => <div key={i} className="h-12 bg-white/5 rounded-lg border border-white/5" />)}
      </div>
    )}
  </motion.div>
);

const ProductShowcase = ({ logo, title, tagline, desc, features, color, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-24`}>
    <div className="flex-1">
      <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center border shadow-2xl shadow-${color}/20`} style={{ borderColor: `${color}44`, backgroundColor: `${color}11` }}>
         {logo}
      </div>
      <h3 className="text-4xl font-bold text-white mb-2 font-space-grotesk">{title}</h3>
      <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: color }}>{tagline}</p>
      <p className="text-gray-400 text-lg mb-8 leading-relaxed">{desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <ShieldCheck size={18} style={{ color: color }} />
            <span className="text-sm text-gray-200">{f}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 w-full">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative aspect-square md:aspect-video rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-1 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundColor: color }} />
        <div className="h-full w-full bg-[#0a0a0a] rounded-[22px] flex items-center justify-center border border-white/5">
            <span className="text-gray-600 font-mono">Interactive Mockup Placeholder</span>
        </div>
      </motion.div>
    </div>
  </div>
);

// --- Main Page ---

export default function DenEnterprise() {
  return (
    <div className="bg-[#020617] text-white min-h-screen font-inter selection:bg-cyan-500/30">
      <Nav />
      
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-space-grotesk">One Ecosystem. <br/>Endless Innovation.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Den Enterprise isn't just a company; it's a launchpad for the next era of digital products. Founded on the principle of "Digital Brilliance," we bridge the gap between complex technology and human-centric design.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">Ventures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">10k+</div>
                <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">Innovation</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-8 border border-white/10">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-gray-700" />
                 <div>
                   <h4 className="font-bold">The Founder</h4>
                   <p className="text-xs text-cyan-400">Visionary & Lead Architect</p>
                 </div>
               </div>
               <p className="italic text-gray-300">"We don't just build websites; we build the infrastructure for future entrepreneurs to thrive in a digital-first economy."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-space-grotesk">Professional Services</h2>
            <p className="text-gray-400">Tailored solutions for modern brands.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Ribble Designs"
              desc="Transforming narratives into cinematic experiences through high-end visual storytelling."
              icon={Camera}
              colorClass="blue-500"
              isMedia={true}
              features={["Cinematic Video", "Photography", "Creative Direction", "Brand Identity"]}
            />
            <ServiceCard 
              title="Web Creator"
              desc="Building scalable, high-performance web applications with cutting-edge tech stacks."
              icon={Code}
              colorClass="cyan-400"
              isMedia={false}
              features={["SaaS Development", "UI/UX Design", "Business Portals", "Growth Marketing"]}
            />
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 font-space-grotesk">Product Ecosystem</h2>
          <p className="text-gray-400">Standalone platforms owned and operated by Den Enterprise.</p>
        </div>

        <ProductShowcase 
          title="Test Gangster"
          tagline="AI-Powered IGCSE Prep"
          color="#f97316" // Orange
          logo={<GraduationCap className="text-orange-500" />}
          desc="The ultimate study companion for IGCSE students. Generate custom papers and marking schemes in seconds."
          features={["Smart Filtering", "Custom Papers", "STEM Focused", "Exam Insights"]}
          reverse={false}
        />

        <ProductShowcase 
          title="Madhura Malayalam"
          tagline="Modern Language Learning"
          color="#22c55e" // Green
          logo={<BookOpen className="text-green-500" />}
          desc="Breaking language barriers with interactive boards and gamified lessons for Malayalam learners worldwide."
          features={["Writing Practice", "Gamified Levels", "Native Audio", "Interactive UI"]}
          reverse={true}
        />

        <ProductShowcase 
          title="Subject Browser"
          tagline="Domain-Specific Intelligence"
          color="#3b82f6" // Blue
          logo={<Search className="text-blue-500" />}
          desc="A distraction-free search engine that understands the context of your query to find expert-level results."
          features={["Context Awareness", "Ad-Free Search", "Academic Focus", "Fast Indexing"]}
          reverse={false}
        />
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16 font-space-grotesk">Our Blueprint</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
               {["Idea", "Branding", "Design", "Dev", "Launch", "Growth"].map((step, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400 font-bold">
                        {i + 1}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-tighter text-gray-400">{step}</span>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8 font-space-grotesk">Ready to build?</h2>
        <p className="text-xl text-gray-400 mb-12">Whether you need a world-class website or a creative partner, Den Enterprise is ready to scale with you.</p>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500" />
                <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500" />
            </div>
            <textarea placeholder="Tell us about your venture..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500 mb-4" />
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors">
                Send Inquiry
            </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© 2024 Den Enterprise. Creating Digital Brilliance.</p>
      </footer>
    </div>
  );
}