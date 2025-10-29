'use client';

import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function CaseStudiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const content = siteConfig.homepage.caseStudies;
  const cardWidth = 500 + 24; // card width + gap

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: checkScroll is stable function, no need in deps
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => scrollElement.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section id='case-studies' className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge
            variant='outline'
            className='mb-4 border-cyan-500/30 text-cyan-400'
          >
            {content.badge}
          </Badge>
          <h2 className='font-serif text-4xl font-bold text-balance md:text-5xl'>
            {content.heading}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            {content.description}
          </p>
        </div>

        <div className='relative'>
          {canScrollLeft && (
            <Button
              onClick={scrollLeft}
              size='icon'
              variant='outline'
              className='absolute left-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur hover:border-cyan-500/50 transition-all shadow-xl'
              aria-label='Scroll left'
            >
              <ChevronLeft className='h-6 w-6' />
            </Button>
          )}

          {canScrollRight && (
            <Button
              onClick={scrollRight}
              size='icon'
              variant='outline'
              className='absolute right-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur hover:border-cyan-500/50 transition-all shadow-xl'
              aria-label='Scroll right'
            >
              <ChevronRight className='h-6 w-6' />
            </Button>
          )}

          {canScrollRight && (
            <div className='absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-[5]' />
          )}

          {canScrollLeft && (
            <div className='absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-[5]' />
          )}

          <div
            ref={scrollRef}
            className='flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-track-muted scrollbar-thumb-muted-foreground/50 hover:scrollbar-thumb-muted-foreground snap-x snap-mandatory'
          >
            {content.items.map((study) => (
              <Card
                key={study.id}
                className='group min-w-[400px] flex-shrink-0 border-border bg-card/50 p-8 backdrop-blur transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 md:min-w-[500px] snap-start'
              >
                <div className='mb-6 flex items-center justify-between'>
                  <div>
                    <Badge
                      variant='secondary'
                      className='mb-2 bg-blue-500/10 text-blue-400'
                    >
                      {study.industry}
                    </Badge>
                    <p className='text-sm text-muted-foreground'>
                      {study.project}
                    </p>
                  </div>
                  <TrendingUp className='h-8 w-8 text-cyan-400' />
                </div>

                <div className='mb-6 space-y-4'>
                  <div>
                    <h4 className='mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                      Challenge
                    </h4>
                    <p className='leading-relaxed text-foreground'>
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className='mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                      Solution
                    </h4>
                    <p className='leading-relaxed text-foreground'>
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className='mb-6 grid grid-cols-2 gap-4 rounded-lg border border-border bg-muted/30 p-4 md:grid-cols-3'>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className='text-center'>
                      <div className='font-mono text-2xl font-bold text-cyan-400'>
                        {metric.value}
                        {metric.suffix ?? ''}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className='border-l-2 border-cyan-500 pl-4 italic text-foreground'>
                  “{study.quote}”
                </blockquote>

                <div className='mt-4'>
                  <p className='font-semibold text-foreground'>
                    {study.client}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {study.clientTitle}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className='mt-8 flex items-center justify-center gap-2'>
          {content.items.map((_, index) => (
            // biome-ignore lint/a11y/useButtonType: visual pagination control
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: indicators map to index
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-cyan-400'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
