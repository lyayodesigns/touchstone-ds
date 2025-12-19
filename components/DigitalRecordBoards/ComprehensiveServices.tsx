"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const ComprehensiveServices = () => {
  const services = [
    {
      title: "Professional Installation",
      features: [
        "Wholesale hardware installation and setup",
        "Integration and optimization of the network",
        "Display testing and calibration",
        "Secure data transfer"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Training & Onboarding",
      features: [
        "System management training of administrators",
        "There are daily operations staff training",
        "Documentation and reference documentation",
        "Continuous webinars and resources"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Ongoing Maintenance",
      features: [
        "On-call 24/7 technical support",
        "Active system surveillance",
        "Frequent updates and patches of software",
        "New releases and enhancements"
      ],
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Analytics & Reporting",
      features: [
        "Usage and interaction measurement",
        "System performance reports",
        "Insurance of data restoration and recovery",
        "Compliance documentation"
      ],
      gradient: "from-blue-500 to-purple-500"
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
              Total Service Delivery
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Support Every Step of the Way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                  {service.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
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

export default ComprehensiveServices;
