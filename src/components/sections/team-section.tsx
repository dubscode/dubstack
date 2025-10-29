import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';

export function TeamSection() {
  const content = siteConfig.homepage.team;
  return (
    <section id='team' className='py-24 bg-muted'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='font-serif text-4xl font-bold text-balance md:text-5xl'>
            {content.heading}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            {content.description}
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {content.members.map((member) => (
            <Card
              key={member.id}
              className='group overflow-hidden border-border bg-card/50 backdrop-blur transition-all hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
            >
              <div className='relative aspect-square overflow-hidden'>
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className='object-cover transition-all duration-300 group-hover:scale-105'
                />
              </div>

              <div className='p-6'>
                <h3 className='font-serif text-xl font-bold text-foreground'>
                  {member.name}
                </h3>
                <p className='mb-3 text-sm font-semibold text-cyan-400'>
                  {member.role}
                </p>
                <p className='mb-4 text-sm leading-relaxed text-muted-foreground'>
                  {member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className='inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyan-400'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='h-4 w-4' />
                    View profile
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
