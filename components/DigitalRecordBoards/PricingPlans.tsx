"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "One location and basic functionality",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Professional Plan",
      description: "Multiple places with high-level analytics",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Plan",
      description: "Unlimited locations, including white-label customization",
      gradient: "from-pink-500 to-blue-500"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Pricing & Plans
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Affordable Solutions to all Budgets
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our pricing on digital record boards is open and can be scaled. Touchstone Digital Solutions will provide flexible packages regardless of whether you are a single installation or the one that is enterprise-wide:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                {plan.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-6">
            Software updates, security patches and customer support are part of all plans.
          </p>
          
          <a 
            href="/contact/" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Custom Pricing
          </a>
          
          <p className="text-gray-600 mt-4 text-sm">
            Our sales team can help you with a custom quote depending on the needs of your institution.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingPlans;
