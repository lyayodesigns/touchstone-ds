
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import WhySection from '@/components/WhySection';
import IntegrationSection from '@/components/IntegrationSection';
import Footer from '@/components/Footer';

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
        
        <div id="products">
          <FeatureSection />
        </div>
        
        <div id="solutions">
          <WhySection />
        </div>
        
        <div id="integrations">
          <IntegrationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
