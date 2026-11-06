import { Hero } from "@/components/home/Hero";
import { Heritage } from "@/components/home/Heritage";
import { KeyNumbers } from "@/components/home/KeyNumbers";
import { BusinessPortfolio } from "@/components/home/BusinessPortfolio";
import { FeaturedAsset } from "@/components/home/FeaturedAsset";
import { RenewableEnergy } from "@/components/home/RenewableEnergy";
import { FinancialServices } from "@/components/home/FinancialServices";
import { Automobile } from "@/components/home/Automobile";
import { Aviation } from "@/components/home/Aviation";
import { Leadership } from "@/components/home/Leadership";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Heritage />
      <KeyNumbers />
      <BusinessPortfolio />
      <RenewableEnergy />
      <FinancialServices />
      <Automobile />
      <Aviation />
      <FeaturedAsset />
      <Leadership />
      <FinalCTA />
    </>
  );
}
