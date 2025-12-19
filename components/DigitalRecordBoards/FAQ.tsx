"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the difference between your digital records management system and a traditional record board?",
      answer: "We have dynamic interactive and cloud-based touchscreen displays. They are also capable of multimedia, update automatically, and maintain the entire history unlike the traditional boards. You will not lose any records anymore, and the process of updating will take seconds rather than hours."
    },
    {
      question: "Is it possible to incorporate digital record boards with our systems?",
      answer: "Yes. In our enterprise records management software, we have integrated with the majority of typical platforms and databases. We will evaluate your infrastructure and develop a flawless integration plan."
    },
    {
      question: "Is our data secure?",
      answer: "Absolutely. Our encryption keys are enterprise grade and we have role-based access control as well as adherence to FERPA, HIPAA, and other regulations. The security measures that are provided to protect your records are that of big corporations and government agencies."
    },
    {
      question: "What is the time of implementation?",
      answer: "The implementation process normally requires 2-6 weeks based on the complexity of the system and the extent of data migration. Our schedule is flexible to strive to work around yours."
    },
    {
      question: "Do employees have the option of updating records remotely?",
      answer: "Yes. The cloud system we have will enable those authorized to make updates to records wherever they may be in the office, home, or even on the move through the mobile devices."
    },
    {
      question: "What type of training do you offer?",
      answer: "We provide full training such as system administration, day to day operations and troubleshooting. Our easy to use interface ensures that your team becomes productive in a short time."
    },
    {
      question: "What would we do in case we require more displays or places?",
      answer: "Such a platform is scalable, and the addition of locations is simple. Installation and configuration will be done by us to allow you to grow at your speed."
    },
    {
      question: "Do you provide after sales services?",
      answer: "Yes. Each plan has 24/7 technical support, frequent software updates, security patches and optimization recommendations."
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
