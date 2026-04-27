"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a digital athletic hall of fame?",
      answer: (
        <p>
          A digital athletic hall of fame is an interactive touchscreen platform that replaces traditional plaque walls and trophy cases with searchable, multimedia profiles of every inductee, championship team, and record holder in your athletic program's history. Visitors browse by sport, era, induction class, or athlete name and explore photos, video highlights, stats, and stories.
        </p>
      )
    },
    {
      question: "How is this different from your digital trophy case or record boards?",
      answer: (
        <p>
          Our <Link href="/digital-trophy-case/" className="text-blue-600 hover:underline underline-offset-2">digital trophy case</Link> focuses on championship hardware. Our <Link href="/digital-record-boards/" className="text-blue-600 hover:underline underline-offset-2">digital record boards</Link> focus on auto-ranking individual and team records. A digital athletic hall of fame is broader; it's the master experience that ties inductees, classes, championships, and records together in one narrative.
        </p>
      )
    },
    {
      question: "How do we choose who gets inducted?",
      answer: (
        <p>
          That stays entirely with your hall of fame committee. Touchstone provides the nomination intake forms, voting workflow, and draft profile tools, but the criteria, the process, and the final decision are 100% yours.
        </p>
      )
    },
    {
      question: "Can we use it during our induction ceremony?",
      answer: (
        <p>
          Yes. The same platform powers your in-lobby touchscreen, your website, and your induction night ceremony screens. Many programs run a live class-of-2026 walkthrough during the banquet.
        </p>
      )
    },
    {
      question: "What if our records and photos are still on paper?",
      answer: (
        <p>
          We handle digitization. Our team scans, organizes, and integrates old yearbooks, newspaper clippings, programs, and photo archives into your hall of fame so you launch with a complete history, not a blank slate.
        </p>
      )
    },
    {
      question: "How much does a digital athletic hall of fame cost?",
      answer: (
        <p>
          Pricing depends on screen size, content migration scope, and the size of your inductee archive. Most athletic departments fit within a single annual budget line.{' '}
          <a
            href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website"
            target="_blank"
            rel="noopener"
            className="text-blue-600 hover:underline underline-offset-2"
          >
            Schedule a free demo
          </a>{' '}
          for a custom quote.
        </p>
      )
    },
    {
      question: "How often do we update it?",
      answer: (
        <p>
          As often as you want. New inductees, new championships, new records. Your athletic director or SID can publish updates in minutes from any browser. No vendor calls, no extra fees.
        </p>
      )
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
              Frequently asked questions
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Everything athletic directors and hall of fame committees ask before going live.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
                        <div className="text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </div>
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
