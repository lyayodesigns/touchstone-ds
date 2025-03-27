import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { AboutHeroSection } from './HeroSection';
import { AboutStatsSection } from './StatsSection';
import { WhatMakeUsDifferent } from './WhatMakeUsDifferent';
import { OurValues } from './Ourvalues';
import { AboutMissionSection } from './CallToAction';

const AboutPage = () => {
  return (
    <main className="pt-16 overflow-hidden">
      <AboutHeroSection />
      <AboutStatsSection />
 

    <WhatMakeUsDifferent />

      <OurValues />

      <AboutMissionSection />
    </main>
  );
};

export default AboutPage;
