"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import { businessData, BusinessDetail } from "@/data/businesses";
import { Leaf, ChevronRight } from "lucide-react";

interface KeyFact {
  value: string;
  label: string;
}

interface Props {
  data: BusinessDetail;
  slug: string;
}

/* ───────────────────── key-facts lookup ─────────────────────── */
const keyFactsMap: Record<string, KeyFact[]> = {
  mining: [
    { value: "4M+", label: "Tonnes / Year Capacity" },
    { value: "1960s", label: "Heritage Inception" },
    { value: "Zero Effluent", label: "Discharge Standard" },
    { value: "Keonjhar", label: "Mining Heartland" },
  ],
  automobile: [
    { value: "5", label: "Leading Brands" },
    { value: "1996", label: "Establishment" },
    { value: "EV Ready", label: "Charging Network" },
    { value: "100k+", label: "Mobility Clients" },
  ],
  "financial-services": [
    { value: "NHB", label: "Statutory Regulator" },
    { value: "Affordable", label: "Small-Ticket Segment" },
    { value: "Tier 2 & 3", label: "Regional Footprint" },
    { value: "Financial", label: "Inclusion Focus" },
  ],
  "real-estate": [
    { value: "3+", label: "Strategic Metros" },
    { value: "Delhi · Odisha", label: "Commercial Hubs" },
    { value: "IGBC / LEED", label: "Green Guidelines" },
    { value: "Long-Term", label: "Tangible Strategy" },
  ],
  "renewable-energy": [
    { value: "10 MW", label: "Solar Capacity (SECI)" },
    { value: "65 MW", label: "Wind Capacity" },
    { value: "120,000 MT", label: "Annual CO₂ Offset" },
    { value: "25-Yr PPA", label: "SECI Agreement" },
  ],
  aviation: [
    { value: "Pan-India", label: "Flight Network" },
    { value: "VIP Charter", label: "On-Demand Flight" },
    { value: "Executive", label: "Private Fleet" },
    { value: "DGCA", label: "Safety Standard" },
  ],
  hospitality: [
    { value: "90 Keys", label: "Beachside Luxury" },
    { value: "Taj (IHCL)", label: "Operator Brand" },
    { value: "Puri Coast", label: "Bay of Bengal" },
    { value: "Plastic-Free", label: "Eco-Conscious" },
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

const cubicEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cubicEase } },
};

function BlueBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="h-1 bg-slate-200 overflow-hidden mt-3 mb-6 w-20 rounded-full">
      <motion.div
        className="h-full bg-blue-600 origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, ease: cubicEase }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

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
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${borderTop ? "pt-16 border-t border-slate-200" : ""}`}
    >
      <div className="md:col-span-4">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
        <BlueBar />
      </div>
      <div className="md:col-span-8">{children}</div>
    </motion.div>
  );
}

function FactCard({ fact }: { fact: KeyFact }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="border border-slate-200 bg-white p-6 rounded-xl text-center hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="font-serif text-3xl font-bold text-blue-700 mb-1">{fact.value}</div>
      <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{fact.label}</div>
    </motion.div>
  );
}

function RelatedCard({ slug }: { slug: string }) {
  const d = businessData[slug];
  if (!d) return null;
  return (
    <Link href={`/businesses/${slug}`} className="group block relative overflow-hidden rounded-xl border border-slate-700 shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={d.heroImage}
          alt={d.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h4 className="font-serif text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{d.title}</h4>
          <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Explore Sector</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </Link>
  );
}

export function BusinessDetailClient({ data, slug }: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const keyFacts = keyFactsMap[slug] ?? [];
  const related = (relatedMap[slug] ?? []).slice(0, 3);

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[78vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden bg-[#0A192F]"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 scale-105"
        >
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/85 via-[#0A192F]/60 to-[#0A192F]/90" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-sm font-semibold uppercase tracking-wider mb-6"
          >
            <span>Strategic Business Vertical</span>
          </motion.div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight">
            {data.title}
          </h1>

          <div className="flex justify-center mb-6">
            <motion.div
              className="h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
            />
          </div>

          <p className="text-xl md:text-2xl font-normal text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-16">

            {/* History & Overview */}
            <ContentSection title="History & Strategic Roots" id="overview">
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                {data.history}
              </p>
            </ContentSection>

            {/* Capabilities */}
            <ContentSection title="Operational Capabilities" id="capabilities" borderTop>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                {data.capabilities}
              </p>
            </ContentSection>

            {/* Scale & Presence */}
            <ContentSection title="Scale & Footprint" id="scale" borderTop>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="uppercase tracking-wider text-xs font-bold text-blue-600 mb-2">Operational Scale</h4>
                  <p className="text-lg md:text-xl text-slate-800 font-semibold leading-relaxed">{data.scale}</p>
                </div>
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="uppercase tracking-wider text-xs font-bold text-blue-600 mb-2">Geographical Presence</h4>
                  <p className="text-lg md:text-xl text-slate-800 font-semibold leading-relaxed">{data.geographicalPresence}</p>
                </div>
              </div>
            </ContentSection>

            {/* Key Facts grid */}
            {keyFacts.length > 0 && (
              <div className="pt-6">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-1">Performance Benchmarks</p>
                  <h3 className="font-serif text-3xl font-bold text-slate-900">Key Facts At a Glance</h3>
                  <BlueBar />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {keyFacts.map((fact, i) => (
                    <FactCard key={i} fact={fact} />
                  ))}
                </div>
              </div>
            )}

            {/* Dedicated Sustainability & ESG Section */}
            <ContentSection title="Sustainability & ESG Impact" id="sustainability" borderTop>
              <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-base uppercase tracking-wider">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span>ESG Pillar & Environmental Stewardship</span>
                </div>
                <p className="text-lg md:text-xl text-slate-800 font-normal leading-relaxed">
                  {data.sustainabilityCommitment}
                </p>
              </div>
            </ContentSection>

            {/* Future Outlook */}
            <ContentSection title="Future Vision & Outlook" id="outlook" borderTop>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                {data.futureOutlook}
              </p>
            </ContentSection>

          </div>
        </div>
      </section>

      {/* ── Related Businesses ── */}
      {related.length > 0 && (
        <section className="py-24 bg-[#0A192F] text-white border-t border-slate-800">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Diversified Conglomerate</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Explore Complementary Sectors</h2>
              <div className="h-1 bg-blue-500 mt-4 w-20 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relSlug) => (
                <RelatedCard key={relSlug} slug={relSlug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
