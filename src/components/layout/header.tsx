'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { siteConfig } from '@/config/site';

const navigation = siteConfig.navigation.quickLinks.filter(
  (link) => link.href !== '/book',
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-border/60 bg-background/80 backdrop-blur-lg shadow-lg'
          : 'border-border/40 bg-background/95 backdrop-blur'
      } supports-[backdrop-filter]:bg-background/60`}
    >
      <div className='container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='flex items-center space-x-2 transition-transform hover:scale-105'
        >
          <Image
            src={siteConfig.branding.logo.src}
            alt={siteConfig.branding.logo.alt}
            width={180}
            height={40}
            className='h-8 w-auto'
            priority
          />
        </Link>

        <nav className='hidden items-center space-x-8 md:flex'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() =>
                posthog.capture('navigation_link_clicked', {
                  link_name: item.label,
                  link_href: item.href,
                  location: 'header',
                })
              }
              className='text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center space-x-2'>
          <ThemeSwitcher />
          <Button asChild className='hidden md:inline-flex group'>
            <Link
              href='/book'
              onClick={() =>
                posthog.capture('book_consultation_clicked', {
                  location: 'header',
                })
              }
            >
              {siteConfig.homepage.cta.primaryCta.label}
              <span className='ml-2 inline-block transition-transform group-hover:translate-x-1'>
                →
              </span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <nav className='mt-8 flex flex-col space-y-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      posthog.capture('navigation_link_clicked', {
                        link_name: item.label,
                        link_href: item.href,
                        location: 'mobile_menu',
                      });
                      setIsOpen(false);
                    }}
                    className='text-lg font-medium text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className='mt-4'>
                  <Link
                    href='/book'
                    onClick={() => {
                      posthog.capture('book_consultation_clicked', {
                        location: 'mobile_menu',
                      });
                      setIsOpen(false);
                    }}
                  >
                    {siteConfig.homepage.cta.primaryCta.label}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
