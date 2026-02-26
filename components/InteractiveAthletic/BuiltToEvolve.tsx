"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { RefreshCw, FileText, Settings, Activity, BarChart3, Star } from 'lucide-react';

const BuiltToEvolve = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  } as const;

  const supportItems = [
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-500" />,
      title: "Software updates and security maintenance",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: '#3b82f6'
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Content update assistance",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: '#8b5cf6'
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-500" />,
      title: "CMS support",
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: '#10b981'
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-500" />,
      title: "Performance monitoring",
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: '#f97316'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-violet-500" />,
      title: "Annual reporting and optimization recommendations",
      gradient: "from-violet-500/10 to-indigo-500/10",
      borderColor: '#7c3aed'
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
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span>Built to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Evolve
              </span>
            </h2>
            
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div>
                <Star className="w-3 h-3 text-blue-500" fill="currentColor" />
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Athletic programs change every season.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Our interactive environments are designed to remain current through ongoing support that includes:
            </p>
          </motion.div>
          
          {/* Support Items */}
          <motion.div className="max-w-3xl mx-auto">
            {supportItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative border-l-2 pl-4 mb-8 last:mb-0"
                variants={itemVariants}
                style={{ borderLeftColor: item.borderColor }}
              >
                {/* Dot on the timeline */}
                <div 
                  className="absolute -left-[5px] top-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.borderColor }}
                />
                
                <div className="relative">
                  <div className="flex items-start">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center">
                      {item.title}
                      <span className="inline-flex ml-2 opacity-70">
                        {item.icon}
                      </span>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom statement */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-lg md:text-xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We build long-term digital assets, not one-time installations.
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BuiltToEvolve;
