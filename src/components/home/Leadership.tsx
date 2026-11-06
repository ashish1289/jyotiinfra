"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "Nava Jyoti Patnaik",
    position: "Managing Director",
    image: "/images/navajyoti_patnaik.png",
    experience: "25+ Years Experience",
    highlights: ["10 MW Solar", "65 MW Wind"],
    number: "01"
  },
  {
    name: "Devjyoti Patnaik",
    position: "Director",
    image: "/images/devjyoti_patnaik.png",
    experience: "25+ Years Experience",
    highlights: ["Automotive Retail", "Solar Power"],
    number: "02"
  },
  {
    name: "Roopali Mohanti",
    position: "Director",
    image: "/images/roopali_mohanti.png",
    experience: "10+ Years Experience",
    highlights: ["Luxury Hospitality", "Taj Brand"],
    number: "03"
  }
];

export function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-warm-white text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Our People
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          >
            Leadership Built on Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal/70 font-light"
          >
            The Board of Directors brings more than 25 years of experience across Mining, Manufacturing, Automobile, Finance, Telecom, Real Estate, Renewable Energy and Hospitality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[400px] w-full overflow-hidden mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black/10"></div>
                
                {/* Number Overlay */}
                <div className="absolute bottom-0 right-0 bg-primary text-gold font-serif text-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {leader.number}
                </div>
              </div>
              
              <div className="relative">
                {/* Animated Gold Line */}
                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                
                <h3 className="font-serif text-3xl font-medium mb-1">{leader.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">{leader.position}</p>
                
                <p className="text-charcoal/70 text-sm mb-4 pb-4 border-b border-black/10">
                  {leader.experience}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {leader.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-soft-beige px-3 py-1 text-xs uppercase tracking-wider font-semibold text-charcoal/80">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
