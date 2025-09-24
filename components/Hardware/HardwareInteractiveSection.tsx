"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import HardwareSizeGrid from './HardwareSizeGrid';
import HardwareIncludesSection from './HardwareIncludesSection';
import { hardwareSizes } from './hardwareData';

const HardwareInteractiveSection: React.FC = () => {
  // Default to 55" for the includes section
  const activeHardware = hardwareSizes[0];

  // Floating particles animation with deterministic positions
  const particles = Array.from({ length: 15 }, (_, i) => {
    // Use index-based deterministic positioning instead of Math.random()
    const positions = [
      { left: 15, top: 25 }, { left: 80, top: 10 }, { left: 30, top: 75 },
      { left: 65, top: 35 }, { left: 40, top: 80 }, { left: 85, top: 55 },
      { left: 20, top: 50 }, { left: 55, top: 15 }, { left: 40, top: 95 },
      { left: 75, top: 70 }, { left: 10, top: 60 }, { left: 90, top: 30 },
      { left: 45, top: 10 }, { left: 25, top: 85 }, { left: 70, top: 45 }
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

      <div className="container mx-auto px-2 sm:px-3 md:px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6 border border-purple-200/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Interactive Display Solutions</span>
          </motion.div>
        </motion.div>

        {/* Hardware Size Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HardwareSizeGrid />
        </motion.div>

      </div>
    </section>
    
    {/* Includes Section Component - Outside with its own background */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <HardwareIncludesSection 
        activeHardware={activeHardware}
      />
    </motion.div>
    </>
  );
};

export default HardwareInteractiveSection;
