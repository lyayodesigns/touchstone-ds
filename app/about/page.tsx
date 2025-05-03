import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutHeroSection from '../../components/About/AboutHeroSection';
import { AboutStatsSection } from '../../components/About/StatsSection';
import { WhatMakeUsDifferent } from '../../components/About/WhatMakeUsDifferent';
import { OurValues } from '../../components/About/Ourvalues';
import TeamSection from '../../components/About/TeamSection';
import WhoWeAreSection from '../../components/About/WhoWeAreSection';
import { CallToAction } from '../../components/About/CallToAction';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us | Touchstone Digital Solutions',
  description: "Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems.",
  alternates: {
    canonical: 'https://touchstone-ds.com/about/'
  },
  openGraph: {
    title: 'About Us | Touchstone Digital Solutions',
    description: "Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems.",
    url: 'https://touchstone-ds.com/about/',
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
    title: 'About Us | Touchstone Digital Solutions',
    description: "Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems.",
    images: ['https://touchstone-ds.com/og-image.jpg']
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />
      <main className="overflow-hidden">
        <AboutHeroSection />
        <AboutStatsSection />
        <WhatMakeUsDifferent />
        <TeamSection />
        <WhoWeAreSection />
        <OurValues />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};


