"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const CompetitiveAdvantages = () => {
  const advantages = [
    {
      title: "Industry Experience",
      description: "Having worked over many years in educational and organizations, we have come to know about the special needs of records management and display.",
      icon: "🎓"
    },
    {
      title: "Customizable Platform",
      description: "Each institution is unique. Our software is customized to you and your needed requirements, workflow, and branding specifications.",
      icon: "⚙️"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your data is encrypted with the most advanced industry encryption, compliance models, and security measures that are relied on by companies across the country.",
      icon: "🔒"
    },
    {
      title: "Seamless Integration",
      description: "Our system integrates with the current software, databases, and platforms that you already operate - no need to spend a lot of money on any overhaul.",
      icon: "🔗"
    },
    {
      title: "Responsive Support Team",
      description: "We have expert support representatives who reply to questions quickly and give continuous optimization proposals.",
      icon: "💬"
    },
    {
      title: "Continuous Innovation",
      description: "Frequent updates of features make sure that the effect of the digital record boards is to add the latest technology and user experience enhancements.",
      icon: "🚀"
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
              The Difference Between Touchstone Digital Solutions and Other Companies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive Advantages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-6">{advantage.icon}</div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompetitiveAdvantages;
