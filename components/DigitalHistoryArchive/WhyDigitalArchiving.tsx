"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyDigitalArchiving = () => {
  const benefits = [
    {
      title: "Fight Digital Obsolescence and Defend against Data Loss",
      description: "Hardcopy material can be destroyed by fire, flood, theft and natural degradation. There are also challenges of digital assets: obsolescence of file format, failure of hardware and change of technology. One of the ways that a solid digital archiving platform can solve these risks is by incorporating redundant storage systems, format conversion policies and long-term digital preservation plans. Our service provides backup systems at enterprise level having on-site and off-site backup so that the historical records of our institution are secure of all situations.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Make Instant Access and Retrieval Possible",
      description: "Manual cataloging and retrieval- Traditional archive management uses manual cataloging and physical retrieval- a process that may take weeks or even months. Our e-archive solutions are characterised with high levels of search, intelligent indexing, and extensive metadata solutions. Scientists can now find individual documents within seconds instead of days and this can significantly boost the productivity of the researcher and the efficiency of the institution.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Support Regulatory Compliance and Governance",
      description: "Lots of organizations are being run in rigorous compliance standards- GDPR, HIPAA, SOX, or industry-related laws. The Digital History Archive will be built with in-built security measures, access controls, and audit trails to assist your organization to remain within regulatory compliance. The governance systems that are fitted following the complexity of organization structure guarantee that the right document handling and retention policies are automatically implemented.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Conserve Traditions and Government",
      description: "The narrative of your organization is important. You might be a university preserving academic history, a museum preserving cultural artifacts, a corporation recording business heritage or a cultural institution preserving artistic creations, in any case heritage digitization is the solution to ensure that these invaluable resources will be available to future generations. Digital archives present points of transition between the past and the present where research, education, and community may occur.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Minimize the Costs of Physical Storage and Opera Overhead",
      description: "Hardcopy storage takes up a lot of space, climate management, specialized personnel, and maintenance. A digital preservation solution enables institutions to save a significant amount of money by cutting real estate expenses, lowering the complexity of their operations and allowing their staff to invest in more valuable endeavors, including research and curation instead of spending time on physical storage management.",
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
              The Essential Nature of Digital Preservation and Archive Management
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why Your Institution Should have Digital Archiving Services
          </p>
        </motion.div>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${benefit.gradient}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
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

export default WhyDigitalArchiving;
