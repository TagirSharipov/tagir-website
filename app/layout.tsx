import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import localFont from 'next/font/local';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Alex Pate - Product Engineer',
  description:
    'Alex Pate is a product engineer based in Milan, currently building the future of payments at MoonPay. Working somewhere on the boundary between design and code',
  twitter: {
    card: 'summary_large_image',
    creator: '@alexjpate',
    images: ['/og.png'],
    title: 'Alex Pate - Product Engineer',
  },
  openGraph: {
    title: 'Alex Pate - Product Engineer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Alex Pate - Product Engineer',
      },
    ],
    siteName: 'Alex Pate - Product Engineer',
  },
  metadataBase: new URL('https://alexjpate.com'),
};

const ttHovesFont = localFont({
  src: [
    {
      path: './assets/tt-hoves-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/tt-hoves-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/tt-hoves-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/tt-hoves-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={clsx(ttHovesFont.className, 'bg-slate-950')}>
        <main className="max-w-xl mx-auto">
          <header className="pt-16 pb-16 px-4 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-semibold text-white">ap</h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/posts"
                className="text-white text-base font-semibold"
              >
                Writing
              </Link>
              <Link
                className="text-white text-base font-semibold"
                href="/#contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
