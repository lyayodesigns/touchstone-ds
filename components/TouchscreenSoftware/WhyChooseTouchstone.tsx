"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '../ui/container';
import { Ban, Award, Globe, TrendingUp, Sparkles, Star } from 'lucide-react';

const WhyChooseTouchstone = () => {
  // Animation variants that ensure content is visible immediately but still animate in
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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
      description: "Celebrate championships, academic wins, and student art in vivid multimedia, no more dusty glass cases!",
      gradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-500/30 to-red-500/30",
      iconBg: "bg-orange-500/10"
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
          className="max-w-7xl mx-auto"
          initial="visible"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              <span>Transform Your School's </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Recognition Experience
              </span>
            </h2>
            
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div>
                <Star className="w-3 h-3 text-blue-500" fill="currentColor" />
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tired of outdated displays, cluttered hallways, and forgotten achievements? 
              <span className="font-semibold text-gray-800"> Touchstone's cutting-edge touchscreen software</span> solves these pain points:
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-full mx-auto">
            {/* Left side - List content */}
            <motion.div className="md:w-1/2 order-2 md:order-1">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative border-l-2 pl-4 mb-8 last:mb-0"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    borderLeftColor: index === 0 ? '#3b82f6' : 
                                   index === 1 ? '#8b5cf6' : 
                                   index === 2 ? '#10b981' : 
                                   '#f97316'
                  }}
                >
                  {/* Dot on the timeline */}
                  <div 
                    className="absolute -left-[5px] top-0 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: index === 0 ? '#3b82f6' : 
                                     index === 1 ? '#8b5cf6' : 
                                     index === 2 ? '#10b981' : 
                                     '#f97316'
                    }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-start">
                      <h3 className="text-lg font-bold text-gray-800 flex items-center">
                        {benefit.title}
                        <span className="inline-flex ml-2 opacity-70">
                          {benefit.icon}
                        </span>
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mt-1 mb-2 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div 
              className="md:w-1/2 relative order-1 md:order-2"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="sticky top-24">
                <div className="relative">
                  {/* Image placeholder with border and shadow */}
                  <div className="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/touchscreen%20software/Touchstone%20Rendering%20-%20Touch%20Stone%20-%20Stand.webp"
                        alt="Touchstone interactive kiosk stand rendering"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Static decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <div className="h-[1px] w-12 bg-gradient-to-r from-blue-400 to-transparent"></div>
                <Sparkles className="w-5 h-5 text-blue-500 mx-3" />
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
              </div>
              
              <blockquote className="text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto mb-2 leading-relaxed italic">
                "We transform static halls of fame into memorable interactive experiences that never graduate."
              </blockquote>
              
              <div className="flex items-center justify-center text-blue-600">
                <span className="text-sm font-semibold">Gardner Sr. 
                Touchstone Digital Solutions</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseTouchstone;
