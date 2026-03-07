"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const SimpleHowItWorks = () => {
  const bulletPoints = [
    "TouchstoneFunder builds our campaign.",
    "Athletes add contacts in minutes.",
    "TouchstoneFunder sends personalized emails/texts.",
    "Community members add contributions"
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Here&apos;s How It Works!
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.ul
            className="space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-lg md:text-xl text-foreground/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-2xl leading-none mt-1">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              $8,000 Raised, Minutes Spent
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SimpleHowItWorks;
