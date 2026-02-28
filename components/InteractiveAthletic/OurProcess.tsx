"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Search, Palette, Code, Monitor, Rocket, Headphones } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      icon: <Search className="h-5 w-5" />,
      number: "1",
      title: "Discovery & Spatial Planning",
      description: "We assess the space, traffic flow, and technical requirements.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/8 to-cyan-500/8"
    },
    {
      icon: <Palette className="h-5 w-5" />,
      number: "2",
      title: "Experience & Interface Design",
      description: "We design intuitive interaction models tailored to athletic storytelling.",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-500/8 to-purple-500/8"
    },
    {
      icon: <Code className="h-5 w-5" />,
      number: "3",
      title: "Software Development",
      description: "We build and optimize custom interactive applications.",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/8 to-pink-500/8"
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      number: "4",
      title: "LED & Hardware Integration",
      description: "In partnership with Formetco, we coordinate LED systems, installation, and commissioning.",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/8 to-teal-500/8"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      number: "5",
      title: "Launch & Training",
      description: "We deploy, test, and train staff on content management.",
      gradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-500/8 to-orange-500/8"
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      number: "6",
      title: "Ongoing Support",
      description: "We provide annual service and content support to keep the experience current.",
      gradient: "from-rose-600 to-red-600",
      bgGradient: "from-rose-500/8 to-red-500/8"
    }
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      
      {/* Static decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Process
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From concept to completion in 6 steps
            </motion.p>
          </div>
          
          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.gradient} opacity-5 rounded-full blur-2xl -translate-y-10 translate-x-10`} />
                  
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className={`bg-gradient-to-br ${step.gradient} rounded-xl p-3 shadow-md`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-white">{step.icon}</div>
                    </motion.div>
                    <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-80`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10 dark:border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 bg-gradient-to-r ${step.gradient} rounded-full`} style={{ width: `${16.67 * (index + 1)}%` }} />
                      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full flex-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default OurProcess;
