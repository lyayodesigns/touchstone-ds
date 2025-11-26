"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const SchoolYearbookSolutions = () => {
  const solutions = [
    {
      title: "Digital Yearbook Ideas",
      description: "We assist schools in making new memories as well as scanning old volumes. We even offer digital yearbook ideas, digital yearbook examples and handsome digital yearbook software.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Modern Yearbook Creation",
      description: "Our tools enable the whole process to take place, starting with brainstorming yearbook name ideas and yearbook template ideas and continuing with yearbook roles and yearbook content curation.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Affordable Solutions",
      description: "We empower the production of the online yearbook high school students will be proud of, and affordable yearbook that all families could afford.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-pink-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
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
              School Digital Yearbook Solutions
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Comprehensive tools and services for creating modern digital yearbooks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`text-blue-600 mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${solution.gradient}`}>
                <div className="text-white">
                  {solution.icon}
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${solution.gradient}`}>
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Ready to Create Your Digital Yearbook?
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you're digitizing historical yearbooks or creating new ones, we have the perfect solution for your school.
            </p>
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="inline-block px-8 py-4 btn-gradient hover-lift font-medium rounded-full shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SchoolYearbookSolutions;
