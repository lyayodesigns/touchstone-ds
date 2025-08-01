"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Ban, Award, Globe, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const WhyChooseTouchstone = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const benefits = [
    {
      icon: <Ban className="h-8 w-8 text-blue-500" />,
      title: "Consolidate Physical Space",
      description: "Replace bulky trophies, plaques, and wall displays with sleek, all-in-one interactive kiosks. Free up hallway and classroom real estate.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
      iconBg: "bg-blue-500/10"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Professionalize Your Image",
      description: "Impress prospective families and visitors with state-of-the-art digital showcases that scream innovation.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
      iconBg: "bg-purple-500/10"
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      title: "Connect Globally",
      description: "Let alumni in Tokyo or donors in Toronto access your hall of fame, records, or donor wall from any device.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "from-emerald-500/30 to-teal-500/30",
      iconBg: "bg-emerald-500/10"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Boost Engagement",
      description: "Celebrate championships, academic wins, and student art in vivid multimedia—no more dusty glass cases!",
      gradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-500/30 to-red-500/30",
      iconBg: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 -z-10"></div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-sm text-blue-700 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="font-semibold">Why Choose Touchstone?</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Transform Your School's</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Recognition Experience
              </span>
            </h2>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tired of outdated displays, cluttered hallways, and forgotten achievements? 
              <span className="font-semibold text-gray-800"> Touchstone's cutting-edge touchscreen software</span> solves these pain points:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Border gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]`}>
                  <div className="w-full h-full bg-white/90 rounded-2xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`${benefit.iconBg} backdrop-blur-sm rounded-2xl p-4 border border-gray-200 group-hover:border-transparent transition-all duration-300`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {benefit.icon}
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
                        {benefit.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <motion.div 
                        className="flex items-center mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="text-sm font-semibold mr-2">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 max-w-4xl mx-auto mb-4 leading-tight">
                "We transform static halls of fame into memorable interactive experiences that never graduate."
              </blockquote>
              
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold">Touchstone Digital Solutions</span>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseTouchstone;
