import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TouchscreenHeroSection from '../../components/TouchscreenSoftware/TouchscreenHeroSection';
import WhyChooseTouchstone from '../../components/TouchscreenSoftware/WhyChooseTouchstone';
import WhatIsTouchstone from '../../components/TouchscreenSoftware/WhatIsTouchstone';
import KeyFeatures from '../../components/TouchscreenSoftware/KeyFeatures';
import ProvenUseCases from '../../components/TouchscreenSoftware/ProvenUseCases';
import HowItWorks from '../../components/TouchscreenSoftware/HowItWorks';
import TouchstoneDifference from '../../components/TouchscreenSoftware/TouchstoneDifference';
import CallToAction from '../../components/TouchscreenSoftware/CallToAction';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchscreen Software | Touchstone Digital Solutions',
  description: "Discover Touchstone's interactive touchscreen software for schools. Create digital halls of fame, donor walls, and more with our customizable platform.",
  alternates: {
    canonical: 'https://touchstone-ds.com/touchscreen-software/'
  },
  openGraph: {
    title: 'Touchscreen Software | Touchstone Digital Solutions',
    description: "Discover Touchstone's interactive touchscreen software for schools. Create digital halls of fame, donor walls, and more with our customizable platform.",
    url: 'https://touchstone-ds.com/touchscreen-software/',
    siteName: 'Touchstone Digital Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://touchstone-ds.com/og-image.jpg',
      width: 1200,
      height: 630
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@touchstone_ds',
    title: 'Touchscreen Software | Touchstone Digital Solutions',
    description: "Discover Touchstone's interactive touchscreen software for schools. Create digital halls of fame, donor walls, and more with our customizable platform.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function TouchscreenSoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <TouchscreenHeroSection />
        <WhyChooseTouchstone />
        <WhatIsTouchstone />
        <KeyFeatures />
        <ProvenUseCases />
        <HowItWorks />
        <TouchstoneDifference />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
