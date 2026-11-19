import { notFound } from "next/navigation";
import { businessData } from "@/data/businesses";
import { BusinessDetailClient } from "@/components/BusinessDetailClient";

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

export default async function BusinessPage({ params }: Props) {
  const resolvedParams = await params;
  const data = businessData[resolvedParams.slug as keyof typeof businessData];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex-1 bg-warm-white">
      <BusinessDetailClient data={data} slug={resolvedParams.slug} />
    </div>
  );
}
