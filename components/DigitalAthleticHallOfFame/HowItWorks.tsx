"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Consultation",
      description: "We meet with your athletic director and hall of fame committee to map your sports, your eras, your inductees, and your goals.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      step: "2",
      title: "Design & content migration",
      description: "Our team handles the heavy lifting: designing your custom interface, scanning archival photos, transcribing old programs, and building every inductee profile so you go live with a complete hall of fame, not an empty shell.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      step: "3",
      title: "Launch & ongoing support",
      description: "We install the touchscreen, train your staff, and stay on call for life. Adding next year's induction class takes minutes, not months.",
      gradient: "from-pink-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              How it works
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            From your first conversation to launch night, we do the heavy lifting.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-200 to-pink-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
