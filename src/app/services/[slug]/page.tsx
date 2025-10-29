import { servicesData } from '@/lib/services-data';
import ServicePageClient from './client';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
