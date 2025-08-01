"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';

const CallToAction = () => {
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

  const contactOptions = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Email Us",
      description: "Get a detailed proposal within 24 hours",
      action: "Send Email",
      link: "/contact"
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-400" />,
      title: "Call Us",
      description: "Speak directly with a solutions expert",
      action: "Call Now",
      link: "/contact"
    },
    {
      icon: <Calendar className="h-6 w-6 text-pink-400" />,
      title: "Schedule Demo",
      description: "See our software in action via Zoom",
      action: "Book Time",
      link: "/contact"
    }
  ];

  return (
    <section id="demo" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5 -z-10"></div>
      <div className="absolute inset-0 bg-grid opacity-10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Transform Your School's Legacy?
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Let's discuss how Touchstone's touchscreen software can revolutionize your school's recognition programs.
            </p>
          </motion.div>
          
          {/* Main CTA Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left side: Image/Graphic */}
              <div className="md:w-1/2">
                <div className="relative">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden aspect-video"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-white font-medium">Watch Demo: Touchstone in Action</div>
                    </div>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl -z-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl -z-10"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  />
                </div>
              </div>
              
              {/* Right side: Form */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-6">Get Your Custom Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">School Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your school name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-1">I'm Interested In</label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="hall-of-fame">Athletic Hall of Fame</option>
                      <option value="donor-wall">Donor Recognition Wall</option>
                      <option value="academic-display">Academic Achievement Display</option>
                      <option value="multiple">Multiple Solutions</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Request Free Consultation
                  </motion.button>
                </form>
                <p className="text-sm text-foreground/60 mt-4">
                  No obligation. We'll respond within 24 hours with pricing options.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-500/20 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(50, 100, 200, 0.2)" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-4 mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-foreground/70 mb-4">{option.description}</p>
                  <a 
                    href={option.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>{option.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Join 100+ Schools Already Using Touchstone
            </h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
              From small private academies to large public school districts, our touchscreen software
              is transforming how institutions honor their legacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Sales
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
