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
            Join the hundreds of institutions that have gone digital and never looked back
          </p>

          <div>
            <a 
              href="/contact/" 
              className="inline-block px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get Your Free Demo Today
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
