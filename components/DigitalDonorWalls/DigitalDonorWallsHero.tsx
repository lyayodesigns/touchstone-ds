"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalDonorWallsHero = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <section 
        className="relative pt-6 min-h-[80svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-0 sm:pt-8 sm:pb-0 md:pt-16 md:pb-0"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        {/* Background with animated gradient */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
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
        
        {/* Decorative elements - hidden on small screens */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500/10 hidden sm:block"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                  Digital Donor Walls
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-4xl mx-auto">
                The Magnetic, Contemporary Way to Celebrate Your Generous Donors
              </p>
            </motion.div>
            
            <motion.div
              className="relative mb-4 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Forever Grateful, Digitally Displayed. The Future of Donor Recognition is Here.
              </h2>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                For decades, the physical donor wall has been the recognition standard. Static engraving cannot truly communicate the dynamism of your community, the magnitude of a campaign, or the ever-changing tale of your cause.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                The time to change the way gratitude is given has come. Imagine a lively interactive wall that does more than just list names. It tells stories, shows impact through videos, and keeps alive the generous spirit that sustains your cause.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://touchstone-ds.com/contact/" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Your Free Demo & Consultation
              </a>
              <a 
                href="#examples" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Digital Donor Wall Examples
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
  );
};

export default DigitalDonorWallsHero;
