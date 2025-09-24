"use client";

import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';
import Link from 'next/link';

const HardwareHeroSection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Floating particles animation with deterministic positions
  const particles = Array.from({ length: 15 }, (_, i) => {
    // Use index-based deterministic positioning instead of Math.random()
    const positions = [
      { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 70 },
      { left: 70, top: 30 }, { left: 45, top: 85 }, { left: 90, top: 60 },
      { left: 15, top: 45 }, { left: 60, top: 10 }, { left: 35, top: 90 },
      { left: 80, top: 75 }, { left: 5, top: 55 }, { left: 95, top: 25 },
      { left: 50, top: 5 }, { left: 20, top: 80 }, { left: 75, top: 50 }
    ];
    const position = positions[i] || { left: 50, top: 50 };
    
    return (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
        style={{
          left: `${position.left}%`,
          top: `${position.top}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 3 + (i % 3),
          repeat: Infinity,
          delay: i * 0.3
        }}
      />
    );
  });

  return (
    <section 
      className="relative pt-16 min-h-[70svh] w-full flex flex-col items-center justify-center overflow-hidden pb-0 sm:pt-20 sm:pb-0 md:pt-28 md:pb-0"
      style={{
        backgroundImage: "url('/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background with animated gradient overlay */}
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      {/* Decorative animated elements */}
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

      <div className="relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text text-gradient-purple-blue">
              Professional Interactive Display Hardware
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
              Choose from our range of premium interactive displays designed to bring your digital recognition to life with professional-grade touchscreen technology.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="https://calendly.com/touchstone-digital-solutions/demo" target="_blank">
              <motion.button
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book a Demo
              </motion.button>
            </Link>
            <Link href="#hardware-interactive">
              <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Hardware
              </motion.button>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HardwareHeroSection;
