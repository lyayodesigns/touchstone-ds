"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Award, Clock, TrendingUp, Users, ArrowRight, Sparkles } from 'lucide-react';

const TouchstoneDifference = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  // Simplified benefits with cleaner structure
  const benefits = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Measurable ROI",
      description: "Attract students, retain teachers, and inspire donors with technology that delivers results.",
      color: "blue"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Lasting Legacy",
      description: "Preserve traditions while celebrating future leaders in an ever-evolving digital showcase.",
      color: "violet"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Unlimited Content",
      description: "Showcase 10x more achievements than traditional displays without physical constraints.",
      color: "purple"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Always Accessible",
      description: "Your school's story is available 24/7, rain or shine, game day or graduation.",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-100 hover:border-blue-200"
      },
      violet: {
        icon: "bg-violet-500",
        text: "text-violet-600",
        border: "border-violet-100 hover:border-violet-200"
      },
      purple: {
        icon: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-100 hover:border-purple-200"
      },
      emerald: {
        icon: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-100 hover:border-emerald-200"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Minimal background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/3 via-transparent to-purple-500/3 -z-10"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/3 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/3 to-transparent rounded-full blur-3xl -z-10" />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              The Touchstone{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Difference
              </span>
            </h2>
            
            <motion.div 
              className="flex justify-center items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <Sparkles className="w-3 h-3 text-blue-500" fill="currentColor" />
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what sets our touchscreen solutions apart from traditional displays
            </p>
          </motion.div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const colorClasses = getColorClasses(benefit.color);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className={`bg-white border-2 ${colorClasses.border} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg`}>
                    {/* Icon */}
                    <div className="flex items-center mb-6">
                      <div className={`${colorClasses.icon} rounded-xl p-3 mr-4`}>
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                        {benefit.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <motion.div 
                        className={`h-1 ${colorClasses.icon} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TouchstoneDifference;
