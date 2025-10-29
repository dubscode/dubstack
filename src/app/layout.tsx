import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import {
  Geist_Mono,
  Inter,
  Source_Serif_4,
  Geist as V0_Font_Geist,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from 'next/font/google';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const _geistMono = V0_Font_Geist_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: [
    'service business template',
    'next.js marketing site',
    'dubstack',
    'shadcn ui',
    'agency starter kit',
  ],
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: siteConfig.branding.companyName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.branding.companyName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: ['/placeholder.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: shadcn,
      }}
    >
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${inter.variable} ${sourceSerif.variable} ${geistMono.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='relative min-h-screen'>
              {/* Grid background pattern */}
              <div className='fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none' />

              <div className='relative flex min-h-screen flex-col'>
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
              </div>
            </div>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
