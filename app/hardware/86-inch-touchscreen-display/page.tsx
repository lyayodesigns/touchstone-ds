import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import IndividualHardwarePage from '../../../components/Hardware/IndividualHardwarePage';
import { Metadata } from 'next';
import CallToActionSection from '../../../components/Home/CallToActionSection';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '86" Interactive Display Hardware | Touchstone Digital Solutions',
  description: 'Explore our 86" interactive display with PCAP touch technology, industrial-grade construction, and comprehensive 3-year warranty for your digital recognition needs.',
  alternates: {
    canonical: 'https://touchstone-ds.com/hardware/86-inch-touchscreen-display/'
  },
  openGraph: {
    title: '86" Interactive Display Hardware | Touchstone Digital Solutions',
    description: 'Explore our 86" interactive display with PCAP touch technology, industrial-grade construction, and comprehensive 3-year warranty for your digital recognition needs.',
    url: 'https://touchstone-ds.com/hardware/86-inch-touchscreen-display/',
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
    title: '86" Interactive Display Hardware | Touchstone Digital Solutions',
    description: 'Explore our 86" interactive display with PCAP touch technology, industrial-grade construction, and comprehensive 3-year warranty for your digital recognition needs.',
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function Hardware86InchTouchscreenDisplayPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <IndividualHardwarePage size='86"' />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
