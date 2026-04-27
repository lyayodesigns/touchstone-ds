"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 w-full bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-blue-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full blur-3xl -z-10"></div>

      <div className="absolute top-[10%] left-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute bottom-[10%] right-[5%] text-foreground/10 text-2xl sm:text-3xl">+</div>
      <div className="absolute top-[40%] right-[10%] text-foreground/10 text-2xl sm:text-3xl">+</div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
            Honor the athletes who built your program.{' '}
            <span className="text-transparent text-gradient-purple-blue">
              Inspire the ones who'll write the next chapter.
            </span>
          </h2>

          <p className="text-foreground/70 text-lg mb-10">
            Your digital athletic hall of fame is waiting.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Free Demo
            </a>
            <a
              href="/digital-hall-of-fame-buyers-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              Download the Buyer's Guide
            </a>
          </div>

          <p className="mt-10 text-foreground/70 text-base font-medium">
            Touchstone Digital Solutions:{' '}
            <span className="italic">Honoring the past. Inspiring the future.</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTA;
