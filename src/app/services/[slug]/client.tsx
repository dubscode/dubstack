'use client'; // Added client directive for scroll behavior

import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import posthog from 'posthog-js';
import { useEffect } from 'react'; // Added useEffect import
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getRelatedServices, getServiceBySlug } from '@/lib/services-data';

export default function ServicePageClient({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);

  // biome-ignore lint/correctness/useExhaustiveDependencies: slug needed to scroll on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedServices);
  const ServiceIcon = service.icon;

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#what-we-do' },
            { label: service.title },
          ]}
        />

        {/* Hero Section */}
        <section className='mb-16 md:mb-24'>
          <div className='flex items-start gap-6'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary'>
              <ServiceIcon className='h-8 w-8' />
            </div>
            <div className='flex-1'>
              <h1 className='font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl'>
                {service.headline}
              </h1>
              <p className='mt-4 text-xl text-muted-foreground leading-relaxed max-w-3xl'>
                {service.description}
              </p>
              <div className='mt-8 flex flex-wrap gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='group'
                  onClick={() =>
                    posthog.capture('schedule_consultation_clicked', {
                      service_slug: service.slug,
                      service_title: service.title,
                      location: 'hero',
                    })
                  }
                >
                  <Link href='/book'>
                    Schedule Consultation
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </Button>
                <Button asChild variant='outline' size='lg'>
                  <Link href='/#case-studies'>View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className='mb-16 md:mb-24'>
          <div className='grid gap-12 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
              <h2 className='font-serif text-3xl font-bold mb-6'>
                {service.overview.title}
              </h2>
              <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
                {service.overview.content.map((paragraph, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content never reorders
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div>
              <Card className='border-primary/20 bg-primary/5'>
                <CardHeader>
                  <CardTitle className='text-lg'>Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>
                    {service.overview.targetAudience}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='mb-16 md:mb-24'>
          <h2 className='font-serif text-3xl font-bold mb-12 text-center'>
            Key Benefits
          </h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = (
                Icons as unknown as Record<string, LucideIcon>
              )[benefit.icon];
              return (
                <Card
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content never reorders
                  key={index}
                  className='border-border/50 bg-card/50 backdrop-blur'
                >
                  <CardHeader>
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      <BenefitIcon className='h-6 w-6' />
                    </div>
                    <CardTitle className='text-lg'>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground leading-relaxed'>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className='mb-16 md:mb-24'>
          <h2 className='font-serif text-3xl font-bold mb-12 text-center'>
            How It Works
          </h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {service.process.map((step) => (
              <div key={step.step} className='relative'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg'>
                  {step.step}
                </div>
                <h3 className='font-semibold text-lg mb-2'>{step.title}</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included Section */}
        <section className='mb-16 md:mb-24'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <h2 className='font-serif text-3xl font-bold mb-6'>
                What's Included
              </h2>
              <ul className='space-y-3'>
                {service.included.map((item, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content never reorders
                  <li key={index} className='flex items-start gap-3'>
                    <CheckCircle2 className='h-6 w-6 shrink-0 text-primary mt-0.5' />
                    <span className='text-muted-foreground leading-relaxed'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='font-serif text-3xl font-bold mb-6'>
                Expected Outcomes
              </h2>
              <div className='space-y-6'>
                {service.outcomes.map((outcome, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content never reorders
                  <div key={index}>
                    <div className='text-2xl font-bold text-primary mb-2'>
                      {outcome.metric}
                    </div>
                    <p className='text-muted-foreground leading-relaxed'>
                      {outcome.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='mb-16 md:mb-24'>
          <h2 className='font-serif text-3xl font-bold mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-3xl mx-auto'>
            <Accordion type='single' collapsible className='space-y-4'>
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  // biome-ignore lint/suspicious/noArrayIndexKey: static content never reorders
                  key={index}
                  value={`item-${index}`}
                  className='border rounded-lg px-6'
                >
                  <AccordionTrigger
                    className='text-left font-semibold hover:no-underline'
                    onClick={() =>
                      posthog.capture('faq_toggled', {
                        service_slug: service.slug,
                        service_title: service.title,
                        question: faq.question,
                      })
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground leading-relaxed'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services Section */}
        {relatedServices.length > 0 && (
          <section className='mb-16 md:mb-24'>
            <h2 className='font-serif text-3xl font-bold mb-12 text-center'>
              Related Services
            </h2>
            <div className='grid gap-6 md:grid-cols-3'>
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <Card
                    key={relatedService.slug}
                    className='group border-border/50 bg-card/50 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1'
                  >
                    <CardHeader>
                      <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground'>
                        <RelatedIcon className='h-6 w-6' />
                      </div>
                      <CardTitle className='text-lg'>
                        {relatedService.title}
                      </CardTitle>
                      <CardDescription className='leading-relaxed'>
                        {relatedService.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant='link'
                        className='p-0 group-hover:gap-2 transition-all'
                      >
                        <Link href={`/services/${relatedService.slug}`}>
                          Learn more{' '}
                          <span className='inline-block transition-transform group-hover:translate-x-1'>
                            →
                          </span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Final CTA Section */}
        <section className='rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-12 text-center'>
          <h2 className='font-serif text-3xl font-bold mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Let's discuss how {service.title.toLowerCase()} can drive revenue
            growth for your property.
          </p>
          <Button
            asChild
            size='lg'
            className='group'
            onClick={() =>
              posthog.capture('schedule_consultation_clicked', {
                service_slug: service.slug,
                service_title: service.title,
                location: 'final_cta',
              })
            }
          >
            <Link href='/book'>
              Schedule Your Free Consultation
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
