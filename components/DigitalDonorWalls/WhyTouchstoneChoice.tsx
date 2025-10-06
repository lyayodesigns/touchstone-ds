"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyTouchstoneChoice = () => {
  const differentiators = [
    {
      title: "Sector-Specific Expertise",
      description: "We understand the unique stewardship needs of universities, hospitals, and non-profits.",
      icon: "🎯"
    },
    {
      title: "Proven Track Record",
      description: "We have successfully deployed donor walls for organizations of all sizes across the United States.",
      icon: "📈"
    },
    {
      title: "Turn-Key Solution",
      description: "We manage the entire process from concept and design to hardware, software, installation, and training.",
      icon: "🔧"
    },
    {
      title: "Unwavering Support",
      description: "Our dedicated US-based support team is here to ensure your donor wall operates flawlessly.",
      icon: "🤝"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Why Touchstone Digital Solutions
            </span>
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            The Prime Choice Among Digital Donor Wall Companies in the USA
          </h3>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Many digital donor wall companies can give you a screen and software. But we provide a partnership. Here's what sets us apart:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Let's Build Something Extraordinary Together
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Schedule your free, no-obligation consultation and demo today. We will give you live examples and a concept for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://touchstone-ds.com/contact/" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </a>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  <strong>Email:</strong> info@touchstonedigital.com<br />
                  <strong>Phone:</strong> (555) 123-TOUCH<br />
                  <em>Serving organizations across the USA</em>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyTouchstoneChoice;
