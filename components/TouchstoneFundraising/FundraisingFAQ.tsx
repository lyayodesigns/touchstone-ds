"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FundraisingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of organizations does Touchstone Fundraising serve?",
      answer: "We serve schools (K\u201312 and higher education), nonprofits, churches, youth groups, PTAs, animal shelters, community organizations, and more. Whether you need fundraising software for nonprofits or a full-service fundraising platform for schools, we have a solution for you."
    },
    {
      question: "Is Touchstone Fundraising suitable for small organizations?",
      answer: "Absolutely. Our solutions scale to fit organizations of every size and budget, from a single preschool fundraising campaign to a multi-year higher education fundraising initiative."
    },
    {
      question: "Do you provide fundraising training?",
      answer: "Yes. We offer nonprofit fundraising training sessions to empower your team with the skills and knowledge to run campaigns independently."
    },
    {
      question: "Can I use the platform for online and in-person events?",
      answer: "Yes. Touchstone Fundraising supports online fundraising sites for schools and nonprofits as well as in-person fundraising activities for church, schools, and charity events."
    },
    {
      question: "How does the digital donor wall integrate with fundraising?",
      answer: "Our digital donor wall technology, a flagship product of Touchstone Digital Solutions, integrates seamlessly with your fundraising campaigns to provide real-time donor recognition \u2014 a proven tool for boosting engagement and repeat giving."
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
            Have questions about Touchstone Fundraising? We have answers.
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

export default FundraisingFAQ;
