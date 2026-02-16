"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can you view yearbooks online after scanning?",
      answer: "Yes. Once your project is complete, Touchstone can help you create a secure digital library or integrate the files into your existing website so authorized users can view yearbooks online from any device. You control who can access which years and whether downloads or only on‑screen viewing are allowed. For interactive modern yearbooks, check out our <a href='/digital-yearbooks/' class='text-blue-600 hover:text-purple-600 underline font-medium transition-colors'>Digital Yearbooks</a> solution."
    },
    {
      question: "How do I look up yearbook photos in a digital archive?",
      answer: "Because your PDFs are fully searchable, users can simply type a student's name, teacher's name, team, or club into a search box and jump directly to the correct page. This dramatically improves answers to questions like \"how do I find old elementary school yearbook pictures?\" compared to manually flipping through shelves of books."
    },
    {
      question: "Can I get a yearbook reprint from the digital files?",
      answer: "High‑quality scanned pages can be used as the basis for yearbook reprints, especially when combined with professional print‑on‑demand services. Touchstone can advise on print specifications so you can confidently say \"yes\" when alumni ask for reunion gifts or replacements."
    },
    {
      question: "Are old yearbooks worth anything?",
      answer: "Printed yearbooks can have collectible monetary value, but their real worth is historical and emotional, capturing faces, names, and stories that may not exist anywhere else. Digitization protects that value so it is not lost to damage, fading, or missing volumes, while also making your content more discoverable for genealogy and local history research."
    },
    {
      question: "Why do some yearbook photos look so bad, and can scanning help?",
      answer: "Older yearbook photos may suffer from limited printing technology, poor lighting, or deterioration over time. Professional scanning and careful image processing can improve contrast and readability, and while they cannot recreate a shot that was never well lit, they often make existing images look noticeably better on screen than on paper."
    },
    {
      question: "What about \"yearbook scanning com\" and other services I see online?",
      answer: "Many users search phrases like \"yearbook scanning com\" when they want a professional scanning company that focuses on yearbooks. Touchstone Digital Solutions partners directly with Yearbook Scanning Service, a specialist provider with an A+ Better Business Bureau rating, so you get the reliability of an established scanning operation plus local, strategic support."
    },
    {
      question: "Does this service help with questions like \"what to wear for senior yearbook pictures\"?",
      answer: "Touchstone and Yearbook Scanning Service focus on digitizing existing books rather than shooting new portraits, but a digital archive makes it much easier for schools to show seniors real examples of what photographs well and what does not. Schools can point students to online samples from previous classes when sharing guidelines on what to wear for senior yearbook pictures."
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
