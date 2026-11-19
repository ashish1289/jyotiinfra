"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Compass } from "lucide-react";

const timelineData = [
  { year: "1960s", title: "Mining & Resource Beginnings in Keonjhar" },
  { year: "1990s", title: "Automotive Retail & Regional Diversification" },
  { year: "2008", title: "Jyoti Infrastructure Established as Conglomerate Flagship" },
  { year: "2017", title: "Renewable Energy Transition (10 MW Solar with SECI + 65 MW Wind)" },
  { year: "2024", title: "Sustainable Luxury Hospitality (Taj Puri Resort & Spa Launch)" },
];

const stats = [
  { value: 60, suffix: "+", label: "Years of Heritage" },
  { value: 4, suffix: "M+", label: "Tonnes Ore / Year" },
  { value: 75, suffix: " MW", label: "Clean Power Capacity" },
  { value: 7, suffix: "", label: "Core Business Verticals" },
];

function AnimatedCounter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Heritage() {
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-widest text-sm font-bold mb-3"
          >
            <Compass className="w-4 h-4" />
            <span>Our Heritage & Sustainable Roots</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl text-slate-900"
            >
              Six Decades of Responsible Scale & Asset Creation
            </motion.h2>

            {/* Corporate Blue Accent divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-700 text-lg md:text-xl font-normal leading-relaxed"
            >
              <p>
                Jyoti Infrastructure Private Limited (JIPL), established in 2008, serves as the cornerstone holding entity for our diversified commercial enterprises across Odisha, Delhi, and Pan-India.
              </p>
              <p>
                Our industrial lineage began in the 1960s with sustainable open-cast mineral extraction in Western Odisha’s mineral-rich Keonjhar belt. Over the decades, extraction capacity expanded twentyfold—from 0.2 million tonnes to over 4 million tonnes annually—anchored by world-class safety protocols, continuous land reforestation, and dust suppression technologies.
              </p>
              <p>
                Today, that foundational resource strength fuels our aggressive transition toward clean renewable energy, high-efficiency commercial mobility, and green luxury infrastructure.
              </p>
            </motion.div>

            {/* Stat counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-left bg-white p-4 rounded border border-slate-200/80 shadow-sm">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side: Realistic image + timeline */}
          <div className="relative">
            {/* Parallax image panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[380px] lg:h-[460px] overflow-hidden rounded shadow-xl border border-slate-200"
              ref={imageRef}
            >
              {/* Blue border reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute top-0 left-0 right-0 h-1 bg-blue-600 z-20"
              />

              {/* Parallax image: realistic mining */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 scale-105"
              >
                <Image
                  src="/images/photos/mining-open-pit.jpg"
                  alt="Modern Sustainable Mining Operations"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent z-10" />

              {/* "Since 1960s" badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded border border-slate-700"
              >
                <p className="text-blue-400 uppercase tracking-widest text-xs font-bold mb-1">
                  Established Heritage
                </p>
                <p className="font-serif text-4xl font-bold text-white">
                  1960s
                </p>
                <p className="text-xs text-slate-300 mt-1">Keonjhar, Odisha</p>
              </motion.div>
            </motion.div>

            {/* Timeline below image */}
            <div className="relative border-l-2 border-blue-500/40 ml-6 pl-8 py-8 mt-10 space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative group"
                >
                  {/* Pulsing blue dot */}
                  <div className="absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-slate-100">
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 rounded-full bg-blue-400"
                    />
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {item.year}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-medium">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
