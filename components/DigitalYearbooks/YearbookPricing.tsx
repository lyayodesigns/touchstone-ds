"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { User, School, Library } from 'lucide-react';

const YearbookPricing = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6ea8fe]/5 to-[#447df5]/5"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-gradient-purple-blue">
                Easy & Straightforward Yearbook Digitization Rates
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Simple, transparent pricing for individuals and discounted rates for schools and institutions digitizing yearbook collections at scale.
            </p>
            
            <div className="bg-gradient-to-r from-[#6ea8fe]/10 to-[#447df5]/10 rounded-2xl p-6 border border-[#6ea8fe]/20 mb-8">
              <h4 className="font-bold text-gray-800 mb-3">Pricing Benefits:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6ea8fe] to-[#447df5] mt-2 flex-shrink-0"></div>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#447df5] to-[#265bd6] mt-2 flex-shrink-0"></div>
                  <span>Bulk discounts for institutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9fcdfd] to-[#6ea8fe] mt-2 flex-shrink-0"></div>
                  <span>Flexible payment options</span>
                </li>
              </ul>
            </div>

          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Get Your Custom Quote</h4>
                <p className="text-gray-600 text-sm">Pricing tailored to your needs</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Individual Yearbooks", Icon: User, gradient: "from-[#6ea8fe] to-[#447df5]" },
                  { label: "School Collections", Icon: School, gradient: "from-[#447df5] to-[#265bd6]" },
                  { label: "Library Archives", Icon: Library, gradient: "from-[#9fcdfd] to-[#6ea8fe]" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gradient-to-r from-[#6ea8fe]/10 to-[#447df5]/10 rounded-xl border border-[#6ea8fe]/20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                        <item.Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://touchstone-ds.com/contact/" 
                className="inline-block px-8 py-4 btn-gradient hover-lift font-medium rounded-full shadow-lg"
              >
                View Our Pricing Plans
              </a>
            </motion.div>

            <motion.div
              className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-[#6ea8fe]/20 to-[#447df5]/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-r from-[#447df5]/20 to-[#265bd6]/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default YearbookPricing;
