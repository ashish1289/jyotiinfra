"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Nava Jyoti Patnaik",
    position: "Managing Director",
    image: "/images/navajyoti_patnaik.png",
    experience: "25+ Years Experience",
    highlights: ["10 MW Solar with SECI", "65 MW Wind Energy", "Sustainable Mining & Steel"],
    number: "01",
    bio: "Pioneered the Group's clean energy transition and integrated steel manufacturing with extensive cross-sectoral governance.",
  },
  {
    name: "Devjyoti Patnaik",
    position: "Director",
    image: "/images/devjyoti_patnaik.png",
    experience: "25+ Years Experience",
    highlights: ["Automotive Retail Giant", "Odisha EV Transition", "Solar Power Investments"],
    number: "02",
    bio: "Transformed automobile retail across Odisha since 1996, creating premium brand experiences and driving green mobility.",
  },
  {
    name: "Roopali Mohanti",
    position: "Director",
    image: "/images/roopali_mohanti.png",
    experience: "10+ Years Experience",
    highlights: ["Taj Puri Resort & Spa", "IHCL Brand Alliance", "Eco-Conscious Tourism"],
    number: "03",
    bio: "Extensive background with IHCL luxury properties, spearheading world-class sustainable beachside resort hospitality.",
  }
];

export function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-widest text-sm font-bold mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200"
          >
            <Users className="w-4 h-4 text-blue-600" />
            <span>Visionary Stewardship</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900"
          >
            Leadership Built on Decades of Proven Integrity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed"
          >
            Our Board combines over 25 years of cross-sectoral excellence across Natural Resources, Renewable Energy, Automobile Retail, Financial Inclusion, and Ultra-Luxury Hospitality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-[380px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/90 text-blue-400 font-serif text-xl font-bold px-3.5 py-1.5 rounded border border-slate-700">
                    {leader.number}
                  </div>
                </div>
                
                <div className="p-7 space-y-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                    {leader.position}
                  </p>
                  
                  <p className="text-slate-500 text-sm font-semibold pb-3 border-b border-slate-100">
                    {leader.experience}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <div className="flex flex-wrap gap-2">
                  {leader.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-xs uppercase tracking-wider font-semibold text-slate-700 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base uppercase tracking-wider group"
          >
            <span>Read Complete Board Profiles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
