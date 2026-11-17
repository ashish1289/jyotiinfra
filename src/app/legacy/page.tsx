import { Metadata } from "next";
import { LegacyClient } from "@/components/LegacyClient";

export const metadata: Metadata = {
  title: "Legacy | Jyoti Infrastructure",
  description: "From a single mine to a diversified business group.",
};

export default function LegacyPage() {
  return <LegacyClient />;
}
