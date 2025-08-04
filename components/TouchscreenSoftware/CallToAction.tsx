"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { ArrowRight, Download, Play, DollarSign, BarChart } from 'lucide-react';

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  // Animation variants for consistent motion effects
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  } as const;

  // Floating particles with fixed positions to avoid hydration mismatch
  const particles = [
    { id: 0, size: 'w-20 h-20', x: '15%', y: '20%', duration: 18 },
    { id: 1, size: 'w-32 h-32', x: '85%', y: '15%', duration: 22 },
    { id: 2, size: 'w-24 h-24', x: '70%', y: '65%', duration: 15 },
    { id: 3, size: 'w-16 h-16', x: '25%', y: '75%', duration: 20 },
  ];
  
  // CTA features
  const ctaFeatures = [
    {
      icon: <Play className="h-6 w-6 text-white" />,
      title: "See Touchstone in Action",
      description: "Watch how Westfield High replaced 200+ plaques with one stunning touchscreen kiosk.",
      buttonText: "FREE TOUR: SEE SOFTWARE DEMO",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
      borderGradient: "from-blue-500/20 to-indigo-500/20",
      link: "https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=website",
      openInNewTab: true
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Get a Custom Quote",
      description: "Discover affordable plans for schools of all sizes.",
      buttonText: "GET CUSTOM QUOTE",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      borderGradient: "from-violet-500/20 to-purple-500/20",
      link: "http://localhost:3000/contact/"
    },
    {
      icon: <Download className="h-6 w-6 text-white" />,
      title: "Download Our ROI Guide",
      description: "\"10 Ways Digital Displays Boost Enrollment & Donations.\"",
      buttonText: "DOWNLOAD ROI GUIDE",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/20 to-pink-500/20",
      link: "/roi-guide"
    }
  ];

  return (
    <section id="demo" className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div 
          key={particle.id}
          className={`absolute ${particle.size} rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl`}
          style={{ left: particle.x, top: particle.y }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [`calc(${particle.y} - 10px)`, `calc(${particle.y} + 10px)`, `calc(${particle.y} - 10px)`],
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      ))}
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Transform Your School?
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Claim Your Free Demo Today!
            </p>
          </motion.div>
          
          {/* Main CTA Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-lg mb-12"
          >
            <div className="flex flex-col space-y-8">
              {/* Feature points with icons */}
              <div className="space-y-6">
                {/* Point 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-3 rounded-xl">
                    <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 font-medium">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">👉 See Touchstone in Action:</span> Watch how Westfield High replaced 200+ plaques with one stunning touchscreen kiosk.
                    </p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-3 rounded-xl">
                    <DollarSign className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 font-medium">
                      <span className="text-violet-600 dark:text-violet-400 font-semibold">👉 Get a Custom Quote:</span> Discover affordable plans for schools of all sizes.
                    </p>
                  </div>
                </div>
                
                {/* Point 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl">
                    <Download className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white/90 font-medium">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">👉 Download Our ROI Guide:</span> "10 Ways Digital Displays Boost Enrollment & Donations."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent"></div>
              
              {/* CTA Buttons */}
              <div className="grid md:grid-cols-3 gap-4">
                {ctaFeatures.map((feature, index) => (
                  <motion.a
                    key={index}
                    href={feature.link}
                    target={feature.openInNewTab ? "_blank" : undefined}
                    rel={feature.openInNewTab ? "noopener noreferrer" : undefined}
                    className={`bg-gradient-to-r ${feature.gradient} text-white text-center py-4 px-6 rounded-xl shadow-lg flex items-center justify-center font-bold text-sm tracking-wide`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.buttonText}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Feature Cards */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ctaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-3xl`}></div>
                  
                  <div className="flex items-start mb-4">
                    <motion.div 
                      className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-3 shadow-md mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </motion.div>
                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${feature.gradient}`}>
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-white/80 pl-12 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className={`absolute inset-0 border-2 border-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.borderGradient} bg-clip-border`}></div>
                </div>
              </motion.div>
            ))}
          </div> */}
          
         
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
