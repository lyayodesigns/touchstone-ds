"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const YearbookDilemma = () => {
  const problems = [
    {
      title: "Damage",
      description: "Spills, tears and environmental conditions such as humidity can destroy them.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      title: "Disaster",
      description: "Fires, floods, hurricanes, tornadoes, and more can wipe out all your history.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      title: "Limited Search",
      description: "Content cannot be searched, indexed, or surfaced by name, event, or moment. What is not already known is effectively invisible.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      title: "Inaccessibility",
      description: "With only a physical archive, alumni cannot access their history from anywhere in the world.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: "from-[#6ea8fe] to-[#447df5]"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient-purple-blue">
                The Dilemma
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Yearbooks are not saved digitally
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Each class carries countless stories, yet almost none of that history is preserved. With each passing year, it disappears, discarded, damaged, or forgotten, but yet it is so important.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-blue-600 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${problem.gradient}`}>
                  <div className="text-white">
                    {problem.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${problem.gradient}`}>
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold mb-4 text-gradient-purple-blue">
                Yearbook Affordability
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With sky high prices for annual yearbooks, many students cannot afford to purchase their own high school yearbook as a keepsake. With a yearbook archive, no student has to miss out on memories due to budget constraints.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default YearbookDilemma;
