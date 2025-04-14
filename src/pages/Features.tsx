import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Features | Touchstone Digital Solutions</title>
        <meta name="description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <link rel="canonical" href={`${window.location.origin}/features/`} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Features | Touchstone Digital Solutions" />
        <meta property="og:description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <meta property="og:url" content={`${window.location.origin}/features/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${window.location.origin}/og-image.jpg`} />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="Features | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <meta name="twitter:image" content={`${window.location.origin}/og-image.jpg`} />
      </Helmet>
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