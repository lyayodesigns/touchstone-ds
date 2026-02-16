"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const FundraisingIntro = () => {
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

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
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
          {/* Main heading section */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Trusted by Mission-Driven Organizations
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Why Organizations Trust Touchstone Fundraising
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
              Every school, church, and nonprofit has a mission worth supporting. But too often, organizations struggle with outdated fundraising methods, disconnected tools, and donor fatigue.
            </p>
          </motion.div>

          {/* Image section */}
          <motion.div 
            className="mb-20"
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/touchstone%20fundraising/fundraising-1.avif" 
                alt="Touchstone Fundraising in action"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
            variants={itemVariants}
          >
            {/* Left column */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight">
                      Built for your unique challenges
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Whether you&apos;re searching for school fundraising ideas, planning a nonprofit fundraising event, or building a long-term nonprofit fundraising strategy, you need a partner who understands the unique challenges facing mission-driven organizations. Touchstone Fundraising, a dedicated service by Touchstone Digital Solutions, was built for exactly this purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 leading-tight">
                      Scalable solutions that grow with you
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      We combine cutting-edge fundraising software for nonprofits with hands-on consulting and proven strategies so your organization can focus on what matters most — your mission. We work with schools (K–12 and universities), churches, charitable organizations, youth groups, PTAs, and community nonprofits across the country. No matter your size or budget, Touchstone Fundraising provides a scalable, customizable solution designed to grow with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
};

export default FundraisingIntro;
