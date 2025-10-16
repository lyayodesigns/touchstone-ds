"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TrophyCaseDigitalAge = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <Container>
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main heading section */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Evolution of Recognition
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                The Trophy Case in the Digital Age
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
              For countless generations, trophies, medals, and plaques have symbolized struggle, dedication, and triumph. But physical displays have limitations—they gather dust, can be damaged, and never fully capture the glory of the win.
            </p>
          </motion.div>

          {/* Content grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
            variants={itemVariants}
          >
            {/* Left column */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight">
                      What if the glory was immortalized?
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      What if every single photo, video, game-winning moment, and statistic could be stored beside the award itself, accessible at any given moment from any corner of the world?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 leading-tight">
                      Welcome to the future of recognition.
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Touchstone Digital Solutions presents an innovative Digital Trophy Case—a secure, interactive, online platform for the permanent honoring of achievements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div 
            className="mt-20"
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/digital trophy case/school-wall-trophies.jpg" 
                alt="Traditional trophy case display on school wall"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrophyCaseDigitalAge;
