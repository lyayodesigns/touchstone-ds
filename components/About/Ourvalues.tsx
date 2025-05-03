"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

export const OurValues = () => {
  return (
    <section className="py-24 relative overflow-hidden">
    {/* Background with animated gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 opacity-70"></div>
    {/* Animated background shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute bottom-0 right-[10%] w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply opacity-20"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute top-[20%] left-[5%] w-64 h-64 rounded-full bg-purple-200 mix-blend-multiply opacity-20"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
    <Container className="relative z-10">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 relative z-10">
            Our Values
          </h2>
          <motion.div 
            className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
        <motion.p
          className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          At Touchstone Digital Solutions, our business is rooted in core values that have guided us from the start.
        </motion.p>
      </motion.div>
      {/* Values Cards */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Value 1 */}
          <motion.div
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <div className="flex items-start">
                  <div className="mr-5">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Family-Owned Dedication</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We approach every project with the same level of commitment and care as if it were our own. 
                      Our personalized service sets us apart from larger competitors.
                    </p>
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Value 2 */}
          <motion.div
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-8">
                <div className="flex items-start">
                  <div className="mr-5">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Customer-Centric Approach</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Our clients are at the heart of everything we do. We collaborate closely with schools and 
                      communities to understand their needs and exceed expectations.
                    </p>
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Value 3 */}
          <motion.div
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <div className="flex items-start">
                  <div className="mr-5">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Innovation & Excellence</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We merge forward-thinking design with state-of-the-art technology to deliver solutions that are not only 
                      functional but also visually compelling. Our drive for excellence fuels continuous innovation and improvement.
                    </p>
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Value 4 */}
          <motion.div
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-foreground/10 h-full overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-8">
                <div className="flex items-start">
                  <div className="mr-5">
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Integrity & Trust</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We believe in building lasting relationships based on transparency, quality, and accountability. 
                      Our commitment to honesty and reliability ensures the highest standards in every project.
                    </p>
                    {/* Animated underline on hover */}
                    <motion.div 
                      className="h-0.5 bg-primary mt-4 w-0 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  </section>
  );
};
