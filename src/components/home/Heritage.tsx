"use client";

import { motion } from "framer-motion";

const timelineData = [
  { year: "1960s", title: "Mining Begins" },
  { year: "1990s", title: "Expansion & Diversification" },
  { year: "2000s", title: "Jyoti Infrastructure Established" },
  { year: "2010s", title: "Renewable Energy & Financial Services" },
  { year: "2020s", title: "Hospitality & Premium Assets" },
];

export function Heritage() {
  return (
    <section className="py-24 md:py-32 bg-warm-white text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Our Heritage</h4>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
                A Legacy Built Over Generations
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-charcoal/80 text-lg font-light leading-relaxed"
            >
              <p>
                Jyoti Infrastructure Private Limited (JIPL), since its inception in 2008, has focused on building a robust tangible asset portfolio with investments in diverse commercial ventures in Delhi, Pondicherry and Bhubaneswar.
              </p>
              <p>
                The roots of JIPL date back to the 1960s when the Promoters and the family started mining operations with a single mine in the Keonjhar district of Western Odisha with a production volume of around 0.2 million tonnes of iron ore and manganese per annum.
              </p>
              <p>
                Over the decades, the group expanded its operations and increased ore production to approximately 4 million tonnes per year.
              </p>
            </motion.div>
          </div>

          {/* Right Timeline */}
          <div className="relative border-l border-primary/20 ml-4 md:ml-12 pl-8 md:pl-16 py-8">
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-3 h-3 bg-gold rounded-full ring-4 ring-warm-white"></div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">
                    {item.year}
                  </h3>
                  <p className="text-charcoal/70 uppercase tracking-widest text-sm font-medium">
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
