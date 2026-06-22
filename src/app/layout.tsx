import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'SlotMaster, рейтинг и обзоры онлайн-казино 2026',
    template: '%s | SlotMaster',
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: SITE.name,
    title: 'SlotMaster, рейтинг и обзоры онлайн-казино 2026',
    description: SITE.description,
    images: ['/assets/slotmaster/hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlotMaster, рейтинг и обзоры онлайн-казино 2026',
    description: SITE.description,
    images: ['/assets/slotmaster/hero.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#030711',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgWebsite = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      sameAs: [SITE.telegram],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      inLanguage: 'ru-RU',
    },
  ];

  return (
    <html lang="ru" className={`${manrope.variable} ${display.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        <JsonLd data={orgWebsite} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
