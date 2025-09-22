"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Monitor, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { HardwareData } from './hardwareData';

interface HardwareContentDisplayProps {
  activeHardware: HardwareData;
  activeSize: string;
  isVisible: boolean;
}

const HardwareContentDisplay: React.FC<HardwareContentDisplayProps> = ({
  activeHardware,
  activeSize,
  isVisible
}) => {
  return (
    <div key={activeSize}>
      {/* Main Content Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: [0.95, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text text-gradient-purple-blue">
            {activeHardware.title}
          </span>
        </motion.h2>

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
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {activeHardware.tagline}
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.a
          href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center btn-gradient hover-lift font-medium rounded-full px-8 py-4 text-lg whitespace-nowrap mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="w-5 h-5 mr-2" />
          For more information, book a demo
        </motion.a>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Left Column - Touchscreen Details */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Monitor className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800">Touchscreen Display</h3>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {activeHardware.description}
          </p>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 mb-4">Key Details:</h4>
            {activeHardware.keyDetails.map((detail, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Touchscreen Image */}
        <motion.div 
          className="bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-3xl p-8 border border-white/40 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <motion.div 
              className="relative w-full h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/hardware/touchscreen-picture.png" 
                alt={`${activeSize} Interactive Touchscreen Display`}
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="drop-shadow-xl"
              />
            </motion.div>
            <p className="text-gray-600 text-lg mt-4 font-medium">{activeSize} Interactive Display</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HardwareContentDisplay;
