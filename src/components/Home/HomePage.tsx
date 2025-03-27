import React, { useEffect } from 'react';
import HeroSection from '@/components/Home/HeroSection';
import DigitalHallOfFameSection from '@/components/Home/DigitalHallOfFameSection';
import InteractiveDisplaysSection from '@/components/Home/InteractiveDisplaysSection';
import WhySection from '@/components/Home/WhySection';
import CallToActionSection from '@/components/Home/CallToActionSection';
import HowItWorksSection from '@/components/Home/HowItWorksSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import FAQSection from '@/components/Home/FAQSection';
import PhotoCarouselSection from '@/components/Home/PhotoCarouselSection';
import CustomPlatformSection from '@/components/Home/CustomPlatformSection';
import AlumniRecognitionSection from '@/components/Home/AlumniRecognitionSection';
import OnboardingSection from '@/components/Home/OnboardingSection';
import DigitalDisplayFeaturesSection from '@/components/Home/DigitalDisplayFeaturesSection';

const HomePage = () => {
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
  );
};

export default HomePage;
