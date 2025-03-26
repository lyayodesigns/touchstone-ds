import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DigitalHallOfFameSection from '@/components/DigitalHallOfFameSection';
import InteractiveDisplaysSection from '@/components/InteractiveDisplaysSection';
import FeatureSection from '@/components/FeatureSection';
import WhySection from '@/components/WhySection';
import CallToActionSection from '@/components/CallToActionSection';
import PricingSection from '@/components/PricingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import SoftwarePlatformsSection from '@/components/SoftwarePlatformsSection';
import SchoolRecognitionSection from '@/components/SchoolRecognitionSection';
import AthleticsRecognitionSection from '@/components/AthleticsRecognitionSection';
import PhotoCarouselSection from '@/components/PhotoCarouselSection';
import CustomPlatformSection from '@/components/CustomPlatformSection';
import AlumniRecognitionSection from '@/components/AlumniRecognitionSection';
import OnboardingSection from '@/components/OnboardingSection';
import DigitalDisplayFeaturesSection from '@/components/DigitalDisplayFeaturesSection';
import AthleticAchievementsContactSection from '@/components/AthleticAchievementsContactSection';

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
      <Navbar />
      
      <main className="overflow-hidden">
        <HeroSection />
        
        <DigitalHallOfFameSection />
        
        <CustomPlatformSection />

        <InteractiveDisplaysSection />

        <AlumniRecognitionSection />

        <OnboardingSection />

        <DigitalDisplayFeaturesSection />

        {/* <AthleticAchievementsContactSection /> */}

        {/* <SoftwarePlatformsSection /> */}
        
        {/* <SchoolRecognitionSection /> */}
        
        {/* <AthleticsRecognitionSection /> */}
        
        <div id="gallery">
          <PhotoCarouselSection />
        </div>
        
        <div id="solutions">
          <WhySection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* <div id="pricing">
          <PricingSection />
        </div> */}

        <div id="faq">
          <FAQSection />
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
