'use client';

import { Clock, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BlogContentProps {
  content: string;
  title: string;
  readTime?: number;
}

export function BlogContent({ content, title, readTime }: BlogContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <>
      {/* Reading progress bar */}
      <div className='fixed top-0 left-0 right-0 h-1 bg-muted z-50'>
        <div
          className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-150'
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced blog content with rich styling */}
      <div className='blog-content-wrapper'>
        {/* Read time and share */}
        <div className='flex items-center justify-between mb-8 pb-6 border-b border-border'>
          {readTime && (
            <div className='flex items-center gap-2 text-muted-foreground'>
              <Clock className='w-4 h-4' />
              <span className='text-sm font-medium'>{readTime} min read</span>
            </div>
          )}
          <button
            type='button'
            onClick={handleShare}
            className='flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all'
            aria-label='Share article'
          >
            <Share2 className='w-4 h-4' />
            <span className='text-sm font-medium'>Share</span>
          </button>
        </div>

        {/* Enhanced content with custom styling */}
        <div
          className='blog-content prose prose-lg max-w-none'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is from controlled CSV source, processed and stored in codebase
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <style jsx global>{`
        .blog-content-wrapper {
          /* Base typography improvements */
          .blog-content {
            color: var(--foreground);
            line-height: 1.75;
          }

          /* First paragraph - lead text styling */
          .blog-content > p:first-of-type {
            font-size: 1.25rem;
            line-height: 1.8;
            color: var(--muted-foreground);
            margin-bottom: 2rem;
            font-weight: 500;
          }

          /* Paragraph styling */
          .blog-content p {
            margin-bottom: 1.5rem;
            color: var(--foreground);
            line-height: 1.8;
          }

          /* Heading styling with accent colors and spacing */
          .blog-content h2 {
            font-family: var(--font-serif);
            font-size: 2rem;
            font-weight: 700;
            color: var(--foreground);
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid var(--border);
            position: relative;
          }

          .blog-content h2::before {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 80px;
            height: 2px;
            background: linear-gradient(to right, var(--primary), var(--accent));
          }

          .blog-content h2 strong {
            color: var(--primary);
          }

          .blog-content h3 {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--foreground);
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          /* Enhanced image styling */
          .blog-content img {
            border-radius: 1rem;
            box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.2);
            margin: 2.5rem 0;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            max-width: 100%;
            height: auto;
          }

          .blog-content img:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.3);
          }

          /* Figure styling with captions */
          .blog-content figure {
            margin: 2.5rem 0;
          }

          .blog-content figure img {
            margin: 0;
          }

          /* Float images styling with better spacing */
          .blog-content .w-richtext-figure-type-image {
            background: var(--muted);
            padding: 1rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
          }

          .blog-content .w-richtext-figure-type-image.w-richtext-align-floatright {
            float: right;
            margin-left: 2rem;
            margin-bottom: 1.5rem;
            max-width: 400px;
          }

          .blog-content .w-richtext-figure-type-image.w-richtext-align-floatleft {
            float: left;
            margin-right: 2rem;
            margin-bottom: 1.5rem;
            max-width: 400px;
          }

          @media (max-width: 768px) {
            .blog-content .w-richtext-figure-type-image.w-richtext-align-floatright,
            .blog-content .w-richtext-figure-type-image.w-richtext-align-floatleft {
              float: none;
              margin: 2rem 0;
              max-width: 100%;
            }
          }

          /* Enhanced list styling with custom markers */
          .blog-content ul {
            margin: 1.5rem 0;
            padding-left: 0;
            list-style: none;
          }

          .blog-content ul li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 0.75rem;
            line-height: 1.8;
          }

          .blog-content ul li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: 700;
            font-size: 1.25rem;
          }

          .blog-content ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
            counter-reset: item;
            list-style: none;
          }

          .blog-content ol li {
            position: relative;
            padding-left: 1rem;
            margin-bottom: 0.75rem;
            line-height: 1.8;
            counter-increment: item;
          }

          .blog-content ol li::before {
            content: counter(item);
            position: absolute;
            left: -2rem;
            width: 1.75rem;
            height: 1.75rem;
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.875rem;
          }

          /* Link styling with better visibility */
          .blog-content a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            border-bottom: 2px solid transparent;
            transition: border-color 0.2s ease;
          }

          .blog-content a:hover {
            border-bottom-color: var(--primary);
          }

          /* External link indicator */
          .blog-content a[href^="http"]::after {
            content: " ↗";
            font-size: 0.875em;
            opacity: 0.6;
            margin-left: 0.125rem;
          }

          /* Strong text with accent color */
          .blog-content strong {
            color: var(--foreground);
            font-weight: 700;
          }

          /* Blockquote styling as pull quotes */
          .blog-content blockquote {
            border-left: 4px solid var(--primary);
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.125rem;
            color: var(--muted-foreground);
            background: var(--muted);
            padding: 1.5rem;
            border-radius: 0.5rem;
          }

          /* Code styling */
          .blog-content code {
            background: var(--muted);
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
            font-family: var(--font-mono);
            color: var(--accent);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .blog-content h2 {
              font-size: 1.75rem;
            }

            .blog-content h3 {
              font-size: 1.25rem;
            }

            .blog-content > p:first-of-type {
              font-size: 1.125rem;
            }

            .blog-content ol li::before {
              left: -1.5rem;
              width: 1.5rem;
              height: 1.5rem;
              font-size: 0.75rem;
            }
          }
        }
      `}</style>
    </>
  );
}
