"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const timelineData = [
  { year: "1960s", title: "Mining Begins" },
  { year: "1990s", title: "Expansion & Diversification" },
  { year: "2000s", title: "Jyoti Infrastructure Established" },
  { year: "2010s", title: "Renewable Energy & Financial Services" },
  { year: "2020s", title: "Hospitality & Premium Assets" },
];

const stats = [
  { value: 60, suffix: "+", label: "Years of Legacy" },
  { value: 4, suffix: "M+", label: "Tonnes/Year" },
  { value: 7, suffix: "", label: "Businesses" },
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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-white text-charcoal overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Our Heritage
          </motion.h4>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-xl"
            >
              A Legacy Built Over Generations
            </motion.h2>

            {/* Animated gold line divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="hidden md:block flex-1 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-charcoal/75 text-lg font-light leading-relaxed"
            >
              <p>
                Jyoti Infrastructure Private Limited (JIPL), since its inception
                in 2008, has focused on building a robust tangible asset
                portfolio with investments in diverse commercial ventures in
                Delhi, Pondicherry and Bhubaneswar.
              </p>
              <p>
                The roots of JIPL date back to the 1960s when the Promoters and
                the family started mining operations with a single mine in the
                Keonjhar district of Western Odisha with a production volume of
                around 0.2 million tonnes of iron ore and manganese per annum.
              </p>
              <p>
                Over the decades, the group expanded its operations and increased
                ore production to approximately 4 million tonnes per year.
              </p>
            </motion.div>

            {/* Stat counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-4 border-t border-charcoal/10"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side: parallax image + timeline overlay */}
          <div className="relative">
            {/* Parallax image panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[380px] lg:h-[480px] overflow-hidden"
              ref={imageRef}
            >
              {/* Animated gold border reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-gold z-20"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                style={{ originY: 0 }}
                className="absolute top-0 right-0 bottom-0 w-0.5 bg-gold z-20"
              />

              {/* Parallax image */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 scale-110"
              >
                <Image
                  src="/images/hero_mining.png"
                  alt="Heritage Mining Operations"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent z-10" />

              {/* "Since 1960s" badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-6 left-6 z-20"
              >
                <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-1">
                  Est.
                </p>
                <p className="font-serif text-5xl font-bold text-white">
                  1960s
                </p>
              </motion.div>
            </motion.div>

            {/* Timeline below image */}
            <div className="relative border-l-2 border-gold/30 ml-6 pl-8 py-8 mt-8 space-y-10">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative group"
                >
                  {/* Pulsing gold dot */}
                  <div className="absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-warm-white">
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 rounded-full bg-gold"
                    />
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-1 group-hover:text-gold transition-colors duration-300">
                    {item.year}
                  </h3>
                  <p className="text-charcoal/60 uppercase tracking-widest text-xs font-medium">
                    {item.title}
                  </p>
                </motion.div>
              ))}

              {/* Animated gold line growing along the border */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                style={{ originY: 0 }}
                className="absolute left-[-1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
