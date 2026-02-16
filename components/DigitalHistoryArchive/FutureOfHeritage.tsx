"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import Image from 'next/image';

const FutureOfHeritage = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />
      
      <Container>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Before & After: The Digital Transformation
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Touchstone transforms cluttered physical archives into organized, searchable digital collections
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 transition-all duration-300 ${
                  !isAfter ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsAfter(false)}
              >
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  BEFORE
                </div>
                <Image
                  src="/digital history archives/before.avif"
                  alt="Before: Physical archive storage"
                  width={600}
                  height={400}
                  className="w-full h-auto cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Physical Storage Challenges</p>
                  <p className="text-white/90 text-sm">Cluttered, hard to find, vulnerable to damage</p>
                </div>
              </motion.div>

              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 transition-all duration-300 ${
                  isAfter ? 'border-purple-500 scale-105' : 'border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsAfter(true)}
              >
                <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  AFTER
                </div>
                <Image
                  src="/digital history archives/after.avif"
                  alt="After: Digital archive platform"
                  width={600}
                  height={400}
                  className="w-full h-auto cursor-pointer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Digital Archive Solution</p>
                  <p className="text-white/90 text-sm">Organized, searchable, protected forever</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">Click on either image to highlight it</p>
            </div>
          </div>

          <motion.div
            className="mt-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-700 font-medium">Searchable Content</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-700 font-medium">Access Anywhere</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                <p className="text-gray-700 font-medium">Preservation Forever</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FutureOfHeritage;
