"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TrophyCaseDigitalAge = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                The Trophy Case in the Digital Age
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              For countless generations, trophies, medals, and plaques have symbolized struggle, dedication, and triumph. But physical displays have limitations—they gather dust, can be damaged, and never fully capture the glory of the win.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                What if the glory was immortalized?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                What if every single photo, video, game-winning moment, and statistic could be stored beside the award itself, accessible at any given moment from any corner of the world?
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Welcome to the future of recognition.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Touchstone Digital Solutions presents an innovative Digital Trophy Case—a secure, interactive, online platform for the permanent honoring of achievements.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TrophyCaseDigitalAge;
