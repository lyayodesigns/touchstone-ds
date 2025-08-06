"use client";

import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TouchscreenHeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <section 
        className="relative pt-16 min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pb-0 sm:pt-20 sm:pb-0 md:pt-28 md:pb-0"
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
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              Interactive Touchscreen Software for Halls of Fame, Digital Archives & Unforgettable School Stories
              </span>
            </motion.h1>
            
            <motion.div
              className="relative mb-4 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                Replace Static Plaques & Crowded Hallways with Dynamic, Cloud-Based Touchscreen Displays That Engage Students, Alumni, and Donors 24/7.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
  );
};

export default TouchscreenHeroSection;
