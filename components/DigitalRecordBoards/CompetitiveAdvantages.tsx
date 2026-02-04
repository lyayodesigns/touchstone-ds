"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Award, Heart, Settings, Shield, Headset, Rocket } from 'lucide-react';

const CompetitiveAdvantages = () => {
  const advantages = [
    {
      title: "Industry Experience",
      description: "Having worked over many years in educational and athletic spaces, we are experts in records management and proper display layouts.",
      icon: Award
    },
    {
      title: "Family Owned & Operated",
      description: "With Touchstone, you're more than a number — you're part of the family. As former Division I athletes, we know the pride behind every record and bring that same dedication to your school's legacy.",
      icon: Heart
    },
    {
      title: "Customizable Platform",
      description: "Every institution is unique. Our software is tailored to your specific needs, branding, and historical records — ensuring a perfect fit for your school.",
      icon: Settings
    },
    {
      title: "Enterprise-Grade Security",
      description: "Your data is encrypted with the most advanced industry encryption, compliance models, and security measures that are relied on by companies across the country.",
      icon: Shield
    },
    {
      title: "24/7 Support Team",
      description: "When you have a problem, you call, text, email, or facetime someone you trust, instantly. We are always there for you and treat you like family.",
      icon: Headset
    },
    {
      title: "Continuous Innovation",
      description: "Frequent updates of features make sure that the effect of the digital record boards is to add the latest technology and user experience enhancements.",
      icon: Rocket
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
              The Difference Between Touchstone Digital Solutions and Other Companies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why Schools Choose Us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompetitiveAdvantages;
