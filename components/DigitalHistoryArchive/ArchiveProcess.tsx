"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const ArchiveProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Evaluation and Planning",
      description: "We begin by understanding what you have. We catalog your materials, identify your preservation priorities, and clarify who will access the archive. From this consultation, we develop a tailored digitization plan, schedule, and technology roadmap for your institution.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 2,
      title: "Selection, Appraisal, and Preparation",
      description: "Not everything needs to be digitized. Our professional digitization team helps identify high priority materials based on historical significance, fragility, research value, and institutional goals. We handle all materials securely and work with delicate items using preservation focused practices.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Quality Control and Professional Digitization",
      description: "We scan your materials using archival standard equipment and follow strict quality assurance guidelines. Each file meets technical requirements for color accuracy and format. Our quality control experts review every digitized item to ensure professional results.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      number: 4,
      title: "Metadata Creation and Organization",
      description: "We gather and catalog metadata to optimize search across our global platform. This structured data makes your collection searchable in seconds and ensures long term access, even as technology evolves.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 5,
      title: "Integration and Launch",
      description: "Your Digital History Archive becomes a fully functional site. Users can search, browse, and explore your collections instantly. We also provide documentation and training to ensure your team can manage and maintain the system effectively.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 6,
      title: "Continuous Preservation and Optimization",
      description: "Digital preservation is not a one time effort but a long term commitment. We continuously monitor system performance, apply security updates, migrate file formats as technology evolves, and support the growth of your collection.",
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
              Transforming Physical Records into Retrievable Digital Repository
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My Digital History Archive Process: Our Time-tested Response
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>
                
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    Phase {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-gray-300 to-transparent my-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ArchiveProcess;
