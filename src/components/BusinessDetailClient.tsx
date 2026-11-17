"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { businessData } from "@/data/businesses";

/* ─────────────────────────── types ─────────────────────────── */
type BusinessEntry = (typeof businessData)[keyof typeof businessData];

interface KeyFact {
  value: string;
  label: string;
}

interface Props {
  data: BusinessEntry;
  slug: string;
}

/* ───────────────────── key-facts lookup ─────────────────────── */
const keyFactsMap: Record<string, KeyFact[]> = {
  mining: [
    { value: "4M+", label: "Tonnes / Year" },
    { value: "1960s", label: "Founded" },
    { value: "Iron Ore", label: "Primary Ore" },
    { value: "Manganese", label: "Also Mined" },
  ],
  automobile: [
    { value: "5", label: "Leading Brands" },
    { value: "1996", label: "Year Founded" },
    { value: "Maruti", label: "Flagship Brand" },
    { value: "Audi · TVS", label: "Premium Partners" },
  ],
  "financial-services": [
    { value: "NHB", label: "Regulated By" },
    { value: "Small Ticket", label: "Loan Segment" },
    { value: "Odisha+", label: "Presence" },
    { value: "Inclusion", label: "Mission" },
  ],
  "real-estate": [
    { value: "3+", label: "Cities" },
    { value: "Delhi", label: "Market" },
    { value: "Commercial", label: "Focus" },
    { value: "Long-Term", label: "Strategy" },
  ],
  "renewable-energy": [
    { value: "10 MW", label: "Solar Capacity" },
    { value: "65 MW", label: "Wind Capacity" },
    { value: "SECI", label: "Partner" },
    { value: "2017", label: "Year Entered" },
  ],
  aviation: [
    { value: "Pan-India", label: "Operations" },
    { value: "Charter", label: "Service Type" },
    { value: "Private Fleet", label: "Asset Type" },
    { value: "Executive", label: "Client Segment" },
  ],
  hospitality: [
    { value: "90", label: "Keys / Rooms" },
    { value: "Taj Brand", label: "Operator (IHCL)" },
    { value: "Puri", label: "Odisha" },
    { value: "Dec 2024", label: "Launch Date" },
  ],
};

/* ─────────────── related businesses lookup ─────────────────── */
const relatedMap: Record<string, string[]> = {
  mining: ["renewable-energy", "real-estate", "automobile"],
  automobile: ["aviation", "financial-services", "mining"],
  "financial-services": ["real-estate", "automobile", "hospitality"],
  "real-estate": ["financial-services", "mining", "hospitality"],
  "renewable-energy": ["mining", "aviation", "real-estate"],
  aviation: ["automobile", "hospitality", "renewable-energy"],
  hospitality: ["aviation", "real-estate", "financial-services"],
};

/* ──────────────── section reveal animation ─────────────────── */
const cubicEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicEase } },
};

/* ───────────────────── gold bar component ──────────────────── */
function GoldBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="h-[3px] bg-gold/20 overflow-hidden mt-3 mb-6 w-16">
      <motion.div
        className="h-full bg-gold origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, ease: cubicEase }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

/* ──────────────── content section component ────────────────── */
interface SectionProps {
  title: string;
  children: React.ReactNode;
  borderTop?: boolean;
  id?: string;
}

function ContentSection({ title, children, borderTop, id }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${borderTop ? "pt-16 border-t border-black/10" : ""}`}
    >
      <div className="md:col-span-4">
        <h3 className="font-serif text-2xl text-primary">{title}</h3>
        <GoldBar />
      </div>
      <div className="md:col-span-8">{children}</div>
    </motion.div>
  );
}

/* ──────────────── sticky progress dots ─────────────────────── */
const SECTIONS = ["overview", "capabilities", "scale", "outlook"];
const SECTION_LABELS = ["History", "Capabilities", "Scale", "Outlook"];

function ProgressDots({ active }: { active: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {SECTIONS.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            document.getElementById(SECTIONS[i])?.scrollIntoView({ behavior: "smooth" });
          }}
          title={SECTION_LABELS[i]}
          className="relative group flex items-center justify-end gap-2"
        >
          <span className="absolute right-5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-warm-white/90 px-2 py-0.5 rounded shadow-sm">
            {SECTION_LABELS[i]}
          </span>
          <motion.div
            animate={{
              scale: active === i ? 1.4 : 1,
              backgroundColor: active === i ? "#B89452" : "#071A2B",
              opacity: active === i ? 1 : 0.35,
            }}
            transition={{ duration: 0.3 }}
            className="w-2.5 h-2.5 rounded-full"
          />
        </button>
      ))}
    </div>
  );
}

/* ──────────────── key facts card ───────────────────────────── */
function FactCard({ fact }: { fact: KeyFact }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="border border-gold/30 bg-white p-6 text-center hover:border-gold/70 transition-colors"
    >
      <div className="font-serif text-3xl font-bold text-gold mb-1">{fact.value}</div>
      <div className="text-xs uppercase tracking-widest text-primary/60 font-medium">{fact.label}</div>
    </motion.div>
  );
}

/* ─────────────── related business card ─────────────────────── */
function RelatedCard({ slug }: { slug: string }) {
  const d = businessData[slug as keyof typeof businessData];
  if (!d) return null;
  return (
    <Link href={`/businesses/${slug}`} className="group block relative overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={d.heroImage}
          alt={d.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h4 className="font-serif text-xl text-white">{d.title}</h4>
          <p className="text-xs text-gold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore →
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
export function BusinessDetailClient({ data, slug }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  /* Active section tracking */
  const [activeSection, setActiveSection] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.indexOf(entry.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const keyFacts = keyFactsMap[slug] ?? [];
  const related = (relatedMap[slug] ?? []).slice(0, 3);

  /* Hero word-by-word reveal */
  const titleWords = data.title.split(" ");
  const subtitleWords = data.subtitle.split(" ");

  return (
    <>
      <ProgressDots active={activeSection} />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] min-h-[560px] w-full flex items-center justify-center overflow-hidden"
      >
        {/* Parallax image */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 scale-110"
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/65" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-20"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-6"
          >
            Our Businesses
          </motion.p>

          {/* Title words */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6 overflow-hidden">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.08, ease: cubicEase }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Animated gold line */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="h-[2px] bg-gold"
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.9, ease: cubicEase }}
            />
          </div>

          {/* Subtitle words */}
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto overflow-hidden">
            {subtitleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-1.5">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + i * 0.04, ease: cubicEase }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-16">

            {/* History & Overview */}
            <ContentSection title="History & Overview" id="overview">
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                {data.history}
              </p>
            </ContentSection>

            {/* Capabilities */}
            <ContentSection title="Capabilities" id="capabilities">
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                {data.capabilities}
              </p>
            </ContentSection>

            {/* Scale & Presence */}
            <ContentSection title="Scale & Presence" id="scale">
              <div className="space-y-6">
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-primary mb-2">Scale</h4>
                  <p className="text-lg text-charcoal/80 font-light leading-relaxed">{data.scale}</p>
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-bold text-primary mb-2">Geographical Presence</h4>
                  <p className="text-lg text-charcoal/80 font-light leading-relaxed">{data.geographicalPresence}</p>
                </div>
              </div>
            </ContentSection>

            {/* Key Facts grid */}
            {keyFacts.length > 0 && (
              <div className="pt-10">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">At a Glance</p>
                  <h3 className="font-serif text-2xl text-primary">Key Facts</h3>
                  <GoldBar />
                </div>
                <div className={`grid gap-4 ${keyFacts.length <= 3 ? "grid-cols-" + keyFacts.length : "grid-cols-2 md:grid-cols-4"}`}>
                  {keyFacts.map((fact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: cubicEase }}
                    >
                      <FactCard fact={fact} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Future Outlook */}
            <ContentSection title="Future Outlook" id="outlook" borderTop>
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                {data.futureOutlook}
              </p>
            </ContentSection>

          </div>
        </div>
      </section>

      {/* ── Related Businesses ── */}
      {related.length > 0 && (
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mb-10"
            >
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">Explore More</p>
              <h2 className="font-serif text-3xl text-white">Related Businesses</h2>
              <div className="h-[2px] bg-gold/40 mt-3 w-16" />
            </motion.div>
            <div className={`grid gap-6 ${related.length === 1 ? "grid-cols-1" : related.length === 2 ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
              {related.map((relSlug, i) => (
                <motion.div
                  key={relSlug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <RelatedCard slug={relSlug} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
