"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const WhyChooseTouchstone = () => {
  const comparisonRows = [
    { feature: "Custom-Branded Platform", touchstone: "Fully customized to your organization", traditional: "Generic templates" },
    { feature: "Fundraising Strategy", touchstone: "Dedicated consultant support", traditional: "DIY guesswork" },
    { feature: "Donor Recognition", touchstone: "Integrated digital donor walls", traditional: "Static plaques and lists" },
    { feature: "Event Support", touchstone: "End-to-end event management", traditional: "Manual coordination" },
    { feature: "Online & Offline", touchstone: "Omnichannel fundraising", traditional: "Limited to one channel" },
    { feature: "Real-Time Analytics", touchstone: "Live dashboards and reporting", traditional: "Delayed or no data" },
    { feature: "Scalability", touchstone: "Grows with your organization", traditional: "Fixed capacity" },
    { feature: "24/7 Support", touchstone: "Unlimited support included", traditional: "Limited hours" }
  ];

  const additionalReasons = [
    {
      title: "Family-Owned Dedication",
      description: "We treat every project like it's our own",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "100% Custom Solutions",
      description: "No cookie-cutter approaches",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Proven Track Record",
      description: "Trusted by leading schools, universities, and nonprofits nationwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "All-Inclusive Pricing",
      description: "No hidden fees, no surprise charges",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Seamless Integrations",
      description: "Works with your existing donor database and CRM",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "ADA WCAG 2.1 Compliant",
      description: "Accessible to every supporter",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Why Touchstone Fundraising Is the Smart Choice
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Backed by Touchstone Digital Solutions&apos; Emmy-nominated design team, our platform doesn&apos;t just function well — it looks stunning.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
              <div className="px-6 py-4 font-bold text-sm md:text-base">Feature</div>
              <div className="px-6 py-4 font-bold text-sm md:text-base text-center">Touchstone Fundraising</div>
              <div className="px-6 py-4 font-bold text-sm md:text-base text-center">Traditional Fundraising</div>
            </div>
            
            {/* Table Rows */}
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} border-b border-gray-100 last:border-b-0`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="px-6 py-4 font-medium text-gray-800 text-sm md:text-base">{row.feature}</div>
                <div className="px-6 py-4 text-center text-sm md:text-base">
                  <span className="text-green-600 font-medium">&#10003;</span>
                  <span className="text-gray-600 ml-2 hidden sm:inline">{row.touchstone}</span>
                </div>
                <div className="px-6 py-4 text-center text-sm md:text-base">
                  <span className="text-red-500 font-medium">&#10007;</span>
                  <span className="text-gray-400 ml-2 hidden sm:inline">{row.traditional}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Reasons */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Additional Reasons to Partner With Touchstone
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalReasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseTouchstone;
