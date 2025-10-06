"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const AnatomyOfDigitalDonorWall = () => {
  const features = [
    {
      title: "Show Donors Dynamically",
      description: "Names, giving levels, and custom messages appear in beautiful animated layouts.",
      icon: "✨"
    },
    {
      title: "Show Tangible Evidence of Impact",
      description: "Videos, photo galleries, and infographics are integrated to give donors real evidence of how their donations are making a difference.",
      icon: "📊"
    },
    {
      title: "Deepen Engagement",
      description: "Permit visitors to interact with the display, filter donors based on the campaign or society, and peruse donor stories.",
      icon: "🤝"
    },
    {
      title: "Cost Prevention in the Long Run",
      description: "Never again pay $1,500 or more for re-engraving or adding another panel. Update your donor list at the moment from any computer with a web browser.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Anatomy of a Digital Donor Wall
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              More Than Just Names on a Screen.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              A Digital Donor Wall is an advanced cloud-based display system that can be used in the place of or in conjunction with the traditional wooden name wall. It is a truly effective stewardship tool, allowing you to:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
              <p className="text-lg text-gray-700 font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                  Touchstone Digital Solutions
                </span> is among America's premier digital donor wall companies, creating custom, beautiful, and intuitive solutions for mission-driven organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AnatomyOfDigitalDonorWall;
