"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HardwareData } from './hardwareData';

interface HardwareSizeSelectorProps {
  hardwareSizes: HardwareData[];
  activeSize: string;
  setActiveSize: (size: string) => void;
  isVisible: boolean;
}

const HardwareSizeSelector: React.FC<HardwareSizeSelectorProps> = ({
  hardwareSizes,
  activeSize,
  setActiveSize,
  isVisible
}) => {
  return (
    <div className="text-center mb-12 max-w-5xl mx-auto">
      <motion.div
        className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6 border border-purple-200/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
        <span className="text-sm font-medium text-purple-700">Premium Hardware Solutions</span>
      </motion.div>
      
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
        className="relative mb-6 md:mb-8"
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
        
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Choose from our range of premium interactive displays designed to bring your digital recognition to life with professional-grade touchscreen technology.
        </p>
      </motion.div>

      {/* Size Selector Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {hardwareSizes.map((hardware, index) => (
          <motion.button
            key={hardware.size}
            onClick={() => setActiveSize(hardware.size)}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeSize === hardware.size
                ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md hover:scale-102'
            } border border-white/40 hover:border-purple-200/60`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {hardware.size}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default HardwareSizeSelector;
