"use client";

import React from "react";
import { motion } from 'framer-motion';
import { Shield, Headphones, Wrench, ExternalLink, Truck } from 'lucide-react';
import Image from 'next/image';
import { HardwareData } from './hardwareData';

interface HardwareIncludesSectionProps {
  activeHardware: HardwareData;
}

const HardwareIncludesSection: React.FC<HardwareIncludesSectionProps> = ({
  activeHardware
}) => {
  const includesData = [
    {
      icon: Wrench,
      title: activeHardware.includes.mounting.title,
      description: activeHardware.includes.mounting.description,
      details: activeHardware.includes.mounting.details,
      imageText: "Mounting Bracket",
      bgGradient: "from-gray-100/50 to-gray-200/50",
      iconColor: "text-gray-400",
      category: "Mounting Bracket"
    },
    {
      icon: Headphones,
      title: "Accessories",
      description: activeHardware.includes.accessories,
      details: ["HDMI Cables", "Touch Cords", "Remote Control", "Setup Guide"],
      imageText: "Remote & Accessories",
      bgGradient: "from-blue-100/50 to-purple-100/50",
      iconColor: "text-blue-500",
      category: "Accessories"
    },
    {
      icon: Shield,
      title: "3-Year Warranty",
      description: activeHardware.includes.warranty,
      details: ["Advance Unit Replacement (AUR)", "On-Site Exchange (OSE)", "Technical Support", "Parts & Labor Coverage"],
      imageText: "Protected & Covered",
      bgGradient: "from-green-100/50 to-blue-100/50",
      iconColor: "text-green-500",
      category: "Warranty"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: activeHardware.includes.freeShipping,
      details: ["No Hidden Fees", "Professional Packaging", "Nationwide Delivery", "Tracking Included"],
      imageText: "Free Delivery",
      bgGradient: "from-orange-100/50 to-yellow-100/50",
      iconColor: "text-orange-500",
      category: "Free Shipping"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4"
          whileInView={{ scale: [0.95, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text text-gradient-purple-blue">
            What's Included
          </span>
        </motion.h3>
        
        {/* Decorative line */}
        <motion.div 
          className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

          <div className="space-y-24">
            {includesData.map((item, index) => (
          <motion.div 
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            {/* Image Section - Left Side */}
            <motion.div 
              className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 border border-white/40 hover:shadow-xl transition-all duration-300">
                {/* All sections now use images, so we don't need badges anymore */}
                {false && (
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-4 border border-purple-200/50">
                      <item.icon className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-purple-700">{item.category}</span>
                    </div>
                  </div>
                )}
                
                <motion.div 
                  className="rounded-2xl overflow-hidden w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {index === 0 ? (
                    <motion.div 
                      className="relative w-full h-[320px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src="/hardware/mount-picture.png" 
                        alt="Mounting Bracket"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="drop-shadow-md"
                      />
                    </motion.div>
                  ) : index === 1 ? (
                    <motion.div 
                      className="relative w-full h-[320px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src="/hardware/remote.png" 
                        alt="Remote & Accessories"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="drop-shadow-md"
                      />
                    </motion.div>
                  ) : index === 2 ? (
                    <motion.div 
                      className="relative w-full h-[320px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src="/hardware/warrantyimage.webp" 
                        alt="Warranty Protection"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="drop-shadow-md"
                      />
                    </motion.div>
                  ) : index === 3 ? (
                    <motion.div 
                      className="relative w-full h-[320px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src="/hardware/freeshiping.webp" 
                        alt="Free Shipping"
                        fill
                        style={{ objectFit: 'contain', background: 'transparent' }}
                        className="mix-blend-multiply"
                      />
                    </motion.div>
                  ) : (
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className={`w-16 h-16 ${item.iconColor} mx-auto mb-4`} />
                      </motion.div>
                      <p className={`text-lg font-medium ${
                        item.title === "3-Year Warranty" ? "text-green-600" : "text-gray-600"
                      }`}>
                        {item.imageText}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Professional Grade</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section - Right Side */}
            <motion.div 
              className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + 0.2 * index }}
            >
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800">{item.title}</h4>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {item.details && (
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 text-lg">Key Features:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.details.map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex} 
                          className="flex items-center bg-white/60 rounded-xl p-3 border border-white/40"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * detailIndex }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* <motion.button
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Specifications
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                </motion.button> */}
              </div>
            </motion.div>
          </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareIncludesSection;
