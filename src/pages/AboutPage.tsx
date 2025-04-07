import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { AboutHeroSection } from '@/components/About/HeroSection';
import { AboutStatsSection } from '@/components/About/StatsSection';
import { WhatMakeUsDifferent } from '@/components/About/WhatMakeUsDifferent';
import { OurValues } from '@/components/About/Ourvalues';
import TeamSection from '@/components/About/TeamSection';
import WhoWeAreSection from '@/components/About/WhoWeAreSection';
import { CallToAction } from '@/components/About/CallToAction';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="About Us | Touchstone Digital Solutions"
        description="Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems."
        canonical="/about/"
      />
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

export default AboutPage;
