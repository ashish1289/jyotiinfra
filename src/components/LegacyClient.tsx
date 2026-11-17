"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const timelineEvents = [
  {
    year: "1960s",
    description: "Mining operations begin in Keonjhar, Odisha.",
    detail:
      "The founding chapter of Jyoti Infrastructure. Iron ore and manganese extraction began in the mineral-rich hills of Keonjhar, laying the bedrock of what would become a diversified conglomerate.",
    image: "/images/hero_mining.png",
    yearNum: 1960,
  },
  {
    year: "1990s",
    description: "Expansion into media, advertising and automobile businesses.",
    detail:
      "Diversification was the keyword of the decade. The group ventured beyond mining, recognising the economic potential in media, advertising, and the burgeoning automobile sector.",
    image: "/images/hero_automobile.png",
    yearNum: 1990,
  },
  {
    year: "1996",
    description: "Jyote Motors established as a TVS dealer.",
    detail:
      "Jyote Motors was incorporated, marking the group's formal entry into the two-wheeler segment as an authorised TVS dealership – a relationship that continues to this day.",
    image: "/images/hero_automobile.png",
    yearNum: 1996,
  },
  {
    year: "2000",
    description: "Expansion into General Motors dealership.",
    detail:
      "The automobile portfolio grew with the addition of a General Motors franchise, broadening the range of vehicles offered to consumers across Odisha.",
    image: "/images/hero_automobile.png",
    yearNum: 2000,
  },
  {
    year: "2001",
    description: "Maruti Suzuki dealership established.",
    detail:
      "Partnering with India's largest car manufacturer, the group opened its Maruti Suzuki showroom, cementing its position as a leading multi-brand automotive retailer in the region.",
    image: "/images/hero_automobile.png",
    yearNum: 2001,
  },
  {
    year: "2008",
    description: "Jyoti Infrastructure Private Limited established.",
    detail:
      "The holding company was formally incorporated, providing a unified corporate structure for the group's growing portfolio of businesses and strategic investments.",
    image: "/images/hero_mining.png",
    yearNum: 2008,
  },
  {
    year: "2013",
    description: "Audi Bhubaneswar launched.",
    detail:
      "The launch of Audi Bhubaneswar signalled the group's ambition in the premium segment, bringing German engineering excellence to the state capital for the first time.",
    image: "/images/hero_automobile.png",
    yearNum: 2013,
  },
  {
    year: "2017",
    description: "10 MW solar project with SECI.",
    detail:
      "The group entered the renewable energy sector with a landmark 10 MW solar power project in partnership with the Solar Energy Corporation of India (SECI), committing to a sustainable future.",
    image: "/images/hero_renewable.png",
    yearNum: 2017,
  },
  {
    year: "2020s",
    description: "Expansion across renewable energy, finance, real estate, aviation and hospitality.",
    detail:
      "A decade of ambitious diversification. Wind energy projects, housing finance, real estate ventures, an aviation division, and hospitality investments transformed the group into a true conglomerate.",
    image: "/images/hero_renewable.png",
    yearNum: 2020,
  },
  {
    year: "2024",
    description: "Taj Puri Resort & Spa begins commercial operations.",
    detail:
      "The 90-key Taj Puri Resort & Spa opened its doors, representing the pinnacle of the group's hospitality ambitions. A landmark moment on India's spiritual coastline.",
    image: "/images/hero_hospitality.png",
    yearNum: 2024,
  },
  {
    year: "Present",
    description: "Diversified asset portfolio across multiple sectors.",
    detail:
      "Today, Jyoti Infrastructure Private Limited is a multi-sector conglomerate with a presence in mining, automobiles, renewable energy, finance, real estate, aviation, and hospitality.",
    image: "/images/hero_renewable.png",
    yearNum: 2025,
  },
];

// Animated counter that counts up when in view
function AnimatedYear({ year, yearNum }: { year: string; yearNum: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const isNumeric = /^\d{4}$/.test(year);
    if (!isNumeric) {
      setDisplayVal(yearNum);
      return;
    }
    const start = yearNum - 30;
    const end = yearNum;
    const duration = 800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayVal(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, year, yearNum]);

  const isNumeric = /^\d{4}$/.test(year);

  return (
    <span ref={ref}>
      {isNumeric ? (isInView ? displayVal : yearNum - 30) : year}
    </span>
  );
}

function TimelineItem({
  item,
}: {
  item: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer group"
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Gold pulsing dot */}
      <motion.div
        className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 bg-gold rounded-full ring-4 ring-warm-white z-10"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(184,148,82,0.5)",
            "0 0 0 10px rgba(184,148,82,0)",
          ],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />

      <div
        className={`rounded-sm border border-primary/10 bg-white/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 ${expanded ? "border-gold/50 shadow-lg shadow-gold/10" : ""}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <motion.h3
              className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedYear year={item.year} yearNum={item.yearNum} />
            </motion.h3>
            <p className="text-charcoal/80 text-lg font-light leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Expand indicator */}
          <motion.div
            className="flex-shrink-0 w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center text-gold text-sm mt-1"
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            +
          </motion.div>
        </div>

        {/* Expanded detail */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            expanded
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-5 mt-5 border-t border-primary/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <p className="text-charcoal/70 font-light leading-relaxed text-base">
              {item.detail}
            </p>
            <div className="relative h-40 rounded-sm overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.year} era`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function LegacyClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const springBgY = useSpring(bgY, { stiffness: 100, damping: 30 });

  return (
    <main className="flex-1 bg-warm-white text-charcoal" ref={containerRef}>
      {/* Hero Header */}
      <div className="pt-24 pb-16 bg-primary text-white text-center relative overflow-hidden">
        {/* Diagonal stripe background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #B89452 0px, #B89452 1px, transparent 1px, transparent 20px)",
          }}
        />

        <motion.div
          className="container mx-auto px-6 md:px-12 mt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Legacy
          </motion.h1>

          {/* Animated gold line separator */}
          <motion.div
            className="h-[2px] bg-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From a Single Mine to a Diversified Business Group
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Parallax diagonal stripe background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: springBgY }}
        >
          <div
            className="w-full h-full opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #B89452 0px, #B89452 2px, transparent 2px, transparent 40px)",
            }}
          />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">
          <div className="relative border-l border-primary/20 ml-4 md:ml-12 pl-8 md:pl-16">
            <div className="space-y-10">
              {timelineEvents.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
