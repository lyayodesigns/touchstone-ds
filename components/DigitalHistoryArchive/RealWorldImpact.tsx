"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const RealWorldImpact = () => {
  const impacts = [
    {
      title: "Deeper Historical Appreciation",
      description: "When centuries of history become searchable in seconds, every generation gains a deeper understanding and love for its story. Decades of content become accessible like never before, bringing smiles along the way.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Build It and More Will Come",
      description: "When institutions launch a public digital archive, new historical material quickly follows. Community members across generations begin sharing photos, stories, and records, expanding the collection in meaningful ways.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Strengthened Community Support",
      description: "When schools go digital, they often see an overwhelmingly positive response from their community. Public archives attract more engagement, raise awareness, inspire greater support, and strengthen connections across generations.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Lower Physical Storage Costs",
      description: "By going digital, institutions reduce costly, time consuming, and cluttered storage solutions. Time, money, and space can be redirected to higher priorities, while your history receives a meaningful upgrade.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Peace of Mind",
      description: "School leaders can rest easier knowing their community's most precious history is protected from loss, decay, or natural disaster. On our cloud based platform, your archive remains secure, continues to grow, and evolves alongside new technology.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Do More With Less",
      description: "School leaders spend less time, money, space, and energy managing their history. When everything is neatly organized and accessible, questions decrease, frustrations fade, and everyone benefits.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Inspiring the Future",
      description: "When achievements are proudly displayed, current community members feel inspired to reach new heights. Leaders often report more motivated students and even stronger performance across the board.",
      gradient: "from-blue-500 to-purple-500"
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
              Digital Preservation: Changing Institutions
            </span>
          </h2>
          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 max-w-2xl mx-auto">
            Real-World Impact
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          <motion.p
            className="text-lg text-gray-700 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Those organizations that have utilized our Digital History Archive have found outstanding results:
          </motion.p>

          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${impact.gradient} flex items-center justify-center flex-shrink-0`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${impact.gradient}`}>
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RealWorldImpact;
