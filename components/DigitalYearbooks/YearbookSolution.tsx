"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const YearbookSolution = () => {
  const benefits = [
    {
      number: "1",
      title: "Professional Yearbook Digitization",
      description: "We bring about the disjunction between your beloved past and a safe, available future. Our yearbook scanning service is a professional offering that will convert your hard volumes to high quality and searchable digital yearbooks.",
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      number: "2",
      title: "Perfect For Everyone",
      description: "People who desire to save their own memories. Schools and Universities seeking to establish an online yearbook archive of alumni. Libraries & Historical Societies, interested in providing yearbook archives on a searchable database.",
      gradient: "from-[#447df5] to-[#265bd6]"
    },
    {
      number: "3",
      title: "High-Quality Results",
      description: "Yearbook digitization can simply be described as a process of converting your paper year books into a versatile electronic yearbook format. We do not simply capture a photo; we make a digital copy of each page, of the finest, archival quality.",
      gradient: "from-[#9fcdfd] to-[#6ea8fe]"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-white">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-purple-blue">
              The Solution: Touchstone Professional Yearbook Digitization
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your physical yearbooks into accessible digital archives
          </p>
        </motion.div>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{benefit.number}</span>
                  </div>
                </div>
                
                <div className="md:col-span-10 text-center md:text-left">
                  <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${benefit.gradient}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </Container>
    </section>
  );
};

export default YearbookSolution;
