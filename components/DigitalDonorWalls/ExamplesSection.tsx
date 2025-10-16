"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const ExamplesSection = () => {
  const examples = [
    { title: "University Alumni Centers", description: "Interactive displays showcasing decades of generous alumni support" },
    { title: "Hospital Foundation Lobbies", description: "Inspiring displays highlighting life-saving donations and impact stories" },
    { title: "School Main Entrances", description: "Community-focused walls celebrating local business and parent support" },
    { title: "Non-Profit Event Spaces", description: "Dynamic displays perfect for galas and donor appreciation events" }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50/50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Examples List Side */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Example Categories */}
            <div className="space-y-6">
              {examples.map((example, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                      index === 0 ? 'from-blue-400 to-blue-500' :
                      index === 1 ? 'from-purple-400 to-purple-500' :
                      index === 2 ? 'from-pink-400 to-pink-500' :
                      'from-indigo-400 to-indigo-500'
                    } flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {index === 0 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      ) : index === 1 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3m-6 0h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
                        </svg>
                      ) : index === 2 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">{example.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{example.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2"
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

export default ExamplesSection;
