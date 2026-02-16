"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a Digital History Archive?",
      answer: "A Digital History Archive is a secure online platform that preserves your institution's historical materials and makes them searchable, organized, and accessible anytime. It allows your community to explore photos, trophies, yearbooks, documents, videos, and more from any device. Touchstone makes it easy to launch a professional archive that is built to last and designed to be shared."
    },
    {
      question: "What types of materials can be included in the archive?",
      answer: "Your archive can include yearbooks, photographs, trophies, awards, newspaper clippings, event programs, student publications, coaching records, championship history, artifacts, documents, maps, timelines, faculty publications, leadership history, and other institutional records. If it captures your institution's legacy, Touchstone can preserve it and make it accessible in one organized platform."
    },
    {
      question: "Why should we digitize our history instead of keeping everything physical?",
      answer: "Physical archives are vulnerable to fire, flood, theft, and natural deterioration. Digital storage also carries risk if files are not properly managed. A professionally built digital archive protects your history through secure backups, long term preservation planning, and format migration, ensuring your materials stay safe and usable for decades. Touchstone handles the entire process, so your team saves time while your history stays protected."
    },
    {
      question: "How does your archive make content easy to find?",
      answer: "Touchstone archives are built with advanced search tools, intelligent indexing, and detailed metadata. Instead of sorting through boxes or storage rooms, users can locate specific names, years, events, or documents in seconds. With Touchstone, your history becomes searchable, shareable, and instantly useful."
    },
    {
      question: "Who can access our Digital History Archive?",
      answer: "Access is fully customizable. Your institution can choose to make the archive public, private, or a mix of both. Role based permissions allow you to control what staff, alumni, students, and the public can view. Touchstone gives you full control over who sees what, while keeping your archive simple to manage."
    },
    {
      question: "Is the platform secure and compliant?",
      answer: "Yes. The Digital History Archive includes security protections such as role based access controls, audit trails, and governance tools. This helps institutions meet compliance requirements and maintain responsible handling of sensitive information. Touchstone protects your collection with enterprise level security designed for top institutional standards."
    },
    {
      question: "What is the process for digitizing our materials?",
      answer: "Our process is structured and proven: Evaluation and planning, Selection and preparation of high priority materials, Professional digitization and quality control, Metadata creation and organization, Platform integration and launch, Continuous preservation, security updates, and optimization. This approach ensures your archive is built correctly from day one and remains reliable long term. With Touchstone, you get a guided, white glove process from start to launch, with long term support built in."
    },
    {
      question: "How long does a digital archiving project take?",
      answer: "Timelines vary based on volume, material type, and project goals but typically takes 2-3 weeks. During your first consultation, we evaluate your collection and provide a clear plan, estimated timeline, and next steps based on your institution's needs. Touchstone makes it easy to get started with a free consultation and a clear roadmap tailored to your institution."
    },
    {
      question: "How does a digital archive reduce costs for our institution?",
      answer: "Digital archiving reduces the need for physical storage space, climate controlled environments, and ongoing maintenance. It also saves staff time by eliminating manual retrieval and reducing repeated questions about past records. Touchstone helps institutions reduce storage burden and staff workload while improving access and engagement."
    },
    {
      question: "Why should we choose Touchstone Digital Solutions?",
      answer: "Touchstone is trusted by institutions across the country because we combine proven experience with white glove service. We handle the heavy lifting, provide a beautifully designed platform, and support your team long term. Our goal is simple: preserve your history, protect it, and make it easy to share for generations."
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Digital History Archive FAQ
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Learn how our online preservation platform can transform the way your organization preserves, protects, and shares its invaluable heritage. Our consultation is completely free and comes with no obligation.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;
