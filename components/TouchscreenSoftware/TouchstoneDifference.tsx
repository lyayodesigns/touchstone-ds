"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { CheckCircle, XCircle } from 'lucide-react';

const TouchstoneDifference = () => {
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

  const comparisonPoints = [
    {
      title: "Customizable Design",
      touchstone: "Fully branded to your school colors, mascot, and traditions",
      others: "Cookie-cutter templates with minimal customization"
    },
    {
      title: "Content Management",
      touchstone: "Intuitive dashboard anyone can update in minutes",
      others: "Complex systems requiring IT support or vendor assistance"
    },
    {
      title: "Hardware Requirements",
      touchstone: "Works on any modern touchscreen—we can recommend or you provide",
      others: "Proprietary hardware that locks you into expensive upgrades"
    },
    {
      title: "Mobile Integration",
      touchstone: "Seamless sync between kiosks and mobile-friendly web versions",
      others: "Kiosk-only solutions with no remote access capabilities"
    },
    {
      title: "Future-Proofing",
      touchstone: "Cloud-based with regular feature updates included",
      others: "Static installations requiring costly refreshes every few years"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Touchstone{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Difference
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Why Leading Schools Choose Our Touchscreen Software Over Competitors
            </p>
          </motion.div>
          
          {/* Comparison Table */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
              <div className="text-lg font-semibold text-white">Feature</div>
              <div className="text-lg font-semibold text-blue-400">Touchstone</div>
              <div className="text-lg font-semibold text-white/60">Other Solutions</div>
            </div>
            
            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-white/5 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="font-medium text-white">{point.title}</div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point.touchstone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/60">{point.others}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                  TS
                </div>
              </div>
              <div className="md:w-3/4">
                <blockquote className="text-xl md:text-2xl italic text-white/90 mb-4">
                  "After comparing several options, we chose Touchstone's software because it offered the perfect balance of sophistication and simplicity. Our hall of fame has never looked better."
                </blockquote>
                <div className="text-white font-medium">
                  Athletic Director, Top-Ranked Prep School
                </div>
                <div className="text-white/60 text-sm">
                  Client Since 2021
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* SEO Keywords */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <p className="text-white/60 text-sm">
                <span className="font-semibold text-white">SEO Keywords:</span> Best Hall of Fame Software | Interactive Touchscreen Displays | Digital Trophy Case | School Recognition Software
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TouchstoneDifference;
