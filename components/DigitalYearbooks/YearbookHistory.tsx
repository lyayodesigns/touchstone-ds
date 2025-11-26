"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const YearbookHistory = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-purple-blue">
                A Peep into the Past
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              The History of Yearbooks
            </h3>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Knowing the history of yearbooks would be an extra layer to the preservation process. The question many people ask is, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">what is the yearbook invented</span> or <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">"when did yearbooks start?"</span>
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">1841</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">The First Yearbook</h4>
                    <p className="text-gray-700">
                      In 1841, the Yale Banner was the first known school yearbook in the United States.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                To begin with, they were plain, large text books. With time, they developed to contain photographs forming the visual memory books that we have today.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 my-8">
                <p className="text-center text-gray-800 font-medium text-xl">
                  It is a treasure of a culture that this rich history of yearbooks is worth saving.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default YearbookHistory;
