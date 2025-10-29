'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function HeroSection() {
  const [count, setCount] = useState(0);
  const hero = siteConfig.homepage.hero;
  const targetMetric = hero.metric.value;

  useEffect(() => {
    if (count < targetMetric) {
      const timer = setTimeout(() => setCount(count + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [count, targetMetric]);

  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5' />

      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />

      <div className='container relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          {/* Badge */}
          <div className='mb-8 inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary'>
            <TrendingUp className='h-4 w-4' />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className='mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance'>
            {hero.title} <span className='text-primary'>{hero.highlight}</span>
          </h1>

          {/* Subheadline */}
          <p className='mb-8 text-xl text-muted-foreground leading-relaxed sm:text-2xl text-balance'>
            {hero.description}
          </p>

          {/* Stats */}
          <div className='mb-12 flex items-center justify-center space-x-2 text-accent'>
            <span className='font-mono text-5xl font-bold'>
              {count}
              {hero.metric.suffix}
            </span>
            <span className='text-lg text-muted-foreground'>
              {hero.metric.label}
            </span>
          </div>

          {/* CTAs */}
          <div className='flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
            <Button
              asChild
              size='lg'
              className='group'
              onClick={() => {
                if (hero.primaryCta.trackingEvent) {
                  posthog.capture(hero.primaryCta.trackingEvent, {
                    destination: hero.primaryCta.href,
                  });
                }
              }}
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </Button>
            {hero.secondaryCta && (
              <Button
                asChild
                size='lg'
                variant='outline'
                onClick={() => {
                  if (hero.secondaryCta?.trackingEvent) {
                    posthog.capture(hero.secondaryCta.trackingEvent, {
                      destination: hero.secondaryCta.href,
                    });
                  }
                }}
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent' />
    </section>
  );
}
