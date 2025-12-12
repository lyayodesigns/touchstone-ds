"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const YearbookProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Quality Workmanship",
      description: "Each yearbook is handled with care and respect in a secure production environment designed for archival materials.",
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      step: "2", 
      title: "High Resolution Scanning",
      description: "Non destructive, high resolution scanning captures every page in full detail, from photo gloss to handwritten signatures.",
      gradient: "from-[#447df5] to-[#265bd6]"
    },
    {
      step: "3",
      title: "Digital Restoration and Enhancement",
      description: "Photographs are corrected to reduce fading, shadows, and creases while preserving the original look and character.",
      gradient: "from-[#9fcdfd] to-[#6ea8fe]"
    },
    {
      step: "4",
      title: "OCR Processing",
      description: "Advanced text recognition makes names, clubs, and events fully searchable across your yearbook collection.",
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      step: "5",
      title: "Secure Hosting and Delivery",
      description: "Digitized yearbooks are hosted on a secure, cloud based platform for reliable access anytime, anywhere.",
      gradient: "from-[#447df5] to-[#265bd6]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-purple-blue">
              Our Critical Scanning of Yearbooks
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Professional digitization process that preserves every detail of your precious memories
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#6ea8fe]/30 via-[#447df5]/30 to-[#6ea8fe]/30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col relative z-10"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Step number badge */}
                  <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-base font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-base font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} min-h-[48px] flex items-center justify-center`}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {step.description}
                  </p>
                </motion.div>
                
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#6ea8fe]/40 to-[#447df5]/40"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default YearbookProcess;
