import { Leadership as LeadershipComponent } from "@/components/home/Leadership";

export const metadata = {
  title: "Leadership | Jyoti Infrastructure",
  description: "Meet the leadership team of Jyoti Infrastructure Private Limited.",
};

export default function LeadershipPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 mt-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">Board of Directors</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Decades of experience guiding our vision across multiple sectors.
          </p>
        </div>
      </div>
      
      {/* Reusing the home page leadership component for now. In a full app, this would be expanded. */}
      <LeadershipComponent />

      <section className="py-24 bg-soft-beige">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-4 border-l-4 border-gold pl-4">
               <h3 className="font-serif text-2xl text-primary">Nava Jyoti Patnaik</h3>
               <p className="text-sm uppercase tracking-widest font-semibold text-primary mt-1">Managing Director</p>
             </div>
             <div className="md:col-span-8 text-charcoal/80 font-light leading-relaxed space-y-4">
               <p><strong>Education:</strong> Bachelor of Engineering in Industrial & Production, Manipal Institute of Technology, Karnataka</p>
               <p>More than 25 years of experience across Mining, Steel Industry, Manufacturing, Automobile, Finance, Telecom, Real Estate, Renewable and Wind Energy.</p>
               <p>Joined the family business of Mining and Steel Industries after a brief stint with Mobar India Ltd. Established a mid-size integrated secondary steel manufacturing plant as a greenfield project at Rourkela, Odisha.</p>
               <p>Involved in automobile dealership operations along with his brother in Odisha, comprising Maruti Suzuki, Harley-Davidson, Audi and TVS Motors. Successfully executed a 10 MW greenfield Solar Power Project with SECI and has a portfolio of 65 MW of Wind Energy.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-black/10 pt-16">
             <div className="md:col-span-4 border-l-4 border-gold pl-4">
               <h3 className="font-serif text-2xl text-primary">Devjyoti Patnaik</h3>
               <p className="text-sm uppercase tracking-widest font-semibold text-primary mt-1">Director</p>
             </div>
             <div className="md:col-span-8 text-charcoal/80 font-light leading-relaxed space-y-4">
               <p><strong>Education:</strong> Bachelor of Commerce, BJB College, Utkal University, Odisha</p>
               <p>More than 25 years of experience in Automobile, Media, Advertising, Mining Business and Solar Power.</p>
               <p>Started Jyote Motors in 1996 as a TVS dealer in Odisha. His marketing strategies and vision for creating a luxury automobile market in Odisha contributed to Jyote Group becoming one of the successful automobile dealer groups in the state.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-black/10 pt-16">
             <div className="md:col-span-4 border-l-4 border-gold pl-4">
               <h3 className="font-serif text-2xl text-primary">Roopali Mohanti</h3>
               <p className="text-sm uppercase tracking-widest font-semibold text-primary mt-1">Director</p>
             </div>
             <div className="md:col-span-8 text-charcoal/80 font-light leading-relaxed space-y-4">
               <p><strong>Education:</strong> Institute of Hotel Management Catering Technology and Applied Nutrition, Kolkata (1993–96). Bachelor of Arts, Delhi University.</p>
               <p>More than 10 years of work experience in the Hospitality Industry.</p>
               <p>Worked with IHCL (Indian Hotels Company Limited, a TATA Group Company), including Taj Mahal Mumbai, Taj Fort Aguada Goa, Taj Coromandel Chennai and Taj Bengal Kolkata as FOM.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
