"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';

const AthleticLegacy = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,158,0.03),transparent_50%)]" />

      <Container>
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/60 rounded-full text-sm font-medium text-gray-600 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              The Athletic Hall of Fame, Reimagined
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                A hall of fame worthy of your athletic legacy
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
              Plaques fade. Walls fill up. Champions get forgotten.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight">
                    Decades of greatness deserve more than a wall.
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Your athletic department has decades, sometimes more than a century, of state titles, conference championships, record-breaking athletes, and coaches who shaped generations. A traditional plaque wall can fit maybe 40 names before it runs out of room.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 leading-tight">
                    A digital athletic hall of fame doesn't.
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Touchstone's interactive platform showcases unlimited inductees, induction classes, championship teams, and individual records on a single touchscreen display that's beautifully designed, instantly updatable, and built to grow with your program forever.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/digital trophy case/digital trophy case.webp"
                alt="digital athletic hall of fame touchscreen display"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AthleticLegacy;
