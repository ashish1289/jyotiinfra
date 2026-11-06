export const metadata = {
  title: "Legacy | Jyoti Infrastructure",
  description: "From a single mine to a diversified business group.",
};

const timelineEvents = [
  { year: "1960s", description: "Mining operations begin in Keonjhar, Odisha." },
  { year: "1990s", description: "Expansion into media, advertising and automobile businesses." },
  { year: "1996", description: "Jyote Motors established as a TVS dealer." },
  { year: "2000", description: "Expansion into General Motors dealership." },
  { year: "2001", description: "Maruti Suzuki dealership established." },
  { year: "2008", description: "Jyoti Infrastructure Private Limited established." },
  { year: "2013", description: "Audi Bhubaneswar launched." },
  { year: "2017", description: "10 MW solar project with SECI." },
  { year: "2020s", description: "Expansion across renewable energy, finance, real estate, aviation and hospitality." },
  { year: "2024", description: "Taj Puri Resort & Spa begins commercial operations." },
  { year: "Present", description: "Diversified asset portfolio across multiple sectors." },
];

export default function LegacyPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 mt-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">Our Legacy</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            From a Single Mine to a Diversified Business Group
          </p>
        </div>
      </div>

      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="relative border-l border-primary/20 ml-4 md:ml-12 pl-8 md:pl-16">
            <div className="space-y-16">
              {timelineEvents.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-4 h-4 bg-gold rounded-full ring-4 ring-warm-white"></div>
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3">
                    {item.year}
                  </h3>
                  <p className="text-charcoal/80 text-lg font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
