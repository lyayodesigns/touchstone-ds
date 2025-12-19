"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const ArchiveProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Evaluation and Planning",
      description: "We start by knowing what you have got. What are the materials at your disposal? What do you consider your preservation priorities? Who will be accessing the archive? It is based on this consultation that we work out a tailor-made digitization plan, schedule, and technology roadmap, in your institution.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 2,
      title: "Selection, Appraisal and Preparation",
      description: "Everything does not have to be digitized. Our professional appraisers assist in the identification of high-priority materials basing on historical importance, fragility, research importance, and institutional purpose. We keep materials in a secure way, working with fine objects in terms of preservation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Quality Control and Professional Digitization",
      description: "We scan your materials with archival-standard scanning equipment with strict quality assurance guidelines. All the scans comply with the technical requirements of both color accuracy and file format. All digitized items are checked by quality control experts in order to achieve professional results.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      number: 4,
      title: "Metadata Creation and Organization",
      description: "Metadata is provided in detail about every item by professional archivists and catalogers. This organized data renders your collection to be found, places materials into a larger context of collections, and will provide long-term access even in the face of future technological transformation.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 5,
      title: "Integration and Launch",
      description: "Your Digital History Archive is a fully functional site. Your collections can be searched, browsed and explored instantly by the user. Documentation and training also make sure that your employees are able to handle and maintain the system well.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 6,
      title: "Continuous Preservation and Optimization",
      description: "Digital preservation is not a single undertaking, but a long-term commitment. They are constantly checking the state of their system, updating security patches, migrating formats to adapt with the technology change, and keeping your expanding collection.",
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
