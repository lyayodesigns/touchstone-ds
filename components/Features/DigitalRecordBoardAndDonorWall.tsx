"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Trophy, BarChart3, Film, Search, Medal, Video, RotateCcw } from 'lucide-react';

const DigitalRecordBoardAndDonorWall = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Feature items for Digital Record Boards
  const recordBoardFeatures = [
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Athletic & Academic Records",
      description: "Highlight top performances in sports, academics, and extracurriculars."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Real-Time Updates",
      description: "Instantly update leaderboards, stats, and rankings without the need for reprints."
    },
    {
      icon: <Film className="h-5 w-5" />,
      title: "Multimedia Integration",
      description: "Add photos, videos, and athlete profiles for an enhanced experience."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Easy Search & Filtering",
      description: "Let users explore records by sport, year, or category."
    }
  ];

  // Feature items for Digital Donor Walls
  const donorWallFeatures = [
    {
      icon: <Medal className="h-5 w-5" />,
      title: "Customizable Recognition Tiers",
      description: "Highlight major donors, sponsors, and benefactors at different levels."
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Multimedia Storytelling",
      description: "Feature donor spotlights, testimonials, and video messages of gratitude."
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "Real-Time Updates",
      description: "Instantly add new donors and adjust recognition levels as contributions grow."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/3 to-indigo-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-0 w-72 h-72 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Plus symbols as decorative elements */}
      <div className="absolute top-[15%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[15%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      
      <Container>
       
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                Interactive
              </span> Digital Solutions
            </motion.h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          {/* Digital Record Boards Section */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left side - Image */}
              <motion.div 
                className="lg:w-1/2 mb-8 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative mx-auto max-w-md">
                  {/* Main image with frame */}
                  <motion.div 
                    className="relative z-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-1 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/TDS Cover - 7.jpg" 
                      alt="Digital Record Board" 
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-md -z-10"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur-md -z-10"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </div>
              </motion.div>
              
              {/* Right side - Content */}
              <motion.div 
                className="lg:w-1/2 lg:pl-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600"
                  variants={itemVariants}
                >
                  Digital Record Boards
                </motion.h3>
                
                <motion.p 
                  className="text-foreground/80 mb-6"
                  variants={itemVariants}
                >
                  Showcase school records and achievements in an engaging and modern format.
                </motion.p>
                
                <div className="space-y-6">
                  {recordBoardFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="relative"
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-sm"></div>
                          <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-full text-white z-10">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-foreground/70">{feature.description}</p>
                        </div>
                      </div>
                      
                      {/* Connecting line to next item */}
                      {index < recordBoardFeatures.length - 1 && (
                        <div className="absolute left-[12px] top-[40px] w-0.5 h-[calc(100%-20px)] bg-gradient-to-b from-purple-500/30 to-blue-500/30"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Digital Donor Walls Section */}
          <div>
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Left side - Content */}
              <motion.div 
                className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  variants={itemVariants}
                >
                  Dynamic Digital Donor Walls
                </motion.h3>
                
                <motion.p 
                  className="text-foreground/80 mb-6"
                  variants={itemVariants}
                >
                  Recognize and celebrate the contributions of those who shape your institution's future.
                </motion.p>
                
                <div className="space-y-6">
                  {donorWallFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="relative"
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm"></div>
                          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full text-white z-10">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-foreground/70">{feature.description}</p>
                        </div>
                      </div>
                      
                      {/* Connecting line to next item */}
                      {index < donorWallFeatures.length - 1 && (
                        <div className="absolute left-[12px] top-[40px] w-0.5 h-[calc(100%-20px)] bg-gradient-to-b from-blue-500/30 to-purple-500/30"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right side - Image */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative mx-auto max-w-md">
                  {/* Main image with frame */}
                  <motion.div 
                    className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-1 shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/Donor-Wall-Layout.jpg" 
                      alt="Digital Donor Wall" 
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-3 -right-3 w-full h-full bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-xl blur-md -z-10"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-3 -left-3 w-full h-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-xl blur-md -z-10"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalRecordBoardAndDonorWall;