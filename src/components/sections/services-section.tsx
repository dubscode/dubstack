'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const services = siteConfig.homepage.services;

  return (
    <section id='what-we-do' className='py-24 md:py-32'>
      <div className='container mx-auto px-4'>
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl'>
            {services.heading}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-muted-foreground'>
            {services.description}
          </p>
        </div>

        {/* Bento grid layout */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {services.items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof siteConfig.homepage.services.items)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className='group h-full border-border/50 bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'>
        <CardHeader>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'>
            <service.icon className='h-6 w-6' />
          </div>
          <CardTitle className='text-xl'>{service.title}</CardTitle>
          <CardDescription className='text-base leading-relaxed'>
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2'>
            {service.features.map((feature) => (
              <li
                key={feature}
                className='flex items-center gap-2 text-sm text-muted-foreground'
              >
                <div className='h-1.5 w-1.5 rounded-full bg-accent' />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant='link'
            className='mt-4 p-0 text-primary group-hover:gap-2 transition-all'
          >
            <Link href={`/services/${service.slug}`}>
              Learn more{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1'>
                →
              </span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
