"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { DollarSign, Calendar, Wrench, Users, Maximize2, MapPin } from 'lucide-react';

const TraditionalRecordBoardsFailure = () => {
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

  const limitations = [
    {
      title: "Expensive",
      description: "Physical record boards require thousands of dollars to purchase and install, followed by ongoing yearly costs for updates as new record holders are added.",
      icon: DollarSign
    },
    {
      title: "Standard Static Boards",
      description: "Physical record boards have not meaningfully changed in decades. Even newly installed boards look the same as those from generations ago and do not evolve with modern expectations or technology.",
      icon: Calendar
    },
    {
      title: "Manual Updates",
      description: "Each update requires ordering a replacement nameplate, matching the design, getting on a ladder, and changing the record holder. The process is slow, repetitive, and labor intensive.",
      icon: Wrench
    },
    {
      title: "Record Holder Limits",
      description: "Most physical boards display only a single record holder per event. Showing additional holders becomes impractical due to space and cost constraints.",
      icon: Users
    },
    {
      title: "Limited Wall Space",
      description: "Wall space is finite. Banners, plaques, and boards quickly compete for room, making it difficult to represent every sport or achievement fairly.",
      icon: Maximize2
    },
    {
      title: "On-Campus Visibility Only",
      description: "Record boards can only be viewed in person on campus in the specific area. Record holders must take a picture of the board to share their achievement, limiting reach and accessibility.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
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
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              The Problem
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                The Failure of Traditional Record Boards
              </span>
            </h2>

            <motion.div
              className="relative mb-8 md:mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="/digital record boards/Traditional Record Boards.avif" 
                alt="Traditional Record Boards"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
              Physical record boards demand manual upkeep, take up valuable wall space, and can look outdated fast. Although they are eye-catching, they are often exclusionary. Basketball, track & field, swim & dive, and wrestling may get them if they are lucky but those boards are expensive to maintain. Plus, they involve ordering new name plates, ladders, and even dusting. Traditional boards fall short of today's demands and busy schedules.
            </p>
          </motion.div>

          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">
              The Limitations You Are Facing:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {limitations.map((limitation, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <limitation.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {limitation.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    {limitation.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-gray-700 font-light">
              "Just because it is the way it's always been doesn't mean it's how it should be done".
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TraditionalRecordBoardsFailure;
