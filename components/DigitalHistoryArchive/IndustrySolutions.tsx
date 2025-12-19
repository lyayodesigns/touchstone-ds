"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const IndustrySolutions = () => {
  const industries = [
    {
      title: "Academic Institutions and Universities",
      description: "Archive thesis, rare manuscripts, faculty publications, historical documents, and student publications. Allow access to institutional heritage by researchers the world over but with adequate access controls to sensitive materials. Fund repositories and research.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Cultural Heritage Organizations and Museums",
      description: "Digitization of collections of artifacts, artworks, historical objects and cultural material. Engage more people in virtual exhibitions, contribute to conservation by the extensive documentation, and engage wider audiences via access to your heritage collections via the internet.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Heritage and Corporate Archives",
      description: "Preserve essential business records, keep the company history, keep the company in compliance with regulatory procedures and develop the corporate heritage resources to be used by the employees, investors and the rest of the populace.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Government and Public Agencies",
      description: "Make sure that the records of the government are stored forever, facilitate the freedom of information request, adhere to the current archival standards and avail government heritage and historical information to the citizens.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Content Creators and Media Companies",
      description: "Manage large collections of digital content, make it available on license and creative reuse, enable the maintenance of proper chain of custody of valuable intellectual property, and help in content discovery in large archives.",
      gradient: "from-purple-500 to-pink-500"
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
            Solutions of All Types of Institutions
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
