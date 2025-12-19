"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const UseCases = () => {
  const useCases = [
    {
      title: "Universities & Colleges",
      features: [
        "Display sports activities and victories",
        "Put up academic performance and awards",
        "Keep the alumni networks that have searchable profiles",
        "Impressive facilities will attract best recruits"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "High Schools",
      features: [
        "Reward the achievements of student-athletes",
        "Conserve history and traditions of schools",
        "Involve parents and community members in the events",
        "Sponsor rotation Support fundraising with sponsor rotation capabilities"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Centers/Recreation Facilities",
      features: [
        "Showcase swimming records and outcomes of the competitions",
        "Publicize the success and accomplishments of membership",
        "Swap facility details and schedule of classes",
        "Praise the community achievements"
      ],
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Corporate Offices and Organizations",
      features: [
        "Keep records of employee accomplishments",
        "Show sales achievements and team performance",
        "Market company anniversaries and trophies",
        "Make inspirational placards to the workers"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Medical and Professional Organisations",
      features: [
        "Archive qualifications and certifications",
        "Show organizational performance",
        "Have secure and compliant record systems",
        "The accreditation of support and regulatory needs"
      ],
      gradient: "from-purple-500 to-pink-500"
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
              Digital Record Boards in All Institutes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use Cases and Industry Applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${useCase.gradient}`}>
                {useCase.title}
              </h3>
              
              <ul className="space-y-3">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient} mt-2 flex-shrink-0`}></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;
