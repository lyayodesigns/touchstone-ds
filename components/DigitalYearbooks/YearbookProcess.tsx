"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const YearbookProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Quality Workmanship",
      description: "We handle your yearbooks with professionalism and respect in our secure state of the art plant.",
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      step: "2", 
      title: "High-Resolution Scanning",
      description: "Yearbook scans that we do to each book with a special non-destructive equipment capture every detail, including gloss of the photo or ink of a signature.",
      gradient: "from-[#447df5] to-[#265bd6]"
    },
    {
      step: "3",
      title: "Digital Restoration & Enhancement",
      description: "We scan and fix photographs, eliminating dark spots and creases to get the original sharpness.",
      gradient: "from-[#9fcdfd] to-[#6ea8fe]"
    },
    {
      step: "4",
      title: "OCR Processing",
      description: "Optical Character Recognition technology that will allow you to search the text in your yearbook. Search and find a name immediately in our searchable collections of yearbooks.",
      gradient: "from-[#6ea8fe] to-[#447df5]"
    },
    {
      step: "5",
      title: "Secure Hosting and Delivery",
      description: "Your digital yearbooks are on our secure and cloud-based yearbook software platform. You can access them whenever you want at any location.",
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
