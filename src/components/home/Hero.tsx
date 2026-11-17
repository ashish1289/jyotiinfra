"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PARTICLES = [
  { cx: "10%", cy: "20%", r: 2, delay: 0 },
  { cx: "85%", cy: "15%", r: 1.5, delay: 0.4 },
  { cx: "75%", cy: "75%", r: 2.5, delay: 0.8 },
  { cx: "20%", cy: "70%", r: 1.5, delay: 1.2 },
  { cx: "50%", cy: "88%", r: 1, delay: 0.6 },
  { cx: "92%", cy: "50%", r: 2, delay: 0.2 },
  { cx: "5%",  cy: "50%", r: 1.5, delay: 1.0 },
  { cx: "60%", cy: "10%", r: 1, delay: 0.3 },
  { cx: "35%", cy: "92%", r: 1.5, delay: 0.7 },
  { cx: "65%", cy: "55%", r: 1, delay: 1.4 },
];

const STATS = [
  "Since 1960s",
  "7 Businesses",
  "4M+ Tonnes",
  "90-Key Taj Resort",
];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/hero_corporate_original.png"
            alt="Jyoti Infrastructure Corporate"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-primary/80 via-transparent to-black/30" />
      </div>

      {/* Floating SVG Particles */}
      <svg
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#B89452"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0.3, 0.6], scale: 1 }}
            transition={{
              opacity: { repeat: Infinity, duration: 3, delay: p.delay, ease: "easeInOut" },
              scale: { duration: 1, delay: p.delay + 0.5 },
            }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-24 md:pt-32 flex-1 flex flex-col items-center justify-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
          <div className="overflow-hidden pb-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="inline-block"
            >
              Building Businesses.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="inline-block text-white/90"
            >
              Creating Assets.
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 mt-2">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="inline-block text-gold italic font-light pr-2"
            >
              Shaping the Future.
            </motion.div>
          </div>
        </h1>

        {/* Animated Gold Horizontal Line */}
        <div className="relative h-[2px] w-full max-w-xs mx-auto mb-8 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center", width: "100%" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Jyoti Infrastructure Private Limited is a diversified business group with a strong
          legacy, building and managing businesses across mining, automobiles, financial services,
          real estate, renewable energy, aviation and hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/businesses"
            className="px-8 py-4 bg-gold text-primary hover:bg-white hover:text-primary transition-colors font-medium tracking-wider uppercase text-sm w-full sm:w-auto"
          >
            Explore Our Businesses
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-white/30 hover:bg-white hover:text-primary transition-colors text-white font-medium tracking-wider uppercase text-sm w-full sm:w-auto"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>

      {/* Stat Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 w-full"
      >
        <div className="backdrop-blur-md bg-black/40 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {STATS.map((stat, i) => (
              <span key={i} className="text-white/80 text-sm font-medium tracking-wider uppercase flex items-center gap-3">
                {i > 0 && <span className="text-gold/50 text-xs">|</span>}
                <span className="text-gold font-semibold">{stat}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll-Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="relative z-10 py-4 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <path
            d="M5 7L10 12L15 7"
            stroke="#B89452"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
