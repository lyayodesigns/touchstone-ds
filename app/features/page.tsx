import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeaturesHeroSection from '../../components/Features/FeaturesHeroSection';
import AllinOneSection from '../../components/Features/AllinOneSection';
import CustomizableSolutions from '../../components/Features/CustomizableSolutions';
import DigitalRecordBoardAndDonorWall from '../../components/Features/DigitalRecordBoardAndDonorWall';
import FullCustomization from '../../components/Features/FullCustomization';
import BuiltForInstitutionAndExperience from '../../components/Features/BuiltForInstitutionAndExperience';
import VisualFidelity from '../../components/Features/VisualFidelity';
import BuiltByGaming from '../../components/Features/BuiltByGaming';

export const dynamic = 'force-static';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        {/* Basic Meta Tags */}
        <title>Features | Touchstone Digital Solutions</title>
        <meta name="description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <link rel="canonical" href="https://touchstone-ds.com/features/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Features | Touchstone Digital Solutions" />
        <meta property="og:description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <meta property="og:url" content="https://touchstone-ds.com/features/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://touchstone-ds.com/og-image.jpg" />
        <meta property="og:site_name" content="Touchstone Digital Solutions" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@touchstone_ds" />
        <meta name="twitter:title" content="Features | Touchstone Digital Solutions" />
        <meta name="twitter:description" content="Explore the innovative features of Touchstone's digital recognition systems, including interactive displays, customization options, and seamless integration." />
        <meta name="twitter:image" content="https://touchstone-ds.com/og-image.jpg" />
      </Head>
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to transform your recognition displays?
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Explore our innovative digital solutions or get in touch with our team to learn more about how we can help your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </a>
            <a 
              href="https://touchstone-ds.com/about/" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
