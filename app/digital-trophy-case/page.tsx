import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DigitalTrophyCaseHero from '../../components/DigitalTrophyCase/DigitalTrophyCaseHero';
import TrophyCaseDigitalAge from '../../components/DigitalTrophyCase/TrophyCaseDigitalAge';
import WhatIsDigitalTrophyCase from '../../components/DigitalTrophyCase/WhatIsDigitalTrophyCase';
import WhoIsItFor from '../../components/DigitalTrophyCase/WhoIsItFor';
import WhyTouchstone from '../../components/DigitalTrophyCase/WhyTouchstone';
import DigitalTrophyCaseIdeas from '../../components/DigitalTrophyCase/DigitalTrophyCaseIdeas';
import HowItWorks from '../../components/DigitalTrophyCase/HowItWorks';
import Testimonials from '../../components/DigitalTrophyCase/Testimonials';
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
        <Testimonials />
        <FAQ />
      </main>
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to preserve your legacy forever?
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Start your free 14-day trial today and create your first digital trophy case. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Free Trial
            </a>
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
