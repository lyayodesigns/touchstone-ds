"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const TrustReassurance = () => {
  const trustStats = [
    {
      stat: "500+",
      label: "Institutions Nationwide",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      stat: "100%",
      label: "Uptime Guarantee",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      stat: "2 Hours",
      label: "Average Response Time",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      stat: "5 Stars",
      label: "Customer Satisfaction",
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  const commitments = [
    "Specialized account manager in your institution",
    "Personalized solutions to your objectives",
    "Open communication and frequent check-ins",
    "Ongoing improvement and maintenance",
    "No extra costs and hidden charges"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
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
              Relied on by Hundreds of Institutions
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustStats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                {item.stat}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Your Business Association with Touchstone Digital Solutions
              </span>
            </h3>
            
            <p className="text-gray-700 text-center mb-8 leading-relaxed">
              Our vision is to make you successful. Our team acts as your collaborator since first consultation to the continued support to make sure that your digital record boards are as impactful as possible.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">Our Commitment to You:</h4>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Risk-Free Trial:</h4>
              <p className="text-gray-700 leading-relaxed">
                Test our digital record boards within 30 days. In case you are not happy with the transformation, we would make adjustments or negotiate with you.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-100">
              <p className="text-sm text-gray-600">SOC 2 Type II Certified</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-100">
              <p className="text-sm text-gray-600">FERPA Compliant</p>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-100">
              <p className="text-sm text-gray-600">HIPAA Compliant</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustReassurance;
