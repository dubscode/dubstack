import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogContent } from '@/components/blog/blog-content';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { getAllBlogSlugs, getBlogPost, getRecentPosts } from '@/lib/blog-data';
import { calculateReadTime } from '@/lib/utils';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await paramsPromise;
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
      type: 'article',
      publishedTime: post.datePosted,
      modifiedTime: post.dateUpdated,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await paramsPromise;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const readTime = calculateReadTime(post.content);

  const recentPosts = getRecentPosts(4)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const cta = siteConfig.blog.cta;

  return (
    <main className='min-h-screen'>
      {/* Breadcrumb */}
      <div className='border-b border-border bg-background/95'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4'>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Article Header */}
      <article className='py-12 md:py-16'>
        <div className='container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <Link
            href='/blog'
            className='inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 group'
          >
            <ArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
            Back to Blog
          </Link>

          <header className='mb-8'>
            <h1 className='font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6'>
              {post.title}
            </h1>

            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Calendar className='h-4 w-4' />
                <time dateTime={post.datePosted}>
                  {formatDate(post.datePosted)}
                </time>
              </div>
              {post.dateUpdated && post.dateUpdated !== post.datePosted && (
                <span className='text-xs'>
                  Updated: {formatDate(post.dateUpdated)}
                </span>
              )}
            </div>
          </header>

          {/* Featured Image */}
          <div className='relative aspect-[16/9] overflow-hidden rounded-xl bg-muted mb-12'>
            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.imageAlt}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Article Content */}
          <BlogContent
            content={post.content}
            title={post.title}
            readTime={readTime}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className='border-t border-border py-12 md:py-16 bg-muted/30'>
        <div className='container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <div className='rounded-2xl border border-border bg-card p-8 md:p-12 text-center'>
            <h2 className='font-serif text-2xl md:text-3xl font-bold text-foreground mb-4'>
              {cta.heading}
            </h2>
            <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
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

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className='py-12 md:py-16'>
          <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='font-serif text-3xl font-bold text-foreground mb-8'>
              More Insights
            </h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {recentPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className='group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50'
                >
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className='relative aspect-[16/9] overflow-hidden bg-muted'
                  >
                    <Image
                      src={relatedPost.image || '/placeholder.svg'}
                      alt={relatedPost.imageAlt}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </Link>

                  <div className='flex flex-1 flex-col p-6'>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className='font-serif text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors'>
                        {relatedPost.title}
                      </h3>
                    </Link>

                    <p className='text-sm text-muted-foreground mb-4 line-clamp-2 flex-1'>
                      {relatedPost.metaDescription}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
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
      )}
    </main>
  );
}
