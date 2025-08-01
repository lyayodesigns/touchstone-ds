"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { MessageSquare, Palette, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-400" />,
      number: "1",
      title: "Consultation",
      description: "We identify your goals (e.g., modernize hall of fame, boost donor visibility).",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      number: "2",
      title: "Custom Design",
      description: "Build interactive displays matching your school's branding and content needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Rocket className="h-8 w-8 text-pink-400" />,
      number: "3",
      title: "Activate & Manage",
      description: "Launch your touchscreen kiosks + train staff on our user-friendly CMS.",
      color: "from-pink-500 to-pink-600"
    }
  ];

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

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Simple Setup, Lasting Impact
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              3 Steps to Your Digital Transformation
            </p>
          </motion.div>
          
          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-1/2 h-[calc(100%-120px)] w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    {/* Step number */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 md:p-12 flex items-center justify-center w-48 h-48 shadow-lg`}>
                          <span className="text-7xl font-bold text-white">{step.number}</span>
                        </div>
                        <motion.div 
                          className="absolute -inset-3 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl -z-10"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.7, 0.5]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="md:w-1/2">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`bg-gradient-to-r ${step.color} rounded-full p-2`}>
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-lg text-foreground/70">{step.description}</p>
                        
                        {/* Example visualization */}
                        <div className="mt-6 bg-white/10 rounded-lg p-4">
                          {index === 0 && (
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                <span className="text-sm text-foreground/60">Needs Assessment</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                                <span className="text-sm text-foreground/60">Goal Setting</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                                <span className="text-sm text-foreground/60">Budget Planning</span>
                              </div>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="grid grid-cols-3 gap-2">
                              <div className="aspect-square bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-md"></div>
                              <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-md"></div>
                              <div className="aspect-square bg-gradient-to-br from-pink-500/30 to-pink-600/30 rounded-md"></div>
                            </div>
                          )}
                          {index === 2 && (
                            <div className="flex items-center justify-between">
                              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                              <div className="ml-3 text-sm font-medium text-foreground/60">100%</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl md:text-2xl italic text-foreground/80 max-w-3xl mx-auto">
              "Gone are the days of expensive, obsolete hardware. Our platform evolves with you."
            </blockquote>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
