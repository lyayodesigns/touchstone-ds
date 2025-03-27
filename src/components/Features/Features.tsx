import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesHeroSection from './HeroSection';
import AllinOneSection from './AllinOneSection';
import CustomizableSolutions from './CustomizableSolutions';
import DigitalRecordBoardAndDonorWall from './DigitalRecordBoardAndDonorWall';
import FullCustomization from './FullCustomization';
import BuiltForInstitutionAndExperience from './BuiltForInstitutionAndExperience';
import VisualFidelity from './VisualFidelity';
import BuiltByGaming from './BuiltByGaming';

const Features = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   
      <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <FeaturesHeroSection />
        <AllinOneSection />
        <CustomizableSolutions />
        <DigitalRecordBoardAndDonorWall />
        <FullCustomization />
        <BuiltByGaming />
        <VisualFidelity />
        <BuiltForInstitutionAndExperience />
      </main>
      <Footer />
    </div>
  );
};

export default Features;