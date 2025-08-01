"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Zap, Sliders, Lock, Smartphone, Sparkles, ArrowRight, Play } from 'lucide-react';

const WhatIsTouchstone = () => {
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
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20 -z-10"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Premium decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      <Container className="relative z-10">
        {/* Premium Section Header */}
        <motion.div 
          className="text-center mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-blue-300 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-semibold">Revolutionary Platform</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
            variants={itemVariants}
          >
            <span className="block mb-4 text-white">What Is</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Touchstone?
            </span>
          </motion.h2>
          
          <motion.div 
            className="h-1.5 w-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-10"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We create <span className="font-bold text-white">bespoke touchscreen software</span> that transforms centuries of school history into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> immersive, interactive experiences</span>.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left side: Enhanced Device mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Premium device mockup */}
            <div className="relative perspective-1000">
              <motion.div 
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden"
                initial={{ rotateY: -15, rotateX: 5 }}
                animate={{ 
                  rotateY: [-15, 0, -15],
                  rotateX: [5, -2, 5]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
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
          
          {/* Right side: Premium Features Grid */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Premium gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl p-[1px]`}>
                    <div className="w-full h-full bg-gray-900/90 rounded-2xl" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon with glow effect */}
                    <div className="mb-4">
                      <motion.div 
                        className={`${feature.iconBg} backdrop-blur-sm rounded-xl p-3 border border-white/20 group-hover:border-white/40 transition-all duration-500 inline-flex`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300 text-sm mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Premium CTA */}
                    <motion.div 
                      className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-xs font-semibold mr-2">Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Premium CTA Section */}
            <motion.div
              className="mt-12 text-center"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  See It In Action
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Recognize anyone, anywhere, for any achievement—all with a single click."
                </p>
                
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsTouchstone;
