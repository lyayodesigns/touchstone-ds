"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Monitor, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { hardwareSizes } from './hardwareData';

const HardwareSizeGrid: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getImageForSize = (size: string) => {
    // Placeholder for now - you can replace with actual image paths
    return `/hardware-images/${size.toLowerCase().replace('"', '-inch')}-display.jpg`;
  };

  const getGradientForSize = () => {
    // Using consistent brand colors - purple to blue gradient
    return 'from-purple-600 to-blue-600';
  };

  const getSizeUrl = (size: string) => {
    return `/hardware/${size.toLowerCase().replace('"', '-inch-touchscreen-display')}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Choose Your Display Size
          </span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Select the perfect interactive display size for your space and requirements
        </motion.p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-8 md:gap-12">
        {hardwareSizes.map((hardware, index) => (
          <motion.div
            key={hardware.size}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHoveredCard(hardware.size)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Link href={getSizeUrl(hardware.size)}>
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 h-full border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden min-h-[350px] flex flex-col"
                whileHover={{ 
                  scale: 1.03,
                  y: -8
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${getGradientForSize()} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Floating particles effect */}
                {hoveredCard === hardware.size && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {Array.from({ length: 6 }, (_, i) => {
                      // Use deterministic positions for particles
                      const particlePositions = [
                        { left: 20, top: 30 }, { left: 70, top: 20 }, { left: 40, top: 60 },
                        { left: 80, top: 70 }, { left: 30, top: 80 }, { left: 60, top: 40 }
                      ];
                      const position = particlePositions[i] || { left: 50, top: 50 };
                      
                      return (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${getGradientForSize()} rounded-full`}
                          style={{
                            left: `${position.left}%`,
                            top: `${position.top}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                {/* Display Image - Larger space */}
                <div className="relative w-full h-40 md:h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 md:w-20 md:h-20 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">{hardware.size} Display</p>
                    </div>
                  </div>
                  {/* You can replace this with actual images later */}
                  {/* <img 
                    src={getImageForSize(hardware.size)} 
                    alt={`${hardware.size} Interactive Display`}
                    className="w-full h-full object-cover"
                  /> */}
                </div>

                {/* Three Column Layout: Size on Left, Specs in Middle, Arrow on Right */}
                <div className="flex-grow flex gap-8 md:gap-10 items-center">
                  {/* Left Column - Size Display (Vertically Centered) */}
                  <div className="flex-shrink-0 flex items-center">
                    <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${getGradientForSize()} bg-clip-text text-transparent`}>
                      {hardware.size}
                    </h3>
                  </div>
                  
                  {/* Middle Column - Specifications */}
                  <div className="flex-grow pl-4 md:pl-6">
                    <p className="text-gray-600 font-medium mb-3 text-base">Interactive Display</p>
                    
                    {/* Key Features */}
                    <div className="space-y-2.5">
                      {hardware.keyDetails.slice(0, 2).map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradientForSize()} mr-3 flex-shrink-0`} />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - CTA Arrow */}
                  <div className="flex-shrink-0 flex items-center">
                    <motion.div
                      className={`p-2 rounded-full bg-gradient-to-r ${getGradientForSize()} text-white`}
                      whileHover={{ scale: 1.1, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getGradientForSize()} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                  style={{ transform: 'scale(1.1)' }}
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-600 max-w-2xl mx-auto">
          Each display comes with professional-grade PCAP touch technology, industrial-grade construction, and a comprehensive 3-year warranty.
        </p>
      </motion.div>
    </div>
  );
};

export default HardwareSizeGrid;
