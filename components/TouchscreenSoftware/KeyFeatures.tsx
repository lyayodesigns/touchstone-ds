"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Trophy, Heart, BookOpen, Medal, Monitor } from 'lucide-react';

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
      icon: <Trophy className="h-12 w-12 text-amber-400" />,
      number: "1",
      title: "Interactive Hall of Fame Software",
      description: "Showcase championship teams, Olympians, or Nobel laureates with dynamic profiles, highlight reels, and 3D trophy displays."
    },
    {
      icon: <Heart className="h-12 w-12 text-pink-400" />,
      number: "2",
      title: "Digital Donor Recognition Walls",
      description: "Honor contributors with searchable profiles, impact stories, and real-time scholarship updates."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-400" />,
      number: "3",
      title: "Cloud-Based School Archives",
      description: "Preserve yearbooks, historic photos, and school songs in a secure, easily navigable database."
    },
    {
      icon: <Medal className="h-12 w-12 text-purple-400" />,
      number: "4",
      title: "Athletics & Academics Hub",
      description: "Centralize team schedules, STEM achievements, tryout info, and leaderboards in one stunning interface."
    },
    {
      icon: <Monitor className="h-12 w-12 text-green-400" />,
      number: "5",
      title: "Multi-Location Kiosk Sync",
      description: "Install identical touchscreen displays in gyms, auditoriums, and admissions offices—all updated simultaneously."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
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
              Key Features: Why We're the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                #1 Hall of Fame Software
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
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300`}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(50, 100, 200, 0.2)" }}
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-8 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {feature.number}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
              <p className="text-lg md:text-xl text-foreground/80">
                <span className="font-semibold">SEO Keywords:</span> Touchscreen Software | Hall of Fame Software | Interactive Displays | Digital Legacy Platform | Donor Recognition Systems
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default KeyFeatures;
