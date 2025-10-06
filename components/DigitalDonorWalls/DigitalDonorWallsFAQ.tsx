"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalDonorWallsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can we update the donor list ourselves?",
      answer: "Absolutely! Our donor digital wall software is very intuitive and offers your team a rather simple password-protected portal for updates in real time."
    },
    {
      question: "What kind of hardware do we require?",
      answer: "Commercial large-format displays or touchscreen kiosks are what we usually use. And we can get them for you and install them in your facility as part of our turnkey service."
    },
    {
      question: "Our donors belong to different campaigns and giving levels. Can they be categorized?",
      answer: "Yes. Our system has sophisticated filtering by campaign, giving society, year, and more, making it easy for visitors to traverse."
    },
    {
      question: "Do you serve our area?",
      answer: "As a premier provider of digital donor wall USA solutions, we work with clients nationwide and can install remotely or with the help of local partners when necessary."
    },
    {
      question: "How long does the installation process take?",
      answer: "The timeline varies based on project complexity, but typically ranges from 4-8 weeks from design approval to installation. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "Can the digital donor wall integrate with our existing donor database?",
      answer: "Yes! Our system can integrate with most major donor management systems, allowing for seamless data synchronization and automated updates."
    },
    {
      question: "What ongoing maintenance is required?",
      answer: "Our digital donor walls are designed for minimal maintenance. We provide remote monitoring, software updates, and technical support. Hardware maintenance is typically limited to basic cleaning."
    },
    {
      question: "Can we display multimedia content like videos and photos?",
      answer: "Absolutely! Our digital donor walls support high-quality videos, photo galleries, infographics, and interactive content to tell compelling donor impact stories."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Any questions? We got answers. Here are the most common questions about our digital donor wall solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full absolute"></div>
                      </div>
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-4"></div>
                        <p className="text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Still Have Questions?
            </h3>
            <p className="text-foreground/80 mb-6">
              Our team of digital donor wall experts is ready to help you create the perfect recognition solution for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://touchstone-ds.com/contact/" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Our Experts
              </a>
              <a 
                href="#live-demo" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-purple-600 font-medium"
              >
                Schedule Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DigitalDonorWallsFAQ;
