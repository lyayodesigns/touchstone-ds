"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Award, GraduationCap, Palette, Users } from 'lucide-react';

const ProvenUseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <Award className="h-6 w-6" />,
      emoji: "🏆",
      title: "Athletics Departments",
      keyword: "athletic hall of fame software, interactive trophy display",
      features: [
        "Interactive Records & Leaderboards",
        "Team Rosters + College Commitments",
        "Highlight Videos + Coaches' Bios",
        "Virtual Facility Tours"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      emoji: "🎓",
      title: "Academic & Administration",
      keyword: "school digital archives, educational touchscreen software",
      features: [
        "Digital Student Spotlights (Valedictorians, STEM stars)",
        "Curriculum Guides + Graduation Requirements",
        "Clubs/Activities Directory + Competition Archives"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      emoji: "🎭",
      title: "Theater & Arts Programs",
      keyword: "digital recognition software, interactive kiosk content",
      features: [
        "Virtual Galleries of student artwork",
        "Performance Playbills + Behind-the-Scenes Videos",
        "Costume Design Portfolios"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      emoji: "💛",
      title: "Alumni & Donor Engagement",
      keyword: "donor recognition software, alumni engagement platform",
      features: [
        "Searchable Alumni Databases (Famous grads, career milestones)",
        "Impact Stories + Named Scholarships",
        "Annual Giving Campaign Trackers"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Proven Use Cases:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Where Touchstone Shines
              </span>
            </h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Targeting High-Intent SEO Keywords with Real-World Applications
            </p>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span>{tab.emoji}</span>
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left side: Icon and title */}
              <div className="md:w-1/3 text-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full p-8 inline-flex items-center justify-center mb-4">
                  <div className="text-5xl">{tabs[activeTab].emoji}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tabs[activeTab].title}</h3>
                <p className="text-white/60 text-sm">Keywords: {tabs[activeTab].keyword}</p>
              </div>
              
              {/* Right side: Features */}
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Our {tabs[activeTab].title} software turns trophies into talking points:
                </h4>
                <ul className="space-y-4">
                  {tabs[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-white/80 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <p className="text-white/70 italic">
                      "Our {tabs[activeTab].title.toLowerCase()} touchscreen display has become the centerpiece of our campus tours."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a 
              href="#demo" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              See How It Works In Your School
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProvenUseCases;
