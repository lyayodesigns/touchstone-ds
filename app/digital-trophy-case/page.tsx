import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalTrophyCaseHero from '../../components/DigitalTrophyCase/DigitalTrophyCaseHero';
import TrophyCaseDigitalAge from '../../components/DigitalTrophyCase/TrophyCaseDigitalAge';
import WhatIsDigitalTrophyCase from '../../components/DigitalTrophyCase/WhatIsDigitalTrophyCase';
import WhoIsItFor from '../../components/DigitalTrophyCase/WhoIsItFor';
import WhyTouchstone from '../../components/DigitalTrophyCase/WhyTouchstone';
import DigitalTrophyCaseIdeas from '../../components/DigitalTrophyCase/DigitalTrophyCaseIdeas';
import HowItWorks from '../../components/DigitalTrophyCase/HowItWorks';
import TestimonialsSection from '../../components/Home/TestimonialsSection';
import CallToActionSection from '../../components/Home/CallToActionSection';
import FAQ from '../../components/DigitalTrophyCase/FAQ';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Digital Trophy Case | Touchstone Digital Solutions',
  description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
  alternates: {
    canonical: 'https://touchstone-ds.com/digital-trophy-case/'
  },
  openGraph: {
    title: 'Digital Trophy Case | Touchstone Digital Solutions',
    description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
    url: 'https://touchstone-ds.com/digital-trophy-case/',
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
    title: 'Digital Trophy Case | Touchstone Digital Solutions',
    description: "Transform your trophy displays with Touchstone's innovative Digital Trophy Case software. Interactive, secure, and accessible from anywhere. Perfect for schools, athletes, and organizations.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function DigitalTrophyCasePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <DigitalTrophyCaseHero />
        <TrophyCaseDigitalAge />
        <WhatIsDigitalTrophyCase />
        <WhoIsItFor />
        <WhyTouchstone />
        <DigitalTrophyCaseIdeas />
        <HowItWorks />
        <TestimonialsSection />
        <FAQ />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};
