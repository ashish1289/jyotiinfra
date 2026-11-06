"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    title: "Mining",
    description: "Building on decades of experience in mining and natural resources.",
    image: "/images/hero_mining.png",
    link: "/businesses/mining",
  },
  {
    title: "Automobile",
    description: "Dealership operations representing leading global and Indian brands.",
    image: "/images/hero_automobile.png",
    link: "/businesses/automobile",
  },
  {
    title: "Financial Services",
    description: "Investment in housing finance serving the lower-middle-income segment.",
    image: "/images/hero_financial.png",
    link: "/businesses/financial-services",
  },
  {
    title: "Real Estate",
    description: "Commercial and real estate investments across key locations.",
    image: "/images/hero_realestate.png",
    link: "/businesses/real-estate",
  },
  {
    title: "Renewable Energy",
    description: "Solar and wind energy investments contributing to India's clean energy transition.",
    image: "/images/hero_renewable.png",
    link: "/businesses/renewable-energy",
  },
  {
    title: "Aviation",
    description: "Investment in private aviation and charter flight services.",
    image: "/images/hero_aviation.png",
    link: "/businesses/aviation",
  },
  {
    title: "Hospitality",
    description: "Premium hospitality assets including the Taj Puri Resort & Spa.",
    image: "/images/hero_hospitality.png",
    link: "/businesses/hospitality",
  },
];

export function BusinessPortfolio() {
  return (
    <section className="py-24 md:py-32 bg-soft-beige">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-widest text-sm font-semibold mb-4"
            >
              Our Portfolio
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal max-w-2xl"
            >
              Diversified Businesses. One Vision.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/businesses" 
              className="inline-flex items-center gap-2 uppercase tracking-wider text-sm font-bold text-primary hover:text-gold transition-colors group"
            >
              View All Businesses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <Link href={business.link} key={index} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[450px] w-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10" />
                
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-3xl text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {business.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-white/80 font-light text-sm opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 mb-6">
                      {business.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gold uppercase tracking-wider text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
