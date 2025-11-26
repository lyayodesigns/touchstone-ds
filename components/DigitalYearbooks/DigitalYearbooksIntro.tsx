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
    "Senior portraits and portraits of underclassmen",
    "Documentary type shots of events and everyday life",
    "Sports team and club photos",
    "Personal messages and autographs of friends",
    "Faculty and staff sections"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#6ea8fe] to-[#447df5] rounded-full" />
              More Than Just a Book
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-gradient-purple-blue">
                What is a Yearbook?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light mb-8">
              A large number of individuals will question: What is a yearbook? or What is the point of a yearbook? A yearbook is really just a time capsule. It is the ultimate achievement of a school year, the faces, the spirit and the events that characterized a part of our lives.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              It could be elementary, a yearbook of the youth and youthful innocence, middle, a book of the awkward transition, high school, the book of the victory and friendship or a collegiate, university yearbook with its last best chapter of the academia which you will not replace.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">
              So, what is in a yearbook? Typically, it contains:
            </h3>
            
            <div className="space-y-4">
              {yearbookContents.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
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
