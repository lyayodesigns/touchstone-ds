import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  
  // Add internal links at the top of the page for SEO and navigation

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
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
      {/* Call to action with internal links before footer - styled to match site aesthetic */}
      <section className="py-16 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to transform your recognition displays?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our innovative digital solutions or get in touch with our team to learn more about how we can help your institution.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;