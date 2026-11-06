import { RenewableEnergy } from "@/components/home/RenewableEnergy";

export const metadata = {
  title: "Sustainability | Jyoti Infrastructure",
  description: "Building for tomorrow through renewable energy, responsible growth, and community development.",
};

export default function SustainabilityPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 mt-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">Building for Tomorrow</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Our commitment to sustainable growth and long-term value creation.
          </p>
        </div>
      </div>
      
      <RenewableEnergy />

      <section className="py-24 bg-soft-beige text-charcoal">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary mb-4 border-b-2 border-gold pb-2 inline-block">Responsible Growth</h3>
              <p className="font-light leading-relaxed text-charcoal/80">
                Long-term investment in tangible assets that stand the test of time, ensuring sustained value for our stakeholders and the communities we operate in.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary mb-4 border-b-2 border-gold pb-2 inline-block">Financial Inclusion</h3>
              <p className="font-light leading-relaxed text-charcoal/80">
                Supporting access to small-ticket housing finance to empower the lower-middle-income segment, contributing to broader economic empowerment.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary mb-4 border-b-2 border-gold pb-2 inline-block">Community & Regional Development</h3>
              <p className="font-light leading-relaxed text-charcoal/80">
                Active contribution to business and economic development across Odisha, creating jobs, improving local infrastructure, and fostering regional growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary mb-4 border-b-2 border-gold pb-2 inline-block">Hospitality & Tourism</h3>
              <p className="font-light leading-relaxed text-charcoal/80">
                Developing premium hospitality infrastructure in Puri, promoting tourism while maintaining high standards of environmental and social governance.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
