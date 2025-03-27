import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { AboutHeroSection } from './HeroSection';
import { AboutStatsSection } from './StatsSection';
import { WhatMakeUsDifferent } from './WhatMakeUsDifferent';
import { OurValues } from './Ourvalues';
import { AboutMissionSection } from './CallToAction';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <main className="pt-16 overflow-hidden">
      <Navbar />
      <AboutHeroSection />
      <AboutStatsSection />
 

    <WhatMakeUsDifferent />

      <OurValues />

      <AboutMissionSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
