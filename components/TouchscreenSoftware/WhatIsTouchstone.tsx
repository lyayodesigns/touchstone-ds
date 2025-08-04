"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Zap, Sliders, Lock, Smartphone, Sparkles, ArrowRight, Play } from 'lucide-react';

const WhatIsTouchstone = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      
      <Container className="relative z-10">
        {/* Premium Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-blue-300 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-semibold">Revolutionary Platform</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
              What Is
            </span> Touchstone?
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We create <span className="font-semibold">bespoke touchscreen software</span> that transforms centuries of school history into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 font-semibold"> immersive, interactive experiences</span>.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Device mockup */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-white">Touchstone Digital Platform</h3>
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-800 font-medium text-sm">Digital Hall of Fame</div>
                      <div className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">ACTIVE</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-white/60 border border-blue-200 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-blue-400/30"></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-1.5 bg-blue-200 rounded-full w-full mb-1.5"></div>
                    <div className="h-1.5 bg-blue-200 rounded-full w-2/3"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-800 font-medium text-sm">Interactive Records</div>
                      <div className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">UPDATED</div>
                    </div>
                    <div className="space-y-2 mb-2">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-xs font-medium">2023</div>
                        <div className="h-2 bg-blue-400 rounded-full w-3/4 shadow-sm"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-xs font-medium">2022</div>
                        <div className="h-2 bg-purple-400 rounded-full w-1/2 shadow-sm"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-xs font-medium">2021</div>
                        <div className="h-2 bg-pink-400 rounded-full w-2/3 shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-md -z-10"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl blur-md -z-10"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
            
            {/* Closing statement */}
            <motion.div 
              className="mt-8 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-5"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.3 } 
              }}
            >
              <p className="text-foreground/80 italic">
                "Recognize anyone, anywhere, for any achievement—all with a single click."
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right side: Features */}
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                    <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-full text-white z-10 group-hover:shadow-glow-sm transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex-1 group-hover:bg-gradient-to-br group-hover:from-purple-600/10 group-hover:to-blue-600/10 group-hover:-translate-y-1 group-hover:shadow-glow-sm transition-all duration-300 cursor-pointer">
                    <h4 className="font-semibold text-lg text-foreground mb-2 flex items-center">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Animated dots */}
            <div className="flex justify-center mt-12 space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTouchstone;
