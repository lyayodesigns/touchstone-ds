"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

// SSR/SSG compatible: No useEffect, useRef, or browser-only APIs. All framer-motion usage is SSR safe.

export const WhoWeAreSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="who-we-are">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
      <motion.div 
        className="absolute top-0 right-[15%] w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply opacity-20"
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-purple-200 mix-blend-multiply opacity-20"
        animate={{ 
          y: [0, -40, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-2 relative z-10 inline-block pb-1">
                <span className="text-transparent bg-clip-text text-gradient-purple-blue">
                  Who We
                </span>
                <span className="text-foreground"> Are</span>
              </h2>
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full -z-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
          {/* Content with modern design */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left side - Images and feature highlights */}
            <motion.div 
              className="lg:col-span-5 relative flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-10">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                {/* Main Image */}
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 relative z-10"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)" }}
                >
                  <img 
                    src="/TDS Cover - 4.jpg" 
                    alt="Touchstone Digital Solutions Founders" 
                    className="w-full h-[350px] object-cover"
                  />
                </motion.div>
              </div>
              {/* Feature highlights */}
              <div className="grid grid-cols-3 gap-3 mt-12">
                {[
                  { title: "Custom", icon: "🎨", delay: 1.0 },
                  { title: "Hands-On", icon: "✋", delay: 1.1 },
                  { title: "Collaborative", icon: "🤝", delay: 1.2 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex flex-col items-center justify-center text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 opacity-50" />
                    <div className="relative z-10 py-2">
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <span className="font-semibold text-gray-800 text-base">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Right side - Text content */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                <motion.p 
                  className="text-gray-700 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="text-xl font-medium text-blue-600">Touchstone Digital Solutions</span> is an industry leader in fully customized interactive touchscreen recognition software. Founded by two brothers with years of experience in the field, we saw an opportunity to do more—delivering bespoke digital recognition solutions that go beyond the standard offerings of our competitors.
                </motion.p>
                <motion.p 
                  className="text-gray-700 text-lg mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  At Touchstone, every project is a unique opportunity to craft a one-of-a-kind experience, tailored to the institution's identity and vision. We take a meticulous step-by-step approach, ensuring seamless integration and stunning design that transforms traditional Wall of Fame displays into dynamic, immersive showcases.
                </motion.p>
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Our unwavering focus on customization and innovation sets us apart. We don't offer generic, one-size-fits-all solutions; we create beautifully integrated, institution-specific experiences that celebrate history, achievements, and legacies in a powerful, engaging way. At TDS, we are pioneering the future of interactive recognition by blending cutting-edge technology with artistic excellence.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAreSection;
