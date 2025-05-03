import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalHallOfFameSection from '../components/Home/DigitalHallOfFameSection';
import InteractiveDisplaysSection from '../components/Home/InteractiveDisplaysSection';
import WhySection from '../components/Home/WhySection';
import CallToActionSection from '../components/Home/CallToActionSection';
import HowItWorksSection from '../components/Home/HowItWorksSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import PhotoCarouselSection from '../components/Home/PhotoCarouselSection';
import CustomPlatformSection from '../components/Home/CustomPlatformSection';
import AlumniRecognitionSection from '../components/Home/AlumniRecognitionSection';
import OnboardingSection from '../components/Home/OnboardingSection';
import DigitalDisplayFeaturesSection from '../components/Home/DigitalDisplayFeaturesSection';
import HeroSection from '../components/Home/HomeHeroSection';
import { Metadata } from 'next';


export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
  description: "Transform how you celebrate achievement with Touchstone Digital Solutions' interactive digital Halls of Fame for schools, teams, and communities.",
  alternates: {
    canonical: '/',
  },
  metadataBase: new URL('https://touchstone-ds.com'),
  openGraph: {
    title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
    description: "Transform how you celebrate achievement with Touchstone Digital Solutions' interactive digital Halls of Fame for schools, teams, and communities.",
    url: 'https://touchstone-ds.com/',
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
    title: 'Touchstone Digital Solutions - Interactive Digital Halls of Fame',
    description: "Transform how you celebrate achievement with Touchstone Digital Solutions' interactive digital Halls of Fame for schools, teams, and communities.",
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <DigitalHallOfFameSection />
        <CustomPlatformSection />
        <InteractiveDisplaysSection />
        <AlumniRecognitionSection />
        <OnboardingSection />
        <DigitalDisplayFeaturesSection />
        <div id="gallery">
          <PhotoCarouselSection />
        </div>
        <div id="solutions">
          <WhySection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <HowItWorksSection />
        </div>
        <div id="cta">
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}


