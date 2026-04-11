import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import YearbookScanningHero from '../../components/YearbookScanning/YearbookScanningHero';
import YearbookScanningIntro from '../../components/YearbookScanning/YearbookScanningIntro';
import WhatYouGet from '../../components/YearbookScanning/WhatYouGet';
import WhoIsYearbookScanning from '../../components/YearbookScanning/WhoIsYearbookScanning';
import WhySchoolsTrust from '../../components/YearbookScanning/WhySchoolsTrust';
import BuiltForPreservation from '../../components/YearbookScanning/BuiltForPreservation';
import Testimonials from '../../components/YearbookScanning/Testimonials';
import FAQ from '../../components/YearbookScanning/FAQ';
import YearbookScanningFormCTA from '../../components/YearbookScanning/YearbookScanningFormCTA';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Yearbook Scanning | Touchstone Digital Solutions',
  description: "Turn printed yearbooks into searchable digital archives. Touchstone's non-destructive scanning delivers secure results for schools, libraries, and alumni.",
  alternates: {
    canonical: 'https://touchstone-ds.com/yearbook-scanning/'
  },
  openGraph: {
    title: 'Yearbook Scanning | Touchstone Digital Solutions',
    description: "Turn printed yearbooks into searchable digital archives. Touchstone's non-destructive scanning delivers secure results for schools, libraries, and alumni.",
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
    description: "Turn printed yearbooks into searchable digital archives. Touchstone's non-destructive scanning delivers secure results for schools, libraries, and alumni.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

const yearbookScanningFaqs = [
  { question: 'Why should schools digitize their yearbooks?', answer: 'Digitizing yearbooks protects your school\'s history from wear, damage, theft, and permanent loss. Digital yearbooks are searchable, shareable, and accessible to alumni and administrators at any time.' },
  { question: 'How does digitizing yearbooks help engage alumni?', answer: 'Digitized yearbooks are a proven alumni engagement asset. Hosting your collection online can increase alumni website traffic, reinforce emotional connection, and support fundraising efforts.' },
  { question: 'How much does it cost to digitize yearbooks?', answer: 'Pricing is $39 per yearbook for larger collections, $45 per yearbook for smaller orders under 10 volumes. Reprints are available: $125 hardcover, $95 softcover.' },
  { question: 'Does the company keep the rights to our digitized yearbooks?', answer: 'No. Your school retains full ownership and control of all digitized files. You decide whether to display them publicly, restrict access to alumni, or monetize access.' },
  { question: 'How do you protect fragile yearbooks during scanning?', answer: 'We use a white glove, non-destructive scanning process designed for archival materials. Your yearbooks are carefully handled and returned intact and protected.' },
  { question: 'Are digitized yearbooks searchable?', answer: 'Yes. Advanced OCR technology makes every page fully searchable, capturing printed text as well as text embedded within photos and scanned images.' },
  { question: 'Can you convert yearbooks into online flipbooks?', answer: 'Yes. We convert digitized yearbooks into interactive online flipbooks with page turn animation, zoom functionality, full text search, and secure hosting options.' },
  { question: 'What is your turnaround time for yearbook digitization?', answer: 'Most projects are completed within three weeks. A limited rush option is available with one week turnaround upon request.' },
];

export default function YearbookScanningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        serviceSchema({
          name: 'Yearbook Scanning & Digitization Service',
          description: "Turn every printed yearbook into a high-quality, searchable digital archive with Touchstone's Yearbook Scanning service. Non-destructive scanning, searchable PDFs, and secure delivery.",
          url: 'https://touchstone-ds.com/yearbook-scanning/',
          serviceType: 'Yearbook Digitization Service',
        }),
        faqPageSchema(yearbookScanningFaqs),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Yearbook Scanning', url: 'https://touchstone-ds.com/yearbook-scanning/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <YearbookScanningHero />
        <YearbookScanningIntro />
        <WhatYouGet />
        <WhoIsYearbookScanning />
        <WhySchoolsTrust />
        <BuiltForPreservation />
        <Testimonials />
        <YearbookScanningFormCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
