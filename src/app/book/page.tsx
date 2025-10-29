import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.booking.metadata.title,
  description: siteConfig.booking.metadata.description,
};

export default function BookingPage() {
  const booking = siteConfig.booking;
  const benefitIcons = [Calendar, Clock, CheckCircle2];
  return (
    <>
      {/* Hero Section */}
      <section className='relative border-b border-border/40 bg-gradient-to-b from-background via-background to-background/95'>
        <div className='container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance'>
              {booking.hero.heading}
            </h1>
            <p className='mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty'>
              {booking.hero.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className='mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3'>
            {booking.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <div
                  key={benefit.title}
                  className='flex flex-col items-center rounded-lg border border-border/40 bg-card/50 p-6 text-center backdrop-blur'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                    <Icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='mt-4 font-semibold text-foreground'>
                    {benefit.title}
                  </h3>
                  <p className='mt-2 text-sm text-muted-foreground'>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className='py-16 sm:py-24'>
        <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur'>
            <div className='p-4 sm:p-8'>
              <div className='mb-6 text-center'>
                <h2 className='font-serif text-2xl font-bold text-foreground sm:text-3xl'>
                  Choose Your Time
                </h2>
                <p className='mt-2 text-muted-foreground'>
                  Select a date and time that works best for you
                </p>
              </div>

              {/* Google Calendar Embed */}
              <div className='relative w-full overflow-hidden rounded-lg border border-border/40 bg-background'>
                <iframe
                  src={booking.embed.url}
                  style={{ border: 0 }}
                  width='100%'
                  height='600'
                  frameBorder='0'
                  title={booking.embed.title}
                  className='w-full'
                />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className='mt-12 rounded-xl border border-border/40 bg-card/20 p-6 backdrop-blur sm:p-8'>
            <h3 className='font-serif text-xl font-semibold text-foreground'>
              What to Expect
            </h3>
            <ul className='mt-4 space-y-3 text-muted-foreground'>
              {booking.steps.map((step, index) => (
                <li key={step} className='flex items-start gap-3'>
                  <span className='mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary'>
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
