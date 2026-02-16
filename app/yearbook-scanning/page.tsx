import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import YearbookScanningHero from '../../components/YearbookScanning/YearbookScanningHero';
import YearbookScanningIntro from '../../components/YearbookScanning/YearbookScanningIntro';
import WhyDigitizeYearbooks from '../../components/YearbookScanning/WhyDigitizeYearbooks';
import WhatYouGet from '../../components/YearbookScanning/WhatYouGet';
import HowItWorks from '../../components/YearbookScanning/HowItWorks';
import WhoIsItFor from '../../components/YearbookScanning/WhoIsItFor';
import TestimonialsSection from '../../components/Home/TestimonialsSection';
import FAQ from '../../components/YearbookScanning/FAQ';
import YearbookScanningFormCTA from '../../components/YearbookScanning/YearbookScanningFormCTA';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Yearbook Scanning | Touchstone Digital Solutions',
  description: "Turn every printed yearbook into a high‑quality, searchable digital archive with Touchstone's Yearbook Scanning service. Non‑destructive scanning, searchable PDFs, and secure delivery for schools, libraries, and alumni organizations.",
  alternates: {
    canonical: 'https://touchstone-ds.com/yearbook-scanning/'
  },
  openGraph: {
    title: 'Yearbook Scanning | Touchstone Digital Solutions',
    description: "Turn every printed yearbook into a high‑quality, searchable digital archive with Touchstone's Yearbook Scanning service. Non‑destructive scanning, searchable PDFs, and secure delivery for schools, libraries, and alumni organizations.",
    url: 'https://touchstone-ds.com/yearbook-scanning/',
    type: 'website',
    images: [{
      url: 'https://touchstone-ds.com/og-image.jpg',
      width: 1200,
      height: 630
    }],
    siteName: 'Touchstone Digital Solutions'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Yearbook Scanning | Touchstone Digital Solutions',
    description: "Turn every printed yearbook into a high‑quality, searchable digital archive with Touchstone's Yearbook Scanning service. Non‑destructive scanning, searchable PDFs, and secure delivery for schools, libraries, and alumni organizations.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function YearbookScanningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <YearbookScanningHero />
        <YearbookScanningIntro />
        <WhyDigitizeYearbooks />
        <WhatYouGet />
        <HowItWorks />
        <WhoIsItFor />
        <TestimonialsSection />
        <FAQ />
        <YearbookScanningFormCTA />
      </main>
      <Footer />
    </div>
  );
}
