import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CompareUsHeroSection from '../../components/CompareUs/CompareUsHeroSection';
import ComparisonSection from '../../components/CompareUs/ComparisonSection';
import CallToActionSection from '../../components/Home/CallToActionSection';
import { Metadata } from 'next';
import WhyChooseTouchstone from 'components/TouchscreenSoftware/WhyChooseTouchstone';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Compare Touchstone vs Rocket - Digital Recognition Platform Comparison',
  description: "Compare Touchstone's top-rated services, pricing, and support to Rocket and see why Touchstone is the most-loved touchscreen platform by America's institutions.",
  alternates: {
    canonical: '/compare-us',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Compare Touchstone vs Rocket - Digital Recognition Platform Comparison',
    description: "Compare Touchstone's top-rated services, pricing, and support to Rocket and see why Touchstone is the most-loved touchscreen platform by America's institutions.",
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
    title: 'Compare Touchstone vs Rocket - Digital Recognition Platform Comparison',
    description: "Compare Touchstone's top-rated services, pricing, and support to Rocket and see why Touchstone is the most-loved touchscreen platform by America's institutions.",
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
        <div id="cta">
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
