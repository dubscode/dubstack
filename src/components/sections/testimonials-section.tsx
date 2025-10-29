import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';

export function TestimonialsSection() {
  const content = siteConfig.homepage.testimonials;
  return (
    <section id='testimonials' className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='font-serif text-4xl font-bold text-balance text-foreground md:text-5xl'>
            {content.heading}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            {content.description}
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {content.items.map((testimonial) => (
            <Card
              key={testimonial.id}
              className='group border bg-card p-6 backdrop-blur transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
            >
              <div className='mb-4 flex gap-1'>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`${testimonial.id}-star-${i}`}
                    className='h-4 w-4 fill-cyan-400 text-cyan-400'
                  />
                ))}
              </div>

              <blockquote className='mb-6 font-serif text-lg leading-relaxed text-foreground'>
                "{testimonial.quote}"
              </blockquote>

              <div className='border-t border-border pt-4'>
                <p className='font-semibold text-foreground'>
                  {testimonial.author}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
                <p className='mt-1 text-sm text-muted-foreground'>
                  {testimonial.company} • {testimonial.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
