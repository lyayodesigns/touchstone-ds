import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HeroSection from '@/components/Home/HeroSection';
import DigitalHallOfFameSection from '@/components/Home/DigitalHallOfFameSection';
import InteractiveDisplaysSection from '@/components/Home/InteractiveDisplaysSection';
import WhySection from '@/components/Home/WhySection';
import CallToActionSection from '@/components/Home/CallToActionSection';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import PhotoCarouselSection from '@/components/Home/PhotoCarouselSection';
import CustomPlatformSection from '@/components/Home/CustomPlatformSection';
import AlumniRecognitionSection from '@/components/Home/AlumniRecognitionSection';
import OnboardingSection from '@/components/Home/OnboardingSection';
import DigitalDisplayFeaturesSection from '@/components/Home/DigitalDisplayFeaturesSection';

const Index = () => {
  // Add smooth scroll effect
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Touchstone Digital Solutions - Interactive Digital Halls of Fame"
        description="Transform how you celebrate achievement with Touchstone Digital Solutions' interactive digital Halls of Fame for schools, teams, and communities."
        canonical="/"
      />
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
