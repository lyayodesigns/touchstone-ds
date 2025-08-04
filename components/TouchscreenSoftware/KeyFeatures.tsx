"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Trophy, Heart, BookOpen, Medal, Monitor, Star, ArrowRight } from 'lucide-react';

const KeyFeatures = () => {
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
      icon: <Trophy className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      number: "1",
      title: "Interactive Hall of Fame Software",
      description: "Showcase championship teams, Olympians, or Nobel laureates with dynamic profiles, highlight reels, and 3D trophy displays.",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      gradient: "from-amber-500/15 to-orange-500/15",
      borderGradient: "from-amber-400/40 to-orange-400/40",
      hoverGradient: "group-hover:from-amber-400/25 group-hover:to-orange-400/25"
    },
    {
      icon: <Heart className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      number: "2",
      title: "Digital Donor Recognition Walls",
      description: "Honor contributors with searchable profiles, impact stories, and real-time scholarship updates.",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      gradient: "from-pink-500/15 to-rose-500/15",
      borderGradient: "from-pink-400/40 to-rose-400/40",
      hoverGradient: "group-hover:from-pink-400/25 group-hover:to-rose-400/25"
    },
    {
      icon: <BookOpen className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      number: "3",
      title: "Cloud-Based School Archives",
      description: "Preserve yearbooks, historic photos, and school songs in a secure, easily navigable database.",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      gradient: "from-blue-500/15 to-cyan-500/15",
      borderGradient: "from-blue-400/40 to-cyan-400/40",
      hoverGradient: "group-hover:from-blue-400/25 group-hover:to-cyan-400/25"
    },
    {
      icon: <Medal className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      number: "4",
      title: "Athletics & Academics Hub",
      description: "Centralize team schedules, STEM achievements, tryout info, and leaderboards in one stunning interface.",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      gradient: "from-violet-500/15 to-purple-500/15",
      borderGradient: "from-violet-400/40 to-purple-400/40",
      hoverGradient: "group-hover:from-violet-400/25 group-hover:to-purple-400/25"
    },
    {
      icon: <Monitor className="h-5 w-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      number: "5",
      title: "Multi-Location Kiosk Sync",
      description: "Install identical touchscreen displays in gyms, auditoriums, and admissions offices—all updated simultaneously.",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      gradient: "from-emerald-500/15 to-teal-500/15",
      borderGradient: "from-emerald-400/40 to-teal-400/40",
      hoverGradient: "group-hover:from-emerald-400/25 group-hover:to-teal-400/25"
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles - Fixed positions to avoid hydration mismatch */}
      {[
        { x: '10%', y: '20%', duration: 15 },
        { x: '25%', y: '15%', duration: 18 },
        { x: '40%', y: '30%', duration: 20 },
        { x: '60%', y: '25%', duration: 14 },
        { x: '75%', y: '10%', duration: 22 },
        { x: '85%', y: '30%', duration: 16 },
        { x: '15%', y: '60%', duration: 19 },
        { x: '30%', y: '70%', duration: 21 },
        { x: '45%', y: '80%', duration: 17 },
        { x: '65%', y: '65%', duration: 23 },
        { x: '80%', y: '75%', duration: 15 },
        { x: '90%', y: '85%', duration: 20 }
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-violet-400/30 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [`calc(${particle.y} - 30px)`, `calc(${particle.y} + 30px)`, `calc(${particle.y} - 30px)`],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Enhanced Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
           
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why We're the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600">
                #1 Hall of Fame Software
              </span>
            </h2>
            
            <motion.div 
              className="flex justify-center items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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
                <Star className="w-3 h-3 text-violet-500" fill="currentColor" />
              </motion.div>
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 group cursor-pointer"
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
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 transition-all duration-300">
                      {feature.title}
                    </h3>
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
          
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center"
          >
      
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default KeyFeatures;
