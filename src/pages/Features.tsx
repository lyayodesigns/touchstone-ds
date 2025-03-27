import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesHeroSection from '../components/Features/HeroSection';
import AllinOneSection from '../components/Features/AllinOneSection';
import CustomizableSolutions from '../components/Features/CustomizableSolutions';
import DigitalRecordBoardAndDonorWall from '../components/Features/DigitalRecordBoardAndDonorWall';
import FullCustomization from '../components/Features/FullCustomization';
import BuiltForInstitutionAndExperience from '../components/Features/BuiltForInstitutionAndExperience';
import VisualFidelity from '../components/Features/VisualFidelity';
import BuiltByGaming from '../components/Features/BuiltByGaming';

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