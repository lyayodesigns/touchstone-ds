"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const InvestmentAndExamples = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Investment Section */}
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

            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              An investment in a digital donor wall is an investment in future fundraising success.
            </p>
            
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Your Custom Quote
            </a>
          </motion.div>

          {/* Examples Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Stunning Examples
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Digital Donor Wall Gallery
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              A picture is worth a thousand words; a demo is worth a thousand pictures. Let us show you how our technology is redefining donor recognition across organizations in the USA.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our portfolio features a variety of digital donor wall examples, from modern and sleek designs for modern art museums to large-scale, multimodal interactive installations for major research universities.
            </p>

            {/* Example Categories */}
            <div className="space-y-4 mb-8">
              {[
                { title: "University Alumni Centers", description: "Interactive displays showcasing decades of generous alumni support" },
                { title: "Hospital Foundation Lobbies", description: "Inspiring displays highlighting life-saving donations and impact stories" },
                { title: "School Main Entrances", description: "Community-focused walls celebrating local business and parent support" },
                { title: "Non-Profit Event Spaces", description: "Dynamic displays perfect for galas and donor appreciation events" }
              ].map((example, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-gray-800 mb-2">{example.title}</h4>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </motion.div>
              ))}
            </div>
            
            <a 
              href="#gallery" 
              className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-purple-600 font-medium"
            >
              Browse Our Gallery of Examples
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentAndExamples;
