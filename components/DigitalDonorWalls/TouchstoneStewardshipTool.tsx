"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TouchstoneStewardshipTool = () => {
  const benefits = [
    {
      number: "1",
      title: "Captivating Audience Inspiration",
      description: "Beyond being just a list. Employ high-end visuals, smooth animation, and thoughtful storytelling to enact an emotional response. Your electronic digital donor wall display will be a focus for which attention is drawn toward, sparking even more giving.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      number: "2",
      title: "Easy Updates In Real-Time",
      description: "Our proprietary digital donor wall software is designed for ease of use. The donor services team can change donor information, add new names, begin new campaigns, and modify content from the secure online dashboard instantaneously, requiring no technical know-how.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      number: "3",
      title: "Flexibility and Scalability That Have No Comparison",
      description: "Whether it's 100 donors or 100,000, our systems will fit your scaling. Celebrate different giving societies; highlight specific campaigns; create content that supports a given event of conversation-all in one screen.",
      gradient: "from-pink-400 to-red-500"
    },
    {
      number: "4",
      title: "Huge ROI",
      description: "Initial digital donor wall costs are an investment while foregoing recurring costs for physical plaques. Yet, it serves as a powerful arm, showing donors-in-waiting what vibrant communities and tangible impacts they can join.",
      gradient: "from-red-400 to-blue-500"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              The Touchstone Donor Digital Wall: The Ultimate Stewardship Tool
            </span>
          </h2>
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
          <a 
            href="https://touchstone-ds.com/contact/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            See How It Works for Your Organization
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default TouchstoneStewardshipTool;
