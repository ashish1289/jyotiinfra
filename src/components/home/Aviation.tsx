"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { label: "Pan-India Operations", icon: "🗺️" },
  { label: "Executive Charter",    icon: "✈️" },
  { label: "Private Fleet",        icon: "🛩️" },
];

const badges = [
  { text: "Charter Flights",  top: "10%",  left: "5%"  },
  { text: "Private Fleet",    top: "50%",  right: "5%" },
  { text: "Pan-India",        bottom: "12%", left: "10%" },
];

export function Aviation() {
  const svgRef = useRef<SVGPathElement>(null);
  const pathContainerRef = useRef<HTMLDivElement>(null);
  const pathInView = useInView(pathContainerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-warm-white text-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Image panel with clip-path reveal + floating badges */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="relative h-[400px] md:h-[520px] overflow-hidden shadow-2xl"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/hero_aviation.png"
                alt="Private Aviation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
            </motion.div>

            {/* Floating fact badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: "backOut" }}
                className="absolute z-10 px-4 py-2 bg-primary/90 backdrop-blur-sm
                           border border-gold/30 text-white text-sm font-medium tracking-wide shadow-lg"
                style={{
                  top:    badge.top,
                  left:   (badge as { left?: string }).left,
                  right:  (badge as { right?: string }).right,
                  bottom: (badge as { bottom?: string }).bottom,
                }}
              >
                <span className="text-gold mr-2">✦</span>{badge.text}
              </motion.div>
            ))}
          </div>

          {/* Right: Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Aviation</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Connecting Destinations Through Private Aviation
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/70 text-lg font-light leading-relaxed"
            >
              <p>
                The Company has participated in the private aviation sector as an investor through
                the acquisition of aircraft for offering chartered flight services.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="flex flex-col items-center text-center p-4 border border-charcoal/10
                             bg-white/60 backdrop-blur-sm hover:border-gold/40 transition-colors"
                >
                  <span className="text-2xl mb-2">{stat.icon}</span>
                  <span className="text-sm font-medium text-charcoal/80 leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated SVG flight-path line */}
            <div ref={pathContainerRef} className="py-4">
              <svg
                viewBox="0 0 400 80"
                className="w-full h-16"
                fill="none"
                aria-hidden="true"
                overflow="visible"
              >
                <motion.path
                  ref={svgRef}
                  d="M0,60 C60,60 80,20 160,20 C240,20 260,55 320,45 C360,38 380,25 400,20"
                  stroke="#B89452"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={pathInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                />
                {/* Airplane dot at the end */}
                <motion.circle
                  cx="400"
                  cy="20"
                  r="4"
                  fill="#B89452"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={pathInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 2.1 }}
                />
                <motion.text
                  x="390"
                  y="14"
                  fontSize="14"
                  initial={{ opacity: 0 }}
                  animate={pathInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  ✈
                </motion.text>
              </svg>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/businesses/aviation"
                className="inline-flex items-center gap-2 text-primary hover:text-gold border-b border-primary/30
                           hover:border-gold pb-1 transition-colors text-sm font-medium tracking-wider uppercase"
              >
                Explore Aviation
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
