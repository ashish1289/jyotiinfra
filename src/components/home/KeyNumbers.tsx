"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1960, suffix: "s", label: "Mining legacy begins", text: "1960s" },
  { value: 2008, label: "Jyoti Infrastructure established", text: "2008" },
  { value: 4, suffix: "M+", label: "Tonnes annual ore production", text: "4M+" },
  { value: 10, suffix: " MW", label: "Solar Power Project", text: "10 MW" },
  { value: 65, suffix: " MW", label: "Wind Energy Portfolio", text: "65 MW" },
  { value: 90, label: "Luxury Rooms & Suites", text: "90" },
  { value: 25, suffix: "+", label: "Years of leadership experience", text: "25+" },
];

// Diagonal decorative SVG lines
function DiagonalLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={i}
          x1={`${i * 14}%`}
          y1="0%"
          x2={`${i * 14 + 30}%`}
          y2="100%"
          stroke="#B89452"
          strokeWidth="0.5"
          strokeOpacity="0.07"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.12, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export function KeyNumbers() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-kn"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-kn)" />
        </svg>
      </div>

      {/* Diagonal decorative lines */}
      <DiagonalLines />

      {/* Radial gold glow — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(184,148,82,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            By The Numbers
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium"
          >
            Scale and Excellence
          </motion.h2>

          {/* Animated gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="mx-auto mt-5 h-px w-24 bg-gold"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center relative"
            >
              {/* Pulsing gold glow behind number */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(184,148,82,0.5) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />

              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative z-10">
                <Counter
                  from={0}
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={1.8}
                />
              </h3>
              <p className="text-gold uppercase tracking-widest text-xs md:text-sm font-medium max-w-[150px] leading-relaxed">
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                style={{ originX: 0.5 }}
                className="mt-4 h-px w-8 bg-gold/40"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
