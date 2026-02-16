"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Consultation, Inventory & Project Plan",
      description: "Touchstone starts with a discovery call to understand your goals, whether you want to view yearbooks online, support reunion planning, or build a long‑term digital archive. Your team compiles an inventory of available yearbooks by school and year, and identifies any volumes that are rare, damaged, or especially valuable. Touchstone then prepares a phased project plan and cost estimate, aligning the scope with Yearbook Scanning Service's flat‑rate pricing model so you understand exactly what digitizing each yearbook will cost.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      step: "2",
      title: "Secure Shipping & Intake",
      description: "Your yearbooks are carefully packed using recommended archival shipping practices and sent to Yearbook Scanning Service's facility, where they are logged and checked in on arrival. Each shipment is tracked so you always know where your collection is in the process.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      step: "3",
      title: "Non‑Destructive Scanning With Advanced Equipment",
      description: "At the production facility, each yearbook is scanned using specialized bound‑book equipment and automation designed to capture clear images while protecting the original binding. This robotics‑driven workflow is how Yearbook Scanning Service has been able to scan thousands of yearbooks and archival volumes for institutions across North America while maintaining consistent quality.",
      gradient: "from-pink-400 to-red-500"
    },
    {
      step: "4",
      title: "Image Cleanup, OCR & Searchability",
      description: "After scanning, pages are reviewed for alignment, completeness, and clarity, with adjustments as needed to keep portraits, captions, and small text readable even in older books. Optical character recognition (OCR) is then applied so each digital yearbook becomes a searchable PDF, enabling instant lookups for names and keywords instead of manual page‑turning. This transforms \"how to look up yearbook photos\" from a frustrating question into a one‑click search experience.",
      gradient: "from-red-400 to-orange-500"
    },
    {
      step: "5",
      title: "File Delivery & Integration",
      description: "Once complete, your institution receives searchable PDF yearbooks via secure download links, optional JPEG image sets of each page for flexible reuse, and project documentation listing which volumes were scanned and delivered. Touchstone then helps you decide how to make these files available, whether hosting on your own website, restricting access to alumni, or building a public‑facing community yearbook archive.",
      gradient: "from-orange-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              How Our Yearbook Scanning Process Works
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            From initial consultation to final delivery, every step is designed for quality, security, and ease.
          </p>
        </motion.div>

        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/Yearbook%20Scanning/yearbook-scanning-2.avif" 
              alt="Yearbook scanning process"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connection line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 md:ml-20"
                >
                  {/* Step number circle */}
                  <div className="hidden md:flex absolute left-0 top-8 w-16 h-16 items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Mobile step number */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg mr-4`}>
                      <span className="text-lg font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <h3 className={`hidden md:block text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-200 to-pink-200"></div>
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

export default HowItWorks;
