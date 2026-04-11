import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import IndividualHardwarePage from '../../../components/Hardware/IndividualHardwarePage';
import { Metadata } from 'next';
import CallToActionSection from '../../../components/Home/CallToActionSection';
import JsonLd from '../../../components/JsonLd';
import { productSchema, breadcrumbSchema } from '../../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '75" Interactive Display Hardware | Touchstone Digital Solutions',
  description: 'The 75" Touchstone display commands attention in athletic facilities and large lobbies — PCAP multi-touch, commercial 24/7 operation, and a 3-year warranty.',
  alternates: {
    canonical: 'https://touchstone-ds.com/touchscreen-hardware/75-inch-touchscreen-display/'
  },
  openGraph: {
    title: '75" Interactive Display Hardware | Touchstone Digital Solutions',
    description: 'The 75" Touchstone display commands attention in athletic facilities and large lobbies — PCAP multi-touch, commercial 24/7 operation, and a 3-year warranty.',
    url: 'https://touchstone-ds.com/touchscreen-hardware/75-inch-touchscreen-display/',
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
    title: '75" Interactive Display Hardware | Touchstone Digital Solutions',
    description: 'The 75" Touchstone display commands attention in athletic facilities and large lobbies — PCAP multi-touch, commercial 24/7 operation, and a 3-year warranty.',
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function Hardware75InchTouchscreenDisplayPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[
        productSchema({
          name: '75" Interactive Touchscreen Display',
          description: 'Industrial-grade 75" interactive touchscreen display with PCAP touch technology, comprehensive 3-year warranty, designed for digital hall of fame and recognition installations.',
          url: 'https://touchstone-ds.com/touchscreen-hardware/75-inch-touchscreen-display/',
        }),
        breadcrumbSchema([
          { name: 'Home', url: 'https://touchstone-ds.com/' },
          { name: 'Touchscreen Hardware', url: 'https://touchstone-ds.com/touchscreen-hardware/' },
          { name: '75" Display', url: 'https://touchstone-ds.com/touchscreen-hardware/75-inch-touchscreen-display/' },
        ]),
      ]} />
      <Navbar />
      <main className="overflow-hidden">
        <IndividualHardwarePage size='75"' />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
