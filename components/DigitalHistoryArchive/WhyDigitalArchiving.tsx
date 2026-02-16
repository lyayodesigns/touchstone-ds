"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyDigitalArchiving = () => {
  const benefits = [
    {
      title: "Combat Digital Obsolescence and Prevent Data Loss",
      description: "Physical materials face constant risks from fire, flood, theft, and natural deterioration. Digital assets also present challenges, including file format obsolescence, hardware failure, and evolving technology standards. A robust digital archiving platform addresses these risks through redundant storage systems, format migration strategies, and long term preservation planning. Our service provides enterprise level backups, both on site and off site, ensuring your institution's historical records remain secure in any circumstance.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Enable Instant Access and Retrieval",
      description: "Traditional archive management relies on manual cataloging and physical retrieval, a process that can take weeks or even months. Our digital archive solutions feature advanced search capabilities, intelligent indexing, and comprehensive metadata. Researchers and staff can locate specific documents within seconds, significantly increasing productivity and institutional efficiency.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Support Regulatory Compliance and Governance",
      description: "Many organizations operate under strict compliance requirements such as PII, HIPAA, SOX, or industry specific regulations. The Digital History Archive includes built in security measures, role based access controls, and detailed audit trails to help your institution maintain compliance. Governance systems tailored to your organizational structure ensure that document handling and retention policies are consistently applied.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Preserve Heritage and Institutional Identity",
      description: "Your organization's story matters. Whether you are a university safeguarding academic history, a museum preserving cultural artifacts, a corporation documenting business milestones, or a cultural institution protecting artistic works, digitization ensures these invaluable resources remain accessible to future generations. Digital archives connect the past with the present, supporting research, education, and community engagement.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Reduce Physical Storage Costs and Operational Overhead",
      description: "Maintaining physical archives requires significant space, climate control, specialized staffing, and ongoing maintenance. A digital preservation solution reduces real estate expenses, streamlines operations, and allows staff to focus on higher value work such as research, programming, and curation rather than managing storage.",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Why Your Institution Should Invest in Digital Archiving Services?
            </span>
          </h2>
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
