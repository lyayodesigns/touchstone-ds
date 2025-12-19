"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const KeyFeaturesBenefits = () => {
  const benefits = [
    {
      title: "Improved Interaction and Contemporary Design",
      description: "Make unforgettable memories in tours, recruitment activities and open houses. Projects presented on digital records have a high-tech and professional impression that appeals to students, families, and stakeholders. Innovation and excellence is directly expressed by your facility.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Time & Cost Savings",
      points: [
        "Hundreds of hours saved each year in administrative staff - No longer any handwritten updates or installations",
        "Minimise printing and material expenses - Use no vinyl, magnetic strips and replacement nameplates",
        "Automate working processes - Automation of record entry and organizing",
        "Single system operates multifunction - Use shows records and announcement, event schedule, and sponsor messages"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Preservation of History",
      description: "Electronic record boards will ensure that your institution does not become a forgotten thing. In comparison to the physical boards in which the previous records are lost, our electronic records management system will have a complete and searchable record of all accomplishments. Decades later, graduates will be able to review their data.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      title: "Compliance & Security",
      description: "Our system has enterprise level security features:",
      points: [
        "Role-based access controls are in line with compliance requirements",
        "Encrypted storage complies with FERPA, HIPAA, and others",
        "Detailed audit logs of all changes and access",
        "Your data is secured by frequent security updates"
      ],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Multimedia Integration",
      description: "Go beyond text-based records:",
      points: [
        "Add athlete images and teams logos",
        "Show video clips of record performances",
        "Integrate dynamic social media streams",
        "Link to external systems and databases"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Scalability & Flexibility",
      description: "Our records management service grows with you, regardless of whether you are managing records of a single facility or tens. Add destinations, people or screens without further complications.",
      gradient: "from-pink-500 to-blue-500"
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
              Why Touchstone Digital Solutions is Special
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Major Characteristics and Advantages
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${benefit.gradient}`}>
                {benefit.title}
              </h3>
              
              {benefit.description && (
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
              )}
              
              {benefit.points && (
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient} mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyFeaturesBenefits;
