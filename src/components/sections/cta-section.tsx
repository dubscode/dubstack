'use client';

import { ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import posthog from 'posthog-js';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function CtaSection() {
  const cta = siteConfig.homepage.cta;
  const contact = siteConfig.contact;
  return (
    <section className='relative overflow-hidden py-24 bg-gradient-to-br from-background via-blue-500/5 to-background'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20' />

      <div className='container relative mx-auto px-4 text-center'>
        <h2 className='font-serif text-4xl font-bold text-balance md:text-5xl lg:text-6xl'>
          {cta.heading}
        </h2>
        <p className='mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground'>
          {cta.description}
        </p>

        <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Button
            size='lg'
            asChild
            className='group bg-cyan-500 text-neutral-950 hover:bg-cyan-400'
          >
            <Link
              href={cta.primaryCta.href}
              onClick={() => {
                if (cta.primaryCta.trackingEvent) {
                  posthog.capture(cta.primaryCta.trackingEvent, {
                    cta_text: cta.primaryCta.label,
                  });
                }
              }}
            >
              {cta.primaryCta.label}
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
          {cta.secondaryCta && (
            <Button
              size='lg'
              variant='outline'
              className='hover:border-cyan-500 bg-transparent'
              asChild
            >
              <Link
                href={cta.secondaryCta.href}
                onClick={() => {
                  if (cta.secondaryCta?.trackingEvent) {
                    posthog.capture(cta.secondaryCta.trackingEvent, {
                      cta_text: cta.secondaryCta.label,
                    });
                  }
                }}
              >
                {cta.secondaryCta.label}
              </Link>
            </Button>
          )}
        </div>

        <div className='mt-16 flex flex-col items-center justify-center gap-8 border-t border-border pt-12 sm:flex-row sm:gap-16'>
          <div className='flex items-center gap-3'>
            <div className='rounded-full bg-cyan-500/10 p-3'>
              <Mail className='h-5 w-5 text-cyan-400' />
            </div>
            <div className='text-left'>
              <p className='text-sm text-muted-foreground'>Email Us</p>
              <a
                href={`mailto:${contact.email}`}
                className='text-foreground hover:text-cyan-400'
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='rounded-full bg-cyan-500/10 p-3'>
              <Phone className='h-5 w-5 text-cyan-400' />
            </div>
            <div className='text-left'>
              <p className='text-sm text-muted-foreground'>Call Us</p>
              <a
                href={`tel:${contact.phone}`}
                className='text-foreground hover:text-cyan-400'
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
