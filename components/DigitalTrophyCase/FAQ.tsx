"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this just for sports awards?",
      answer: "Certainly not! While the platform suits athletic achievements perfectly, it is incredibly versatile. Award academic triumphs, corporate recognitions, artistic achievements, or worthy personal milestones."
    },
    {
      question: "Can I control who sees my digital trophy case?",
      answer: "Yes, absolutely. You can keep it public, password-protect it, or keep it completely private for your own records. You have full control over privacy settings and sharing permissions."
    },
    {
      question: "What if we need a physical display for the school lobby?",
      answer: "We specialize in stunning touchscreen digital trophy case installations. Reach out to us for a quote on a custom kiosk solution that integrates seamlessly with our software."
    },
    {
      question: "How does the Strava integration work?",
      answer: "After you securely connect Strava to your trophy case, you can import specific activities like races or personal records and present them as achievements in your case, complete with GPS data and performance metrics."
    },
    {
      question: "Do you provide digital trophy case ideas or templates?",
      answer: "Yes! You'll get access to our gallery of inspiration as well as various pre-built templates upon sign-up to help you start quickly. Our design team can also create custom templates for your specific needs."
    },
    {
      question: "How secure is my data?",
      answer: "Your data is stored securely in the cloud with multiple backup copies in various locations. We use enterprise-grade security measures to protect your achievements and personal information."
    },
    {
      question: "Can I embed my trophy case on my website?",
      answer: "Absolutely! You can embed your entire trophy case or individual achievements into your existing website. We provide easy-to-use embed codes that work with any website platform."
    },
    {
      question: "What multimedia formats are supported?",
      answer: "We support all major image formats (JPG, PNG, GIF), and you can embed videos directly from YouTube and Vimeo. You can also add text descriptions, statistics, and link to external content."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
      <Container className="relative z-10">
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
            Got questions? We've got answers. Here are the most common questions about our digital trophy case software.
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
      </Container>
    </section>
  );
};

export default FAQ;
