import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export const metadata = {
  title: "About Us | Jyoti Infrastructure",
  description: "Learn about the heritage, vision, and scale of Jyoti Infrastructure Private Limited.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_corporate.png"
            alt="Corporate Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-20">
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Who We Are</h4>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
            Building on Legacy.<br/>Driven by Vision.
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-16">
          
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 border-l-4 border-gold pl-4">Our Heritage</h2>
            <div className="text-lg text-charcoal/80 font-light leading-relaxed space-y-6">
              <p>
                Jyoti Infrastructure Private Limited (JIPL), since its inception in 2008, has focused on building a robust tangible asset portfolio with investments in diverse commercial ventures across India.
              </p>
              <p>
                The roots of JIPL date back to the 1960s when the Promoters and the family started mining operations with a single mine in the Keonjhar district of Western Odisha. From a production volume of around 0.2 million tonnes of iron ore and manganese per annum, the group has expanded operations to approximately 4 million tonnes per year over the decades.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 border-l-4 border-gold pl-4">Our Vision</h2>
            <div className="text-lg text-charcoal/80 font-light leading-relaxed space-y-6">
              <p>
                To be a premier diversified business group known for scale, excellence, and the creation of long-term tangible assets that contribute to the economic growth and sustainable development of the regions we operate in.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 border-l-4 border-gold pl-4">Our Assets</h2>
            <div className="text-lg text-charcoal/80 font-light leading-relaxed space-y-6">
              <p>
                Today, the group's portfolio spans across Mining, Automobile Retail, Financial Services, Real Estate, Renewable Energy, Aviation, and Hospitality. We take pride in building infrastructure and businesses that stand the test of time, supported by a leadership team with over 25 years of cross-sectoral experience.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
