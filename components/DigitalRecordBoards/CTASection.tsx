"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Are You Ready to Change the Way You Display Your Records?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Stop keeping records in the old fashioned manner. Hundreds of institutions have gone digital and never looked back at their record boards.
          </p>

          <div className="mb-12">
            <a 
              href="/contact/" 
              className="inline-block px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get Your Free Demo Today
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Learn the ways Touchstone Digital Solutions can:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white">Waste not hundreds of hours each year on each employee</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white">Keep all the history of your institution</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white">Interact with visitors through interactive touch screens</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white">Implement compliance and data security</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/resources/" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-full border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Our Guidebook: The Ultimate Digital Records Management Checklist
            </a>
            <a 
              href="/demo/" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-full border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Demo: 3 Minutes to See Digital Record Boards at Work
            </a>
            <a 
              href="/contact/" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-full border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Talk to an Expert: 30-Minute Consultation
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
