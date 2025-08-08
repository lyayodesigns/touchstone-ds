"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';
import { Zap, Sliders, Lock, Smartphone, Sparkles, ArrowRight, Play, Star } from 'lucide-react';

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
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  } as const;

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Lightning-Fast Database",
      description: "Access 100+ years of photos, records, and videos instantly.",
      gradient: "from-amber-500/15 to-orange-500/15",
      borderGradient: "from-amber-400/40 to-orange-400/40",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      hoverGradient: "group-hover:from-amber-400/25 group-hover:to-orange-400/25"
    },
    {
      icon: <Sliders className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Intuitive Content Management",
      description: "Update trophies, alumni spotlights, or event schedules in minutes, no IT degree needed.",
      gradient: "from-emerald-500/15 to-teal-500/15",
      borderGradient: "from-emerald-400/40 to-teal-400/40",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      hoverGradient: "group-hover:from-emerald-400/25 group-hover:to-teal-400/25"
    },
    {
      icon: <Lock className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Future-Proof Technology",
      description: "Ditch buggy, obsolete systems. Our software scales with you, delivering unmatched longevity.",
      gradient: "from-blue-500/15 to-cyan-500/15",
      borderGradient: "from-blue-400/40 to-cyan-400/40",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      hoverGradient: "group-hover:from-blue-400/25 group-hover:to-cyan-400/25"
    },
    {
      icon: <Smartphone className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      title: "Multi-Device Accessibility",
      description: "Display content on touchscreen kiosks in lobbies, gyms, or libraries, and sync to mobile for global access.",
      gradient: "from-violet-500/15 to-purple-500/15",
      borderGradient: "from-violet-400/40 to-purple-400/40",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      hoverGradient: "group-hover:from-violet-400/25 group-hover:to-purple-400/25"
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
        {/* Enhanced Premium Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
        
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600">
              What Is Touchstone?
            </span>
            <br />
          </motion.h2>
          
          <motion.div 
            className="flex justify-center items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-violet-500" fill="currentColor" />
            </motion.div>
            <motion.div 
              className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.p 
            className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We create <span className="font-bold text-blue-600 dark:text-blue-400">bespoke touchscreen software</span> that transforms centuries of school history into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 font-bold"> immersive, interactive experiences</span> that inspire and engage.
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
            <div className="relative mx-auto w-full">
              {/* Image placeholder with border and shadow */}
              <div className="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/touchscreen%20software/Kiosk%20Mockup%20-%20Trial.webp"
                    alt="Touchstone kiosk mockup - trial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* Static decorative elements instead of animated ones */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-md -z-10" />
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl blur-md -z-10" />
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
                "Recognize anyone, anywhere, for any achievement, all with a single click."
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
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" } 
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className={`absolute inset-0 ${feature.iconBg} rounded-xl blur-sm opacity-50`}
                      whileHover={{ scale: 1.1, opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className={`relative ${feature.iconBg} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 z-10`}
                      whileHover={{ 
                        rotate: [0, -8, 8, 0],
                        scale: 1.05
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <motion.div 
                    className={`bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} backdrop-blur-sm border border-white/15 dark:border-white/10 rounded-2xl p-4 flex-1 shadow-md group-hover:shadow-lg group-hover:border-white/25 dark:group-hover:border-white/15 transition-all duration-400`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 transition-all duration-300">
                        {feature.title}
                      </h4>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <ArrowRight className="w-4 h-4 text-violet-500" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <motion.div 
                      className="mt-3 h-0.5 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-600/50 dark:to-gray-500/50 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                    >
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${feature.borderGradient} rounded-full`}
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1.2, delay: index * 0.15 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            

          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTouchstone;
