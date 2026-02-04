"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyTouchstone = () => {
  const reasons = [
    {
      title: "Proven Expertise",
      description: "Touchstone Digital Solutions has assisted hundreds of institutions to preserve and share the most valuable assets successfully since we were established. We have experience in universities, museums, cultural heritage groups, corporations and government agencies. We have a sense of the special issues of institutional archiving and the need to do it right.",
      icon: "🎓"
    },
    {
      title: "Fully Integrated Service Model",
      description: "We are not like other vendors who are only offering isolated point solutions but end-to-end services. Our team takes care of the whole process including preliminary consultation to the delivery of the project and even the preservation in the long term. You are able to work on your mission and we are able to work on the technical complexity.",
      icon: "🔄"
    },
    {
      title: "Institutional-Grade Security and Compliance",
      description: "In your archive are priceless irreplaceable materials. We treat them accordingly. Encryption, access controls, audit trails, and compliance functionality are all part of our platform, in accordance with international standards (ISO 16363 on digital repository standards, OAIS Reference Model on information preservation). Inbuilt compliance with GDPR, HIPAA and SOX.",
      icon: "🔒"
    },
    {
      title: "Cutting-Edge Technology",
      description: "We are making a constant investment in platform enhancement. Our Digital History Archive is based on the cloud-infrastructure, artificial intelligence-based discovery, and modern security measures. Your archive is enjoying the technological advantage with minimal system enhancement.",
      icon: "🚀"
    },
    {
      title: "Full-time Support and Training",
      description: "Your group does not get abandoned post-launch. We deliver extensive training, documentation, ongoing technical assistance and collection development advice. Our customer success group has a long-term success of our customers.",
      icon: "💬"
    },
    {
      title: "One of the Digital Hall of Fame Initiatives",
      description: "We have installed our Digital History Archive service as part of the Touchstone Digital Solutions Digital Hall of Fame program. This stance shows our dedication to taking the institutions to the next level in preserving and commemorating their heritage in the online era.",
      icon: "🏆"
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
              Touchstone Digital Solutions: Heritage Digitalization and Archive Management Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reason to Select Touchstone Digital Solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-6">{reason.icon}</div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyTouchstone;
