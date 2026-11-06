import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { businessData } from "@/data/businesses";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(businessData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const data = businessData[resolvedParams.slug as keyof typeof businessData];
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.title} | Jyoti Infrastructure`,
    description: data.subtitle,
  };
}

async function BusinessDetails({ params }: Props) {
  const resolvedParams = await params;
  const data = businessData[resolvedParams.slug as keyof typeof businessData];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white pt-20">
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Our Businesses</h4>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-16">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary border-l-4 border-gold pl-4">History & Overview</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                  {data.history}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary border-l-4 border-gold pl-4">Capabilities</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                  {data.capabilities}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary border-l-4 border-gold pl-4">Scale & Presence</h3>
              </div>
              <div className="md:col-span-8">
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
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 border-t border-black/10">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary border-l-4 border-gold pl-4">Future Outlook</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                  {data.futureOutlook}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function BusinessPage({ params }: Props) {
  return (
    <main className="flex-1 bg-warm-white">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-warm-white"><div className="animate-pulse text-primary font-serif text-2xl">Loading...</div></div>}>
        <BusinessDetails params={params} />
      </Suspense>
    </main>
  );
}
