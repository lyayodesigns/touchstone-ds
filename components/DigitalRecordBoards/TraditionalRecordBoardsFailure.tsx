"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

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
      title: "Hours Required",
      description: "Manual updates - Each time a new record is established, staff members have to physically change strips, panels or nameplates.",
      icon: "⏰"
    },
    {
      title: "Limited Capacity",
      description: "It is also due to material space that is not much, old records are lost as new records are created to take their place and forget the history of your institution.",
      icon: "📦"
    },
    {
      title: "No Interaction",
      description: "Static exhibits interact into the background, and they lack the possibilities of motivating students, athletes, and visitors.",
      icon: "🚫"
    },
    {
      title: "Scattered Information",
      description: "Data stored in various systems and localities is also confusing and problematic to access.",
      icon: "🔀"
    },
    {
      title: "First Impressions Count",
      description: "Sluggish displays project the wrong message when conducting tours, recruiting and special events.",
      icon: "👁️"
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
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                The Failure of Traditional Record Boards
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
              The old record boards are no longer in use. They need continuous hand-updating, take excessive space on the walls, and do not attract the attention of the modern viewers. The old-fashioned record display boards such as magnetic boards or add-a-name plaques could not stand the challenge of the digital demands of today.
            </p>
          </motion.div>

          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">
              The Limitations You are Having:
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
                  <div className="text-4xl mb-4">{limitation.icon}</div>
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
              The success of your institution has the right to be modernized. Time to move on to an interactive, cloud-based records management that appreciates the past and celebrates new wins.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TraditionalRecordBoardsFailure;
