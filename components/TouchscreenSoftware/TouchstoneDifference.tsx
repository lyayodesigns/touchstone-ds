"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Award, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';

const TouchstoneDifference = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  } as const;
  
  // Particle configuration with fixed positions to avoid hydration mismatch
  const particles = [
    { x: '10%', y: '20%', size: 'w-24 h-24', delay: 0, duration: 8 },
    { x: '85%', y: '15%', size: 'w-32 h-32', delay: 1, duration: 9 },
    { x: '70%', y: '60%', size: 'w-28 h-28', delay: 2, duration: 7 },
    { x: '15%', y: '70%', size: 'w-20 h-20', delay: 0.5, duration: 10 },
  ];

  // Key benefits of Touchstone
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "ROI Beyond Measure",
      description: "Attract students, retain teachers, and inspire donors with tech that wows.",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderGradient: "from-blue-500/20 to-indigo-500/20",
      animation: { rotate: 0, scale: [1, 1.1, 1] }
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "A Legacy That Never Graduates",
      description: "Preserve traditions while celebrating future leaders.",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      borderGradient: "from-violet-500/20 to-purple-500/20",
      animation: { rotate: [-5, 5, -5], scale: [1, 1.05, 1] }
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Limitless Content",
      description: "No wall space constraints? Show 10x more achievements than physical displays.",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/20 to-pink-500/20",
      animation: { rotate: 0, scale: [1, 1.1, 1] }
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Accessibility",
      description: "Rain or shine, game day or graduation—your story is always live.",
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderGradient: "from-pink-500/20 to-rose-500/20",
      animation: { rotate: 0, scale: [1, 1.1, 1] }
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.div 
          key={index}
          className={`absolute ${particle.size} rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl`}
          style={{ left: particle.x, top: particle.y }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [`calc(${particle.y} - 10px)`, `calc(${particle.y} + 10px)`, `calc(${particle.y} - 10px)`],
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity, 
            delay: particle.delay,
            ease: "easeInOut" 
          }}
        />
      ))}
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
           
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              The Touchstone{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Difference
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
           
          </motion.div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  {/* Background accent */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-full blur-3xl`}></div>
                  
                  {/* Icon and Title */}
                  <div className="flex items-start mb-4">
                    <motion.div 
                      className={`bg-gradient-to-br ${benefit.gradient} rounded-xl p-3 shadow-md mr-4`}
                      whileHover={benefit.animation}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <div className="text-white">{benefit.icon}</div>
                    </motion.div>
                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${benefit.gradient}`}>
                      {benefit.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 dark:text-white/80 pl-12 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${benefit.borderGradient} bg-clip-border`}></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <Award className="h-5 w-5 text-blue-500" />
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
              </div>
              
              <p className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-2">
                "Transform your school's recognition experience with Touchstone"
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-4 py-2 shadow-md"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TouchstoneDifference;
