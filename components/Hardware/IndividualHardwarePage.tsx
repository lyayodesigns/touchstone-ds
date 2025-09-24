"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import HardwareContentDisplay from './HardwareContentDisplay';
import HardwareIncludesSection from './HardwareIncludesSection';
import { hardwareSizes, HardwareData } from './hardwareData';

interface IndividualHardwarePageProps {
  size: string;
}

const IndividualHardwarePage: React.FC<IndividualHardwarePageProps> = ({ size }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const activeHardware = hardwareSizes.find(hw => hw.size === size) || hardwareSizes[0];

  // Floating particles animation with deterministic positions
  const particles = Array.from({ length: 15 }, (_, i) => {
    // Use index-based deterministic positioning instead of Math.random()
    const positions = [
      { left: 12, top: 18 }, { left: 88, top: 12 }, { left: 28, top: 72 },
      { left: 68, top: 28 }, { left: 42, top: 88 }, { left: 92, top: 58 },
      { left: 18, top: 42 }, { left: 58, top: 8 }, { left: 38, top: 92 },
      { left: 78, top: 68 }, { left: 8, top: 52 }, { left: 98, top: 22 },
      { left: 48, top: 2 }, { left: 22, top: 78 }, { left: 72, top: 48 }
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
    <>
      {/* Hero Section */}
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
                {size} Interactive Display Hardware Bundle
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
                {activeHardware.tagline}
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
              <Link href="/hardware">
                <motion.button
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Sizes
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full overflow-hidden py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Content Display Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HardwareContentDisplay 
              activeHardware={activeHardware}
              activeSize={size}
              isVisible={isVisible}
            />
          </motion.div>

          {/* Includes Section Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <HardwareIncludesSection 
              activeHardware={activeHardware}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndividualHardwarePage;
