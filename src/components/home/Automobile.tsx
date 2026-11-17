"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const brands = [
  { name: "Maruti Suzuki", icon: "🚗" },
  { name: "TVS Motors",    icon: "🏍️" },
  { name: "Audi",          icon: "🚘" },
  { name: "Harley-Davidson", icon: "🛣️" },
  { name: "Suzuki",        icon: "🚙" },
];

function CountUp({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Automobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Background tint (no image, the right panel shows the image) */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal to-charcoal/90 z-0" />

      <div ref={sectionRef} className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Text content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Label */}
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-widest text-sm font-semibold"
            >
              Automobile Retail
            </motion.h4>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              Driving Mobility Across Odisha
            </motion.h2>

            {/* Animated counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-baseline gap-3"
            >
              <span className="font-serif text-6xl text-gold font-medium leading-none">
                <CountUp to={5} />
              </span>
              <span className="text-white/60 text-lg font-light">Leading Brands</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 font-light leading-relaxed"
            >
              The Group has built a strong presence in automobile dealerships across Odisha,
              representing leading brands and creating a successful automotive retail network.
            </motion.p>

            {/* Since 1996 milestone */}
            <motion.div
              ref={lineRef}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <motion.div
                  className="w-[2px] bg-gold/50 mt-1"
                  initial={{ height: 0 }}
                  animate={lineInView ? { height: 40 } : { height: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
              <div>
                <span className="text-gold font-serif text-2xl font-medium">Since 1996</span>
                <p className="text-white/50 text-sm mt-1">Over 28 years in automotive retail</p>
              </div>
            </motion.div>

            {/* Brand cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="relative overflow-hidden px-5 py-3 bg-white/5 border border-white/10
                             backdrop-blur-sm text-white font-serif text-base hover:border-gold/40
                             transition-colors cursor-default group"
                >
                  {/* Shine sweep on hover */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                               bg-gradient-to-r from-transparent via-white/10 to-transparent
                               transition-transform duration-700 ease-in-out pointer-events-none"
                  />
                  <span className="mr-2 text-sm">{brand.icon}</span>
                  {brand.name}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/businesses/automobile"
                className="inline-flex items-center gap-2 text-gold hover:text-white border-b border-gold/50
                           hover:border-white pb-1 transition-colors text-sm font-medium tracking-wider uppercase"
              >
                Explore Automobile
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Image panel with clip-path reveal */}
          <motion.div
            className="w-full lg:w-1/2 relative h-[400px] md:h-[520px] overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Image
              src="/images/hero_automobile.png"
              alt="Automobile Fleet"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
