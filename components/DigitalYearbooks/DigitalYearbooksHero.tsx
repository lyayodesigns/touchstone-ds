"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalYearbooksHero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <section 
        className="relative pt-6 min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pt-4 pb-0 sm:pt-8 sm:pb-0 md:pt-16 md:pb-0"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-gradient-purple-blue">
                Digital Yearbooks
              </span>
            </motion.h1>
            
            <motion.div
              className="relative mb-4 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-6 max-w-3xl mx-auto">
                Every moment, every year preserved forever
              </p>
            </motion.div>
            
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
                Bring every yearbook into a clean, searchable digital library that never fades. Preserve your full history and make it accessible in seconds.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/" 
                className="px-8 py-4 btn-gradient hover-lift font-medium rounded-full shadow-lg"
              >
                Go Digital Now
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
  );
};

export default DigitalYearbooksHero;
