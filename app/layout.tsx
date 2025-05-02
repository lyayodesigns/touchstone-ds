import React from 'react';
import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
  description: 'Transform how you celebrate achievement with Touchstone Digital Solutions\' interactive digital Halls of Fame for schools, teams, and communities.',
  metadataBase: new URL('https://touchstone-ds.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
    description: 'Transform how you celebrate achievement with Touchstone Digital Solutions\' interactive digital Halls of Fame for schools, teams, and communities.',
    url: 'https://touchstone-ds.com/',
    siteName: 'Touchstone Digital Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
    description: 'Transform how you celebrate achievement with Touchstone Digital Solutions\' interactive digital Halls of Fame for schools, teams, and communities.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
