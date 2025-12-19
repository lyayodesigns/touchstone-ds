"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const RealWorldImpact = () => {
  const impacts = [
    {
      title: "Dramatically Increased Research Impact",
      description: "Researchers are now able to access collections previously invisible, and new scholarship and discoveries are the result.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Lower Physical Storage Cost",
      description: "Institutions have done away with costly climate-controlled physical storage, and have invested resources in activities that drive the missions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Improved Community Interaction",
      description: "Digitized collections will attract more people, raise institutional awareness and strengthen community ties with the help of various heritage materials.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Better Compliance and Risk Management",
      description: "Automated systems will provide regulatory compliance and guard against loss or disaster of irreplaceable materials.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Stored Institutional Memory",
      description: "The successive generations are now able to access past as the organization heritage helps to continue and honor the institutions.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50/50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Digital Preservation: Changing Institutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-World Impact
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.p
            className="text-lg text-gray-700 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Those organizations that have utilized our Digital History Archive have found outstanding results:
          </motion.p>

          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${impact.gradient} flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${impact.gradient}`}>
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RealWorldImpact;
