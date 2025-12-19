import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalHistoryArchiveHero from '../../components/DigitalHistoryArchive/DigitalHistoryArchiveHero';
import FutureOfHeritage from '../../components/DigitalHistoryArchive/FutureOfHeritage';
import WhyDigitalArchiving from '../../components/DigitalHistoryArchive/WhyDigitalArchiving';
import PlatformFeatures from '../../components/DigitalHistoryArchive/PlatformFeatures';
import IndustrySolutions from '../../components/DigitalHistoryArchive/IndustrySolutions';
import ArchiveProcess from '../../components/DigitalHistoryArchive/ArchiveProcess';
import WhyTouchstone from '../../components/DigitalHistoryArchive/WhyTouchstone';
import RealWorldImpact from '../../components/DigitalHistoryArchive/RealWorldImpact';
import CTASection from '../../components/DigitalHistoryArchive/CTASection';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital History Archive | Touchstone Digital Solutions',
  description: "Preserve, protect, and share your institutional history with Touchstone's Digital History Archive. Transform records, artifacts, and cultural heritage into a searchable, secure digital archive accessible to researchers worldwide.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-history-archive/'
  },
  openGraph: {
    title: 'Digital History Archive | Touchstone Digital Solutions',
    description: "Preserve, protect, and share your institutional history with Touchstone's Digital History Archive. Transform records, artifacts, and cultural heritage into a searchable, secure digital archive accessible to researchers worldwide.",
    url: 'https://touchstone-ds.com/digital-history-archive/',
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
    title: 'Digital History Archive | Touchstone Digital Solutions',
    description: "Preserve, protect, and share your institutional history with Touchstone's Digital History Archive. Transform records, artifacts, and cultural heritage into a searchable, secure digital archive accessible to researchers worldwide.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function DigitalHistoryArchivePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <DigitalHistoryArchiveHero />
        <FutureOfHeritage />
        <WhyDigitalArchiving />
        <PlatformFeatures />
        <IndustrySolutions />
        <ArchiveProcess />
        <WhyTouchstone />
        <RealWorldImpact />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
