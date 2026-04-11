import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CompareUsHeroSection from '../../components/CompareUs/CompareUsHeroSection';
import ComparisonSection from '../../components/CompareUs/ComparisonSection';
import CallToActionSection from '../../components/Home/CallToActionSection';
import WhyChooseTouchstone from '../../components/CompareUs/WhyChooseTouchstone';
import { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { breadcrumbSchema } from '../../lib/schema';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone vs Rocket Alumni Solutions | Compare Platforms',
  description: "Touchstone vs Rocket Alumni Solutions — a full side-by-side comparison of features, pricing, and support for digital Hall of Fame and recognition displays.",
  keywords: 'Rocket Alumni Solutions, Touchstone vs Rocket Alumni Solutions, Rocket Alumni Solutions alternative, digital recognition platform comparison, touchscreen software comparison, alumni recognition software',
  alternates: {
    canonical: '/compare-us',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Touchstone vs Rocket Alumni Solutions | Compare Platforms',
    description: "Touchstone vs Rocket Alumni Solutions — a full side-by-side comparison of features, pricing, and support for digital Hall of Fame and recognition displays.",
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
    title: 'Touchstone vs Rocket Alumni Solutions | Compare Platforms',
    description: "Touchstone vs Rocket Alumni Solutions — a full side-by-side comparison of features, pricing, and support for digital Hall of Fame and recognition displays.",
    images: ['/og-image.jpg'],
  },
};

export default function CompareUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', url: 'https://touchstone-ds.com/' },
        { name: 'Compare Us', url: 'https://touchstone-ds.com/compare-us/' },
      ])} />
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
