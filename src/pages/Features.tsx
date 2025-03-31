import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
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
      <SEO 
        title="Features | Touchstone Digital Solutions"
        description="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration."
        canonical="/features/"
      />
      <Navbar />
      <main className="overflow-hidden">
        <FeaturesHeroSection />
        <AllinOneSection />
        <BuiltByGaming />
        <FullCustomization />
        <CustomizableSolutions />
        <DigitalRecordBoardAndDonorWall />
        <VisualFidelity />
        <BuiltForInstitutionAndExperience />
      </main>
      <Footer />
    </div>
  );
};

export default Features;