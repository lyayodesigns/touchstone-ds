"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const InvestmentSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Understanding Your Investment
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Digital Donor Wall Cost
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              "What is the digital donor wall cost?" is a common question, answerable only according to what you need. Considerations are how large or how many displays, how complex is the design, and so forth, including custom software integrations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Touchstone Digital Solutions, we maintain a transparent policy concerning our prices. We provide solutions that bestow extraordinary value upon the consumer, hence converting a stakeholder's one-time expense into a lifelong stewardship asset.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 mb-8">
              <h4 className="font-bold text-gray-800 mb-3">Investment Benefits:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                  <span>One-time investment vs. recurring engraving costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0"></div>
                  <span>Powerful fundraising tool for future campaigns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Enhanced donor engagement and retention</span>
                </li>
              </ul>
            </div>

          </motion.div>

          {/* Animation Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Investment Calculator Animation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Investment Calculator</h4>
                <p className="text-gray-600 text-sm">See your ROI over time</p>
              </div>
              
              {/* Animated Chart */}
              <div className="space-y-4">
                {[
                  { label: "Traditional Engraving", value: 85, color: "from-red-400 to-red-500" },
                  { label: "Digital Solution", value: 45, color: "from-blue-400 to-purple-500" },
                  { label: "Long-term Savings", value: 95, color: "from-green-400 to-green-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="text-gray-600">${item.value}K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                💰
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                📈
              </motion.div>
            </div>

            {/* Quote and CTA */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                An investment in a digital donor wall is an investment in future fundraising success.
              </p>
              
              <a 
                href="https://touchstone-ds.com/contact/" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Custom Quote
              </a>
            </motion.div>

            {/* Background decorative elements */}
            <motion.div
              className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentSection;
