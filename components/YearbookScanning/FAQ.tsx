"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why should schools digitize their yearbooks?",
      answer: "Digitizing yearbooks protects your school's history from wear, damage, theft, and permanent loss. Physical copies stored in libraries and archives deteriorate over time. Professional digitization preserves each volume in high resolution digital format for long term access. Digital yearbooks are searchable, shareable, and accessible to alumni and administrators at any time, especially when published through Touchstone's digital yearbook platform where centuries of history can be searched in seconds."
    },
    {
      question: "How does digitizing yearbooks help engage alumni?",
      answer: "Digitized yearbooks are a proven alumni engagement asset. Hosting your collection online can increase alumni website traffic, reinforce emotional connection, support fundraising efforts, capture updated contact information through gated access, and create structured membership opportunities. Many alumni no longer own their original copy. Providing secure access through Touchstone's platform restores connection and strengthens community ties."
    },
    {
      question: "How much does it cost to digitize yearbooks?",
      answer: "Pricing is straightforward: $39 per yearbook for larger collections, $45 per yearbook for smaller orders under 10 volumes. We combine manual and robotic scanning technology to deliver non destructive, high resolution results at competitive rates. Once complete, your digitized collection can be published directly on Touchstone's digital yearbook platform for secure access and long term hosting. Reprints are available: $125 hardcover, $95 softcover."
    },
    {
      question: "Does the company keep the rights to our digitized yearbooks?",
      answer: "No. Your school retains full ownership and control of all digitized files. You decide whether to display them publicly, restrict access to alumni, require login or membership, or monetize access through donations or fees. When hosted on Touchstone's platform, those permissions remain fully in your control."
    },
    {
      question: "How do you protect fragile yearbooks during scanning?",
      answer: "We use a white glove, non destructive scanning process designed for archival materials. Your yearbooks are carefully handled, professionally scanned without damaging bindings, and returned intact and protected. After scanning, they can be safely preserved while their digital versions are securely delivered through Touchstone's platform."
    },
    {
      question: "Are digitized yearbooks searchable?",
      answer: "Yes. Advanced OCR technology makes every page fully searchable, capturing printed text as well as text embedded within photos and scanned images. Users can search by student names, activities, clubs, keywords, and graduation years. When integrated into Touchstone's digital yearbook platform, this searchable functionality allows alumni and administrators to find specific individuals and memories instantly all in one place."
    },
    {
      question: "Can you convert yearbooks into online flipbooks?",
      answer: "Yes. We convert digitized yearbooks into interactive online flipbooks that embed directly on your website. Each flipbook includes page turn animation, zoom functionality, full text search, secure hosting options, and a custom virtual bookcase display. These interactive yearbooks are seamlessly delivered through Touchstone's digital platform to create a modern archive experience."
    },
    {
      question: "Can old yearbooks be reprinted?",
      answer: "Yes. Using high resolution digital files, we produce print on demand reprints. Schools can sell replacement copies, provide copies to alumni, or archive physical reproductions. Individuals can order personal hardcover or softcover copies, all supported by the same digital files hosted within Touchstone's system."
    },
    {
      question: "Do you offer senior headshot extraction services?",
      answer: "Yes. We extract and organize senior portraits, labeled by student name and graduation year. These structured digital headshot collections support reunion committees, alumni associations, development offices, and school marketing initiatives. When paired with Touchstone's digital yearbook platform, these assets become searchable and easy to manage."
    },
    {
      question: "Is there a minimum number of yearbooks required?",
      answer: "No minimum is required. We handle projects ranging from a single volume to multi decade collections, all of which can be centrally managed and accessed through Touchstone's platform once the digital copies are received."
    },
    {
      question: "What is your turnaround time for yearbook digitization?",
      answer: "Most projects are completed within three weeks. A limited rush option is available with one week turnaround upon request."
    },
    {
      question: "What areas do you serve?",
      answer: "Based near New York City, we provide yearbook digitization services nationwide and internationally. Schools outside the region can securely ship yearbooks to our facility, and local pickup may be available within the NY tri state area. Regardless of location, your completed digital archive is delivered through Touchstone's online yearbook platform for secure access anywhere."
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
            Got questions about yearbook scanning? Here are the most common questions about our digitization service.
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
