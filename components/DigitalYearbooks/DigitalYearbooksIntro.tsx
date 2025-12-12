"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalYearbooksIntro = () => {
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

  const yearbookContents = [
    "Senior portraits, underclass headshots, and faculty rosters",
    "Candid moments from pep rallies, dances, and more",
    "Highlights of sports and clubs",
    "Polls, superlatives, and pop culture of the year",
    "And of course, autograph pages filled with notes from classmates"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-gradient-purple-blue">
                What is a Yearbook?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light mb-8">
              People often ask what a yearbook is or why it matters. A yearbook is more than a time capsule, it is the essence of every year's history. It captures the achievements, faces, spirit, and events that shaped each school year and became part of our lives. A yearbook holds moments you cannot replace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-8">
              Why restrict that history to if you or your family bought the book or not?
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Every student should be able to search through decades of history to find their parent, grand parent, or even great grandparent!
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">
              So, what is in a yearbook? Typically, it contains:
            </h3>
            
            <div className="space-y-2">
              {yearbookContents.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-light text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DigitalYearbooksIntro;
