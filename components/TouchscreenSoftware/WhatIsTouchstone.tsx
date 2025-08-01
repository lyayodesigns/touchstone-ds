"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Zap, Sliders, Lock, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

const WhatIsTouchstone = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: <Zap className="h-7 w-7 text-yellow-500" />,
      title: "Lightning-Fast Database",
      description: "Access 100+ years of photos, records, and videos instantly.",
      gradient: "from-yellow-500/10 to-orange-500/10",
      borderGradient: "from-yellow-500/30 to-orange-500/30",
      iconBg: "bg-yellow-500/10"
    },
    {
      icon: <Sliders className="h-7 w-7 text-emerald-500" />,
      title: "Intuitive Content Management",
      description: "Update trophies, alumni spotlights, or event schedules in minutes—no IT degree needed.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
      iconBg: "bg-emerald-500/10"
    },
    {
      icon: <Lock className="h-7 w-7 text-blue-500" />,
      title: "Future-Proof Technology",
      description: "Ditch buggy, obsolete systems. Our software scales with you, delivering unmatched longevity.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      iconBg: "bg-blue-500/10"
    },
    {
      icon: <Smartphone className="h-7 w-7 text-purple-500" />,
      title: "Multi-Device Accessibility",
      description: "Display content on touchscreen kiosks in lobbies, gyms, or libraries—and sync to mobile for global access.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      iconBg: "bg-purple-500/10"
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-sm text-blue-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-semibold">Our Platform</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block mb-2">What Is Touchstone</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Touchscreen Software?
            </span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Touchstone creates bespoke touchscreen software that turns centuries of school history into 
            <span className="font-semibold text-gray-800"> immersive, interactive journeys</span>. Our cloud-based platform combines:
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side: Device mockup */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative perspective">
              <motion.div 
                className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-2xl overflow-hidden preserve-3d"
                initial={{ rotateY: -10 }}
                animate={{ 
                  rotateY: [-10, 5, -10],
                  rotateX: [-3, 3, -3]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.02, rotateY: 0 }}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-gray-800">Touchstone Digital Platform</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-800 font-semibold">Digital Hall of Fame</div>
                      <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">ACTIVE</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-white/60 border border-blue-200 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-blue-400/30"></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full w-full mb-2"></div>
                    <div className="h-2 bg-blue-200 rounded-full w-2/3"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-800 font-semibold">Interactive Records</div>
                      <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">UPDATED</div>
                    </div>
                    <div className="space-y-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-sm font-medium">2023</div>
                        <div className="h-3 bg-blue-400 rounded-full w-3/4 shadow-sm"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-sm font-medium">2022</div>
                        <div className="h-3 bg-purple-400 rounded-full w-1/2 shadow-sm"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-sm font-medium">2021</div>
                        <div className="h-3 bg-pink-400 rounded-full w-2/3 shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reflective surface */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent opacity-30 pointer-events-none rounded-3xl"></div>
                </div>
              </motion.div>
              {/* Enhanced Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/15 blur-2xl rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Right side: Features */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Border gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]`}>
                    <div className="w-full h-full bg-white/90 rounded-2xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className={`${feature.iconBg} backdrop-blur-sm rounded-xl p-3 border border-gray-200 group-hover:border-transparent transition-all duration-300`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {feature.icon}
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300 text-sm">
                          {feature.description}
                        </p>
                        
                        {/* Arrow indicator */}
                        <motion.div 
                          className="flex items-center mt-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <span className="text-sm font-semibold mr-2">Explore feature</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                
                <blockquote className="text-lg font-bold text-gray-800 text-center leading-tight">
                  "Recognize anyone, anywhere, for any achievement—all with a single click."
                </blockquote>
                
                <div className="flex items-center justify-center gap-2 text-blue-600 mt-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-semibold">Touchstone Promise</span>
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTouchstone;
