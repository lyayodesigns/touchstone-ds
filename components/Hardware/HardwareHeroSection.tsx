"use client";

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import HardwareSizeSelector from './HardwareSizeSelector';
import HardwareContentDisplay from './HardwareContentDisplay';
import HardwareIncludesSection from './HardwareIncludesSection';
import { hardwareSizes } from './hardwareData';

const HardwareHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSize, setActiveSize] = useState('55"');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const activeHardware = hardwareSizes.find(hw => hw.size === activeSize) || hardwareSizes[0];

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.8, 0.2]
      }}
      transition={{
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 5
      }}
    />
  ));

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-20 md:pt-28 pb-0"
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
          className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-blue-50/90"
          animate={{ 
            opacity: [0.85, 0.95, 0.85],
            scale: [1, 1.02, 1]
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Size Selector Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <HardwareSizeSelector 
            hardwareSizes={hardwareSizes}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
            isVisible={isVisible}
          />
        </motion.div>

        {/* Content Display Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          key={activeSize}
        >
          <HardwareContentDisplay 
            activeHardware={activeHardware}
            activeSize={activeSize}
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
  );
};

export default HardwareHeroSection;
