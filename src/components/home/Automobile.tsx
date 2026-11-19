"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Car, Zap, ArrowRight } from "lucide-react";

const brands = [
  { name: "Maruti Suzuki", icon: "🚗", ev: "Hybrid & EV Ready" },
  { name: "Audi",          icon: "🚘", ev: "Luxury e-tron Hub" },
  { name: "TVS Motors",    icon: "🏍️", ev: "Electric Two-Wheelers" },
  { name: "Harley-Davidson", icon: "🛣️", ev: "Premium Lifestyle" },
  { name: "Suzuki",        icon: "🚙", ev: "Global Engineering" },
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
    <section className="py-24 md:py-32 bg-[#0B1528] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/95 to-[#0F2444]/90 z-0" />

      <div ref={sectionRef} className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-blue-400 uppercase tracking-widest text-sm font-bold px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800"
            >
              <Car className="w-4 h-4 text-blue-400" />
              <span>Automotive Retail & Clean Mobility</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Driving the Future of Mobility Across Odisha
            </motion.h2>

            {/* Animated counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-baseline gap-4"
            >
              <span className="font-serif text-6xl text-blue-400 font-bold leading-none">
                <CountUp to={5} />
              </span>
              <span className="text-slate-300 text-lg md:text-xl font-normal">Global & Indian Powerhouse Brands</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-lg md:text-xl text-slate-300 font-normal leading-relaxed"
            >
              <p>
                Since 1996, the Group has spearheaded Odisha’s passenger and two-wheeler retail ecosystem. Today, we are actively spearheading the state’s clean mobility transformation by integrating electric vehicle (EV) charging infrastructure and promoting next-gen hybrid drives.
              </p>
            </motion.div>

            {/* Since 1996 milestone */}
            <motion.div
              ref={lineRef}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 py-2"
            >
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                <motion.div
                  className="w-0.5 bg-blue-500/50 mt-1"
                  initial={{ height: 0 }}
                  animate={lineInView ? { height: 35 } : { height: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
              <div>
                <span className="text-blue-400 font-serif text-2xl font-bold">Since 1996</span>
                <p className="text-slate-400 text-sm mt-0.5">Nearly 30 years of trust and customer satisfaction</p>
              </div>
            </motion.div>

            {/* Brand cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/80 hover:border-blue-500/60 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{brand.icon}</span>
                    <span className="text-white font-semibold text-sm">{brand.name}</span>
                  </div>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {brand.ev}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link
                href="/businesses/automobile"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded shadow-md transition-all group"
              >
                <span>Explore Automobile Retail</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Realistic Image */}
          <motion.div
            className="w-full lg:w-1/2 relative h-[450px] md:h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/realistic/hero_automobile.jpg"
              alt="Jyoti Motors Premium Showroom & Fleet"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
              <p className="text-white font-bold text-base">Over 100,000+ Satisfied Mobility Customers</p>
              <p className="text-slate-400 text-xs mt-1">Certified service centers, digital diagnostics, and EV charging bays.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
