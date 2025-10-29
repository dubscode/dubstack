'use client';

import { siteConfig } from '@/config/site';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function WhoWeAreSection() {
  const content = siteConfig.homepage.whoWeAre;
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id='who-we-are' className='py-24 md:py-32'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 lg:grid-cols-5 lg:gap-16'>
          {/* Left column - Main content */}
          <div
            ref={leftRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              leftVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className='font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl'>
              {content.heading}
            </h2>

            <div className='mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground'>
              <p>{content.paragraphs[0]}</p>

              <p className='text-xl font-medium text-foreground'>
                {content.emphasis}
              </p>

              {content.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <blockquote className='border-l-4 border-primary pl-6 italic text-foreground'>
                “{content.quote}”
              </blockquote>
            </div>
          </div>

          {/* Right column - Visual emphasis */}
          <div
            ref={rightRef}
            className={`flex items-center lg:col-span-2 transition-all duration-700 delay-200 ${
              rightVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl' />
              <h3 className='font-serif text-7xl font-bold leading-none text-primary/20 md:text-8xl'>
                {content.highlight}
              </h3>
              <div className='mt-8 space-y-4'>
                {content.attributes.map((attribute) => (
                  <div key={attribute} className='flex items-center gap-3'>
                    <div className='h-1 w-12 bg-primary' />
                    <span className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
                      {attribute}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
