"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

// Particle dot for the grid background
interface Particle {
  x: number;
  y: number;
  opacity: number;
  speed: number;
  size: number;
}

const PARTICLE_COUNT = 36;

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  x: seededRandom(i * 3) * 100,
  y: seededRandom(i * 3 + 1) * 100,
  opacity: 0.08 + seededRandom(i * 3 + 2) * 0.18,
  speed: 0.3 + seededRandom(i * 3 + 3) * 0.7,
  size: 1.5 + seededRandom(i * 3 + 4) * 2.5,
}));

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#B89452" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      {/* Floating dots */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -(12 + i % 8), 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: 3 + p.speed * 3,
            repeat: Infinity,
            delay: i * 0.18,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(184,148,82,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function ShimmerButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary overflow-hidden uppercase tracking-wider text-sm font-semibold group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer sweep */}
      <motion.div
        initial={{ x: "-120%" }}
        animate={hovered ? { x: "220%" } : { x: "-120%" }}
        transition={hovered ? { duration: 0.6, ease: "easeOut" } : { duration: 0 }}
        className="absolute inset-y-0 w-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
        }}
      />

      {/* Hover bg */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="absolute inset-0 bg-white pointer-events-none"
      />

      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
        {children}
      </span>
      <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white text-center px-6 border-b border-white/10 relative overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Headline with animated gold underline on key text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
            Built on{" "}
            <span className="relative inline-block">
              Legacy.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold block"
              />
            </span>
            <br />
            Driven by{" "}
            <span className="relative inline-block">
              Vision.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold block"
              />
            </span>
            <br />
            Focused on the{" "}
            <span className="relative inline-block">
              Future.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold block"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From natural resources to renewable energy, mobility, finance, real
            estate, aviation and hospitality, Jyoti Infrastructure continues to
            build businesses and tangible assets designed for long-term value
            creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ShimmerButton href="/businesses">
              Explore Our Businesses
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
