"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are digital record boards?",
      answer: "Digital record boards are cloud based records displayed on touchscreen displays that showcase athletic and academic records, milestones, and achievements in a modern, searchable, and interactive format. Because records are digital, updates happen in seconds, there are no data limits, and virtually anything can be displayed."
    },
    {
      question: "How are records updated?",
      answer: "Records can be updated instantly from any device. Authorized staff can log in, make changes, and see them reflected immediately on the displays."
    },
    {
      question: "What Is the Implementation Timeline?",
      answer: "Implementation typically takes a few days to two weeks, depending on system complexity and the amount of data to migrate. If you're working with a tight deadline, we'll meet it."
    },
    {
      question: "Can we transfer our old records?",
      answer: "Yes. We securely migrate your historical records into the system so nothing is lost and everything is organized and searchable."
    },
    {
      question: "What Makes Our Digital Record Boards Different?",
      answer: "Unlike traditional boards, our cloud based touchscreen displays are interactive, multimedia ready, and always up to date. They store your entire history so no records are ever lost, and updates take seconds instead of hours or weeks. It's a smarter, faster, and more complete way to manage and showcase achievements."
    },
    {
      question: "What Type of Training Do You Offer?",
      answer: "We provide full training, including system administration, team instruction, new feature demonstrations, and troubleshooting. Our easy to use interface ensures your team becomes a confident super user as quickly as possible."
    },
    {
      question: "What Is Your Customer Support Like?",
      answer: "Every customer has access to 24/7 live support — call, text, email, or FaceTime. When you need help, you'll connect with someone from our team you know and trust. We're always here when it matters most."
    },
    {
      question: "Do we need to buy new equipment?",
      answer: "No, you can use any touchscreens you prefer. However, we also offer beautiful, industry leading hardware at unbeatable prices."
    }
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Digital record boards: Everything you need to know
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
