import { BusinessPortfolio } from "@/components/home/BusinessPortfolio";

export const metadata = {
  title: "Our Businesses | Jyoti Infrastructure",
  description: "Explore the diversified business portfolio of Jyoti Infrastructure.",
};

export default function BusinessesPage() {
  return (
    <main className="flex-1 bg-warm-white text-charcoal">
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 mt-20">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-6">Our Businesses</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            A diversified portfolio of investments spanning across key sectors of the Indian economy.
          </p>
        </div>
      </div>
      <BusinessPortfolio />
    </main>
  );
}
