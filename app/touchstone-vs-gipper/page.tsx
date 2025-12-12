import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CallToActionSection from '../../components/Home/CallToActionSection';
import { Metadata } from 'next';

import TouchstoneVsGipperHeroSection from 'components/touchstone-vs-gipper/Touchstone-vs-GipperHeroSection';
import TouchstoneVsGipperComparisonSection from 'components/touchstone-vs-gipper/Touchstone-vs-GipperComparisonSection';
import TouchstoneVsGipperWhyChooseTouchstone from 'components/touchstone-vs-gipper/Touchstone-vs-GipperWhyChooseTouchstone';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone vs Gipper - Compare Digital Recognition Platforms',
  description: "Detailed comparison of Touchstone and Gipper. Compare pricing, features, support, and see why institutions choose Touchstone over Gipper for their digital recognition needs.",
  keywords: 'Gipper, Touchstone vs Gipper, Gipper alternative, digital recognition platform comparison, touchscreen software comparison, alumni recognition software',
  alternates: {
    canonical: '/compare-us',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Touchstone vs Gipper - Platform Comparison',
    description: "Compare Touchstone and Gipper side-by-side. See features, pricing, and support differences between these digital recognition platforms.",
    url: 'https://touchstone-ds.com/compare-us',
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
    title: 'Touchstone vs Gipper Comparison',
    description: "Comprehensive comparison of Touchstone and Gipper digital recognition platforms. Compare features, pricing, and support.",
    images: ['/og-image.jpg'],
  },
};

export default function TouchStoneVsGipper() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <TouchstoneVsGipperHeroSection />
        <TouchstoneVsGipperComparisonSection />
        < TouchstoneVsGipperWhyChooseTouchstone/>
        <div id="cta">
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
