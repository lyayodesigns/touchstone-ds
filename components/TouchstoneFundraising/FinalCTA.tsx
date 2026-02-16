"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const FinalCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ready to Transform Your Fundraising?
            </span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-4 max-w-3xl mx-auto">
            Your organization&apos;s mission deserves the best support. Touchstone Fundraising by Touchstone Digital Solutions gives you the strategy, technology, and partnership you need to raise more, engage supporters, and make a lasting impact.
          </p>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl mx-auto">
            Whether you&apos;re looking for fundraising ideas for NPO organizations, seeking the best nonprofit fundraising software, or planning your next charity fundraising event, Touchstone is here to help.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="/contact/" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started — Book Your Free Consultation
            </a>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </Container>
    </section>
  );
};

export default FinalCTA;
