"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment & Planning",
      description: "We assess your existing records systems, determine your particular requirements, and develop an exclusive digital records board system in line with your institution.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 2,
      title: "System Setup",
      description: "Touchstone Digital Solutions does all the technical set-ups. We mount your touch screen displays, merge your current databases as well as maintain a smooth connectivity.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Data Migration",
      description: "Our team is able to safely transfer all historical records to your new online records management system. There is no loss in data, all the success is stored and systematized.",
      gradient: "from-pink-500 to-blue-500"
    },
    {
      number: 4,
      title: "Staff Training",
      description: "We offer extensive preparation of administrators, coaches, and personnel. We have a user-friendly interface, which means you have a very low learning curve - your team will be updating records in minutes.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "Have a stable system that allows you to enjoy constant updates to software, addition of new features, and efficient technical support services when you require them.",
      gradient: "from-purple-500 to-pink-500"
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
              How It Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easy Implementation Process
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>
                
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-gray-300 to-transparent my-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
