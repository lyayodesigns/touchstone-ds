"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const SchoolYearbookSolutions = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
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
