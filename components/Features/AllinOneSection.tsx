"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { CheckCircle } from 'lucide-react';

const AllinOneSection = () => {
  // Animation variants
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
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-purple-500/3 to-blue-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[15%] left-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[15%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <Container className="pt-0 mt-0">
        <div className="max-w-6xl mx-auto pt-0 mt-0">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side content */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={itemVariants}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  All-in-One
                </span> Digital Recognition Platform
              </motion.h2>
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.p 
                className="text-lg mb-8 text-foreground/80"
                variants={itemVariants}
              >
                Unify your institution's history, achievements, and contributions into one seamless touchscreen software experience.
              </motion.p>
              <motion.h3 
                className="text-xl font-semibold mb-4"
                variants={itemVariants}
              >
                Key Advantages:
              </motion.h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(50, 100, 200, 0.2)" }}
                >
                  <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Modern, Space-Saving Displays</h4>
                    <p className="text-foreground/70">Replace static plaques, bulletin boards, and outdated record boards with sleek digital displays.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(50, 100, 200, 0.2)" }}
                >
                  <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Deeper Community Engagement</h4>
                    <p className="text-foreground/70">Strengthen connections with students, alumni, and donors through dynamic, interactive content.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(50, 100, 200, 0.2)" }}
                >
                  <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Elevated Professional Image</h4>
                    <p className="text-foreground/70">Impress visitors, prospective students, and benefactors with a high-tech, visually captivating showcase.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* Right side illustration */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative perspective">
                <div className="rounded-2xl overflow-hidden shadow-xl transform scale-110 mx-auto max-w-[120%]">
                  <img 
                    src="/features/Touchstone Mobile Mockup.webp" 
                    alt="Touchstone Mobile Mockup" 
                    className="w-full h-auto object-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllinOneSection;