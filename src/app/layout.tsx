import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://javenchen777.github.io/peronal_site'),
  title: {
    default: 'DevToolbox — Tools I Built for Developers',
    template: '%s | DevToolbox',
  },
  description:
    'A curated collection of developer tools and utilities built by a passionate developer. Find tools for productivity, data, design, and more.',
  openGraph: {
    type: 'website',
    title: 'DevToolbox — Tools I Built for Developers',
    description: 'A curated collection of developer tools and utilities.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevToolbox',
    description: 'A curated collection of developer tools and utilities.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
