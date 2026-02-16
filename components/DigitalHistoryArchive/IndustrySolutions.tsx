"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const IndustrySolutions = () => {
  const industries = [
    {
      title: "Academic Institutions and Universities",
      description: "Archive class pictures, yearbooks, rare manuscripts, faculty publications, historical events, student publications, and more.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Athletic programs and teams",
      description: "Digitize coaching history, team rosters, all-time statistics, all-team honors, championships, notable alumni, and more.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Companies and corporations",
      description: "Preserve and present company history, CEO messages, employee achievements, company awards, sales tracking, financial disclosures, anniversaries, and other big moments.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Museums and Places of Interest",
      description: "Digitization of collections, artifacts, artworks, historical objects, wayfinding maps, and highlights.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Hospitals and Care Centers",
      description: "Document the facilities history, leadership history, achievements, awards, biggest moments",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Towns and municipalities",
      description: "Celebrate town history with founding documents, early years, big moments, anniversaries, pictures of the decades, timelines, artifacts, and more",
      gradient: "from-pink-500 to-blue-500"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Solutions in Digital Archiving that Fit Your Industry
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solutions For All Types of Institutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-6`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${industry.gradient}`}>
                {industry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustrySolutions;
