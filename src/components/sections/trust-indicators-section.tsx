'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';
import { siteConfig } from '@/config/site';

export function TrustIndicatorsSection() {
  const indicators = siteConfig.homepage.trustIndicators.items;
  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {indicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div key={indicator.label} className='text-center'>
                <div className='mb-4 flex justify-center'>
                  <div className='rounded-full bg-cyan-500/10 p-4'>
                    <Icon className='h-8 w-8 text-cyan-400' />
                  </div>
                </div>
                <div className='mb-2 font-mono text-5xl font-bold text-foreground'>
                  <AnimatedCounter
                    end={indicator.value}
                    suffix={indicator.suffix}
                  />
                </div>
                <p className='text-lg text-muted-foreground'>
                  {indicator.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
