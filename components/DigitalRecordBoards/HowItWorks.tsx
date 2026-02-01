"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { ClipboardCheck, Settings, Database, GraduationCap, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment and Planning",
      description: "We evaluate your current records system, identify your unique needs, and design a custom digital records solution tailored to your school.",
      icon: ClipboardCheck,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 2,
      title: "System Setup",
      description: "Touchstone handles all technical installation, from mounting touchscreen displays to integrating your existing databases for smooth, real-time connectivity.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Data Migration",
      description: "Our team securely transfers all historical records into the new system, ensuring nothing is lost and every achievement is organized and preserved.",
      icon: Database,
      gradient: "from-pink-500 to-blue-500"
    },
    {
      number: 4,
      title: "Staff Training",
      description: "We provide hands-on training for administrators, coaches, and staff. With our intuitive interface, your team will be updating records in no time.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "Enjoy peace of mind with regular software updates, new feature rollouts, and responsive technical support whenever you need it.",
      icon: Headphones,
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
            A Simple, Seamless Setup
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
                  <step.icon className="w-8 h-8 text-white" />
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
