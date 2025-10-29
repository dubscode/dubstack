import { Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  const branding = siteConfig.branding;
  const contact = siteConfig.contact;
  const quickLinks = siteConfig.navigation.quickLinks;

  return (
    <footer className='border-t border-border bg-muted/30'>
      <div className='container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Brand Column */}
          <div className='space-y-4'>
            <Image
              src={branding.logo.src}
              alt={branding.logo.alt}
              width={180}
              height={40}
              className='h-8 w-auto'
            />
            <p className='text-sm text-muted-foreground leading-relaxed'>
              {branding.tagline}
            </p>
            <div className='flex space-x-4'>
              {siteConfig.social.linkedin && (
                <Link
                  href={siteConfig.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground transition-colors hover:text-foreground'
                >
                  <Linkedin className='h-5 w-5' />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className='mb-4 text-sm font-semibold text-foreground'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className='mb-4 text-sm font-semibold text-foreground'>
              Get In Touch
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <Mail className='h-4 w-4' />
                <a
                  href={`mailto:${contact.email}`}
                  className='transition-colors hover:text-foreground'
                >
                  {contact.email}
                </a>
              </li>
              <li className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <Phone className='h-4 w-4' />
                <a
                  href={`tel:${contact.phone}`}
                  className='transition-colors hover:text-foreground'
                >
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-border pt-8'>
          <p className='text-center text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} {branding.companyName}.{' '}
            {siteConfig.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
