"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";

function Counter({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {prefix}
      <span className="tabular-nums">{count}</span>
      {suffix && (
        <span className="ml-0.5 text-[0.5em] font-medium tracking-normal text-blue-300/80">
          {suffix}
        </span>
      )}
    </span>
  );
}

const stats = [
  { value: 1960, suffix: "s", label: "Mining Legacy Begins", sub: "Western Odisha" },
  { value: 4, suffix: "M+", label: "Tonnes Annual Ore Capacity", sub: "Environmentally Certified" },
  { value: 75, suffix: " MW", label: "Clean Power Portfolio", sub: "10 MW Solar + 65 MW Wind" },
  { value: 120, suffix: "k+ MT", label: "Annual CO₂ Offset", sub: "Clean Energy Impact" },
  { value: 90, label: "Luxury Suites & Rooms", sub: "Taj Puri Resort & Spa" },
  { value: 25, suffix: "+", label: "Years Leadership Tenor", sub: "Proven Governance" },
  { value: 5, suffix: "+", label: "Global Automobile Brands", sub: "Odisha Mobility Hub" },
  { value: 2008, label: "JIPL Inception", sub: "Asset Creation Engine" },
];

export function KeyNumbers() {
  return (
    <section className="py-24 md:py-32 bg-[#0A192F] text-white relative overflow-hidden border-b border-slate-800">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-kn"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-kn)" />
        </svg>
      </div>

      {/* Corporate Blue Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-blue-400 uppercase tracking-[0.2em] text-xs font-semibold mb-6 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Scale, Impact & Performance</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.1] text-white max-w-3xl mx-auto"
          >
            Measurable Scale Across Tangible Assets
          </motion.h2>

          {/* Corporate blue underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="mx-auto mt-6 h-1 w-24 bg-blue-500 rounded-full"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-8 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg flex flex-col items-center justify-between"
            >
              <p className="font-sans text-5xl lg:text-[3.25rem] font-semibold leading-none tracking-[-0.03em] mb-5">
                <span className="text-blue-400">
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={1.8}
                  />
                </span>
              </p>
              <div>
                <p className="text-white text-base font-medium leading-snug mb-2">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-xs uppercase tracking-[0.12em] font-medium leading-normal">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
