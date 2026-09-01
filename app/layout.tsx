import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.farqagency.co'),
  title: 'فَرْق — عالم جديد قريبًا',
  description: 'فَرْق بيت إبداعي سعودي. نصنع عالمنا الجديد الآن.',
  applicationName: 'فَرْق',
  creator: 'FARQ Creative House',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'فَرْق — نرجع بشكل ما يشبه غيره',
    description: 'فَرْق بيت إبداعي سعودي. العالم الجديد قريبًا.',
    url: '/',
    siteName: 'فَرْق',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فَرْق — نرجع بشكل ما يشبه غيره',
    description: 'العالم الجديد قريبًا.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050606',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><head><link rel="preload" href="/fonts/GraphikArabic-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head><body>{children}<script src="/motion.js" defer /></body></html>;
}
