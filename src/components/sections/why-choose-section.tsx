'use client';

import { siteConfig } from '@/config/site';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function WhyChooseSection() {
  const content = siteConfig.homepage.whyChoose;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <section id='why-choose-us' className='py-24 md:py-32'>
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
            {content.heading}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-muted-foreground'>
            {content.description}
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {content.reasons.map((reason, index) => (
            <ReasonCard key={reason.number} reason={reason} index={index} />
          ))}
        </div>

        {/* Additional trust statement */}
        <div
          ref={quoteRef}
          className={`mt-16 text-center transition-all duration-700 delay-600 ${
            quoteVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className='mx-auto max-w-3xl font-serif text-2xl leading-relaxed text-foreground/90'>
            “{content.quote}”
          </p>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof siteConfig.homepage.whyChoose.reasons)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Background decoration */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

      <div className='relative space-y-6 p-8'>
        {/* Number and icon */}
        <div className='flex items-start justify-between'>
          <span className='font-mono text-6xl font-bold text-primary/20 transition-colors group-hover:text-primary/30'>
            {reason.number}
          </span>
          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110'>
            <reason.icon className='h-6 w-6' />
          </div>
        </div>

        {/* Content */}
        <div className='space-y-4'>
          <h3 className='font-serif text-2xl font-bold'>{reason.title}</h3>
          <p className='leading-relaxed text-muted-foreground'>
            {reason.description}
          </p>
          <div className='flex items-center gap-2 pt-2'>
            <div className='h-1 w-8 bg-accent transition-all duration-300 group-hover:w-12' />
            <span className='text-sm font-medium text-accent'>
              {reason.highlight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
