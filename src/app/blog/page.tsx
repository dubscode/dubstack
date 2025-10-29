import { ArrowRight, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: siteConfig.blog.metadata.title,
  description: siteConfig.blog.metadata.description,
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
  );
  const hero = siteConfig.blog.hero;
  const cta = siteConfig.blog.cta;

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 md:py-28'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <span className='inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6'>
              {hero.eyebrow}
            </span>
            <h1 className='font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6'>
              {hero.heading}
            </h1>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='py-12 md:py-16'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className='group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50'
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className='relative aspect-[16/9] overflow-hidden bg-muted'
                >
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.imageAlt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </Link>

                <div className='flex flex-1 flex-col p-6'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground mb-3'>
                    <Calendar className='h-4 w-4' />
                    <time dateTime={post.datePosted}>
                      {formatDate(post.datePosted)}
                    </time>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className='font-serif text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors'>
                      {post.title}
                    </h2>
                  </Link>

                  <p className='text-muted-foreground mb-4 line-clamp-3 flex-1'>
                    {post.metaDescription}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center text-sm font-medium text-primary hover:underline group/link'
                  >
                    Read More
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1' />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='rounded-2xl border border-border bg-card p-8 md:p-12 text-center'>
            <h2 className='font-serif text-3xl font-bold text-foreground mb-4'>
              {cta.heading}
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
              {cta.description}
            </p>
            <Button asChild size='lg' className='group'>
              <Link href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
