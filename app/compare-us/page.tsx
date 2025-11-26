import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CompareUsHeroSection from '../../components/CompareUs/CompareUsHeroSection';
import ComparisonSection from '../../components/CompareUs/ComparisonSection';
import CallToActionSection from '../../components/Home/CallToActionSection';
import WhyChooseTouchstone from '../../components/CompareUs/WhyChooseTouchstone';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone vs Rocket Alumni Solutions - Compare Digital Recognition Platforms',
  description: "Detailed comparison of Touchstone and Rocket Alumni Solutions. Compare pricing, features, support, and see why institutions choose Touchstone over Rocket Alumni Solutions for their digital recognition needs.",
  keywords: 'Rocket Alumni Solutions, Touchstone vs Rocket Alumni Solutions, Rocket Alumni Solutions alternative, digital recognition platform comparison, touchscreen software comparison, alumni recognition software',
  alternates: {
    canonical: '/compare-us',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Touchstone vs Rocket Alumni Solutions - Platform Comparison',
    description: "Compare Touchstone and Rocket Alumni Solutions side-by-side. See features, pricing, and support differences between these digital recognition platforms.",
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
    title: 'Touchstone vs Rocket Alumni Solutions Comparison',
    description: "Comprehensive comparison of Touchstone and Rocket Alumni Solutions digital recognition platforms. Compare features, pricing, and support.",
    images: ['/og-image.jpg'],
  },
};

export default function CompareUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <CompareUsHeroSection />
        <ComparisonSection />
        <WhyChooseTouchstone />
        <div id="cta">
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
