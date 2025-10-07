"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up & Customize",
      description: "Create your account and select a design template. Our intuitive digital trophy case software makes setup a breeze.",
      icon: "🎨",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      step: "2", 
      title: "Add Your Awards",
      description: "Upload photos of your trophies, embed video files, write descriptions, and even link to your Strava account. Organize them into collections (for example: \"Varsity Football,\" \"2019 Season\").",
      icon: "🏆",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      step: "3",
      title: "Publish & Share",
      description: "Just one click and you're live! Share your unique link with the world and watch those congratulations roll in.",
      icon: "🚀",
      gradient: "from-pink-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              How It Works: Building Your Legacy in 3 Easy Steps
            </span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Getting started with your digital trophy case is simple and straightforward. Follow these three steps to create your lasting legacy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step number circle */}
                <div className="relative z-10 mx-auto w-20 h-20 mb-6 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
                
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-200 to-pink-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
