"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  opacity: number;
  speed: number;
  size: number;
}

const STATIC_PARTICLES: Particle[] = [
  { x: 12, y: 18, opacity: 0.15, speed: 0.5, size: 2.5 },
  { x: 85, y: 14, opacity: 0.22, speed: 0.7, size: 3 },
  { x: 45, y: 22, opacity: 0.18, speed: 0.4, size: 2 },
  { x: 92, y: 45, opacity: 0.25, speed: 0.6, size: 3.5 },
  { x: 8,  y: 65, opacity: 0.16, speed: 0.5, size: 2 },
  { x: 30, y: 78, opacity: 0.22, speed: 0.8, size: 4 },
  { x: 74, y: 82, opacity: 0.18, speed: 0.6, size: 3 },
  { x: 62, y: 35, opacity: 0.20, speed: 0.5, size: 2 },
];

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60A5FA" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      {/* Floating dots */}
      {STATIC_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -(12 + (i % 8)), 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: 3 + p.speed * 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#0A192F] text-white text-center px-6 relative overflow-hidden border-t border-slate-800">
      <ParticleBackground />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-8 shadow-md">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Sustainable Industrial Infrastructure</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            Built on <span className="text-blue-400">Legacy.</span>
            <br />
            Driven by <span className="text-blue-400">Vision.</span>
            <br />
            Shaping a <span className="text-emerald-400 italic">Sustainable Future.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-300 font-normal mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From responsible mineral resources to 75 MW renewable clean power, electric mobility, financial inclusion, and green luxury hospitality, Jyoti Infrastructure is building tangible assets designed for multigenerational value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/businesses"
              className="px-9 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-lg shadow-blue-600/30 uppercase tracking-wider transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="px-9 py-4 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base border border-slate-600/80 rounded uppercase tracking-wider transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Connect With Us</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
