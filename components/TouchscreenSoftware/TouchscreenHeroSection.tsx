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
        className="relative pt-12 min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pb-0 sm:pt-16 sm:pb-0 md:pt-24 md:pb-0"
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
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              <span className="block pt-3">Transform Your School's</span>
              <span className="text-transparent bg-clip-text text-gradient-purple-blue block pb-1">
                Legacy
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-medium">
                with Touchstone Digital Solutions
              </span>
            </motion.h1>
            
            <motion.div
              className="relative mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 mb-4">
                <span className="font-semibold">Premier Touchscreen Software for Halls of Fame & Beyond</span>
              </div>
              
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                Revolutionize Recognition: <span className="text-transparent bg-clip-text text-gradient-purple-blue">Interactive Touchscreen Software</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                for Halls of Fame, Digital Archives & Unforgettable School Stories
              </p>
              
              {/* Decorative line */}
              <motion.div 
                className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Replace Static Plaques & Crowded Hallways with Dynamic, Cloud-Based Touchscreen Displays That Engage Students, Alumni, and Donors 24/7.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
  );
};

export default TouchscreenHeroSection;
