import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
      <Helmet>
        {/* Basic Meta Tags */}
        <title>About Us | Touchstone Digital Solutions</title>
        <meta name="description" content="Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems." />
        <link rel="canonical" href="https://touchstone-ds.com/about/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us | Touchstone Digital Solutions" />
        <meta property="og:description" content="Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems." />
        <meta property="og:url" content="https://touchstone-ds.com/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://touchstone-ds.com/og-image.jpg" />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="About Us | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Learn about Touchstone Digital Solutions, our mission, values, and the team behind our interactive digital recognition systems." />
        <meta name="twitter:image" content="https://touchstone-ds.com/og-image.jpg" />
      </Helmet>
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
