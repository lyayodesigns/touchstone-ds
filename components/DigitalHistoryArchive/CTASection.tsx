"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const CTASection = () => {
  const consultationPoints = [
    "Evaluation of your present collection and preservation problems",
    "Summary of digital archiving solution and platform capabilities",
    "Timeline, budget and resource requirements discussed",
    "Assessment of regulatory compliance and security",
    "Tailored proposal, according to your needs as an institution"
  ];

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
            Willing to Leave a Legacy to Your Institution?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            The first one is easy: a consultation with our preservation officers of the digital sphere. We will hear about your collection, get to know your aims, and answer your questions, as well as describe a personal course of action.
          </p>

          <div className="mb-12">
            <a 
              href="/contact/" 
              className="inline-block px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get Your Free Assessment of Archives
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              The First Consultation:
            </h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {consultationPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-white leading-relaxed">
              The historical records of your institution, cultural heritage and organizational heritage should be professionally preserved. You are an academic researcher, cultural organization, corporation or community event; you may have 1,000 documents or 1 million items; you have a Digital History Archive that you want to come to life; Touchstone Digital Solutions can help you do so.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Book Your Digital History Archival Visit
            </h3>
            <p className="text-white/90 mb-6">
              Learn how our online preservation products can change the way your organization preserves, protects, and disseminates its invaluable heritage. Our consultation is absolutely free and obligation free.
            </p>
            <a 
              href="/contact/" 
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-full border-2 border-white/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule Your Consultation
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
