import React from 'react';
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

export const dynamic = 'force-static';

// Metadata is now handled in layout.tsx with the metadata export
// No need for Head component in App Router

const Index = () => {
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
};

export default Index;
