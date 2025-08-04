"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Ban, Award, Globe, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const WhyChooseTouchstone = () => {
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

  const benefits = [
    {
      icon: <Ban className="h-8 w-8 text-blue-500" />,
      title: "Consolidate Physical Space",
      description: "Replace bulky trophies, plaques, and wall displays with sleek, all-in-one interactive kiosks. Free up hallway and classroom real estate.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      iconBg: "bg-blue-500/10"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Professionalize Your Image",
      description: "Impress prospective families and visitors with state-of-the-art digital showcases that scream innovation.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      iconBg: "bg-purple-500/10"
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      title: "Connect Globally",
      description: "Let alumni in Tokyo or donors in Toronto access your hall of fame, records, or donor wall from any device.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
      iconBg: "bg-emerald-500/10"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Boost Engagement",
      description: "Celebrate championships, academic wins, and student art in vivid multimedia—no more dusty glass cases!",
      gradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-500/30 to-red-500/30",
      iconBg: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Badge */}
          
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span>Transform Your School's </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Recognition Experience
              </span>
            </h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tired of outdated displays, cluttered hallways, and forgotten achievements? 
              <span className="font-semibold text-gray-800"> Touchstone's cutting-edge touchscreen software</span> solves these pain points:
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-full mx-auto">
            {/* Left side - List content */}
            <motion.div className="md:w-1/2 order-2 md:order-1">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative border-l-2 pl-4 mb-8 last:mb-0"
                  style={{
                    borderLeftColor: index === 0 ? '#3b82f6' : 
                                   index === 1 ? '#8b5cf6' : 
                                   index === 2 ? '#10b981' : 
                                   '#f97316'
                  }}
                >
                  {/* Dot on the timeline */}
                  <div 
                    className="absolute -left-[5px] top-0 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: index === 0 ? '#3b82f6' : 
                                     index === 1 ? '#8b5cf6' : 
                                     index === 2 ? '#10b981' : 
                                     '#f97316'
                    }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-start">
                      <h3 className="text-lg font-bold text-gray-800 flex items-center">
                        {benefit.title}
                        <motion.span 
                          className="inline-flex ml-2 opacity-70"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          {benefit.icon}
                        </motion.span>
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mt-1 mb-2 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div 
              className="md:w-1/2 relative order-1 md:order-2"
              variants={itemVariants}
            >
              <div className="sticky top-24">
                <div className="relative">
                  {/* Modern Touchscreen Kiosk */}
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 shadow-2xl">
                    {/* Kiosk Stand Base */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full opacity-60"></div>
                    
                    {/* Screen Bezel */}
                    <div className="relative bg-black rounded-2xl p-4 shadow-inner">
                      {/* Screen */}
                      <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-xl overflow-hidden">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center justify-between px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-white/60 text-xs">Touchstone Digital</span>
                          </div>
                          <div className="text-white/60 text-xs">12:34 PM</div>
                        </div>
                        
                        {/* Animated Content Area */}
                        <div className="p-6 h-full relative overflow-hidden">
                          {/* Central Pulsing Circle */}
                          <motion.div 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          >
                            <motion.div
                              className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 backdrop-blur-sm border border-white/20"
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360]
                              }}
                              transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              {/* Inner rotating elements */}
                              <div className="relative w-full h-full">
                                {[0, 1, 2, 3].map((index) => (
                                  <motion.div
                                    key={index}
                                    className="absolute w-4 h-4 bg-gradient-to-r from-white/60 to-white/30 rounded-full"
                                    style={{
                                      top: '50%',
                                      left: '50%',
                                      transformOrigin: '50% 50%'
                                    }}
                                    animate={{
                                      rotate: [index * 90, (index * 90) + 360],
                                      x: [0, 40, 0, -40, 0],
                                      y: [0, -40, 0, 40, 0]
                                    }}
                                    transition={{
                                      duration: 6,
                                      delay: index * 0.5,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                          
                          {/* Floating Geometric Shapes */}
                          {[
                            { shape: 'circle', color: 'from-yellow-400 to-orange-400', size: 'w-6 h-6', pos: { top: '20%', left: '15%' } },
                            { shape: 'square', color: 'from-blue-400 to-cyan-400', size: 'w-5 h-5', pos: { top: '25%', right: '20%' } },
                            { shape: 'circle', color: 'from-green-400 to-emerald-400', size: 'w-4 h-4', pos: { bottom: '30%', left: '10%' } },
                            { shape: 'square', color: 'from-purple-400 to-pink-400', size: 'w-7 h-7', pos: { bottom: '20%', right: '15%' } },
                            { shape: 'circle', color: 'from-pink-400 to-rose-400', size: 'w-3 h-3', pos: { top: '40%', left: '80%' } },
                            { shape: 'square', color: 'from-cyan-400 to-blue-400', size: 'w-5 h-5', pos: { top: '70%', left: '20%' } }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className={`absolute ${item.size} bg-gradient-to-r ${item.color} ${
                                item.shape === 'circle' ? 'rounded-full' : 'rounded-lg rotate-45'
                              } backdrop-blur-sm opacity-70`}
                              style={item.pos}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: [0, 1, 1.2, 1],
                                opacity: [0, 0.7, 0.9, 0.7],
                                y: [0, -20, 0, 20, 0],
                                rotate: item.shape === 'square' ? [45, 90, 135, 180, 225] : [0, 360]
                              }}
                              transition={{
                                duration: 8 + (index * 0.5),
                                delay: 1 + (index * 0.3),
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                          
                          {/* Animated Lines/Connections */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {[1, 2, 3].map((_, i) => (
                              <motion.line
                                key={i}
                                x1={`${20 + (i * 25)}%`}
                                y1={`${30 + (i * 15)}%`}
                                x2={`${60 + (i * 10)}%`}
                                y2={`${70 - (i * 20)}%`}
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                  pathLength: [0, 1, 0],
                                  opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                  duration: 4,
                                  delay: 2 + (i * 1),
                                  repeat: Infinity,
                                  repeatDelay: 3
                                }}
                              />
                            ))}
                          </svg>
                          
                          {/* Touch Ripple Effects */}
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-8 h-8 border border-white/20 rounded-full"
                              style={{
                                top: `${25 + (i * 12)}%`,
                                left: `${20 + (i * 15)}%`,
                              }}
                              animate={{
                                scale: [0, 2.5, 0],
                                opacity: [0, 0.4, 0],
                                borderWidth: [1, 3, 1]
                              }}
                              transition={{
                                duration: 3,
                                delay: i * 0.8,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {[0, 1, 2].map((i) => (
                            <motion.div 
                              key={i} 
                              className={`w-2 h-2 rounded-full ${
                                i === 1 ? 'bg-white' : 'bg-white/40'
                              }`}
                              animate={{
                                scale: i === 1 ? [1, 1.2, 1] : 1,
                                opacity: i === 1 ? [1, 0.7, 1] : 0.4
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                      </div>
                      
                      {/* Screen Reflection */}
                      <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Kiosk Brand Label */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white/80 text-xs font-medium">Touchstone™</span>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="flex items-center justify-center mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-[1px] w-12 bg-gradient-to-r from-blue-400 to-transparent"></div>
                <Sparkles className="w-5 h-5 text-blue-500 mx-3" />
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
              </motion.div>
              
              <blockquote className="text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto mb-2 leading-relaxed italic">
                "We transform static halls of fame into memorable interactive experiences that never graduate."
              </blockquote>
              
              <div className="flex items-center justify-center text-blue-600">
                <span className="text-sm font-semibold">Touchstone Digital Solutions</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseTouchstone;
