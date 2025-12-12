"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const DigitalYearbooksFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is yearbook digitization?",
      answer: "Yearbook digitization is the process of converting physical yearbooks into high-quality digital formats. We scan each page with archival-quality equipment and use OCR technology to make the content searchable."
    },
    {
      question: "How long does the digitization process take?",
      answer: "The timeline varies based on the number of yearbooks and their condition. Typically, individual yearbooks take 1-2 weeks, while large institutional collections may take 4-8 weeks. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Will my original yearbooks be damaged during scanning?",
      answer: "No. We use special non-destructive scanning equipment that safely handles your yearbooks without damaging the binding or pages. Your originals are returned to you in the same condition."
    },
    {
      question: "Can I search for specific names in the digital yearbooks?",
      answer: "Yes! We use OCR (Optical Character Recognition) technology to make all text searchable. You can instantly find names, clubs, events, and more without flipping through pages."
    },
    {
      question: "How do I access my digital yearbooks?",
      answer: "Your digital yearbooks are hosted on our secure cloud-based platform. You can access them anytime from any device with an internet connection - computer, tablet, or smartphone."
    },
    {
      question: "Can I share my digital yearbooks with others?",
      answer: "Absolutely! You can easily share individual pages or entire yearbooks with classmates, family members, and alumni through simple links. Perfect for reunions and nostalgia trips."
    },
    {
      question: "Do you digitize old yearbooks from the 1900s?",
      answer: "Yes! We specialize in handling fragile and historic yearbooks from the 1900s and later. We take extra care with these precious documents to ensure they're preserved for future generations."
    },
    {
      question: "What formats do you provide for digital yearbooks?",
      answer: "We provide high-quality PDF files and interactive online versions. The online platform includes searchability, zoom features, and easy sharing options."
    },
    {
      question: "Can schools sell digital yearbooks to alumni?",
      answer: "Yes! We provide solutions for schools to distribute and monetize digital yearbooks. Our platform makes it easy to collect payments online and provide secure access to purchasers."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer transparent pricing with options for individuals and bulk discounts for institutions. Pricing depends on the number of yearbooks, page count, and additional services needed. Contact us for a custom quote."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-purple-blue">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Everything you need to know about digital yearbook services
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
              <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              The Best Protection to Your Memories
            </h3>
            <p className="text-gray-700 mb-4">
              Your yearbook is not just a graduation book, it is an actual part of your own history. The purpose of yearbook lies in the associations it entails. Those links should not be lost in time.
            </p>
            <p className="text-gray-700 font-medium mb-6">
              Touchstone Digital Solutions gives you more than a digital version of the yearbook, it is a legacy. You are guaranteeing the answer to the question of what are yearbooks for? will never lose its meaning: it is to remember, to relate, to re-live the best days of our lives.
            </p>
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Be a part of thousands of happy clients who have left their memories with us.
            </p>
            <a 
              href="https://touchstone-ds.com/contact/" 
              className="inline-block px-8 py-4 btn-gradient hover-lift font-medium rounded-full shadow-lg"
            >
              Start Preserving Your Memories Today
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DigitalYearbooksFAQ;
