"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Award, GraduationCap, Palette, Users, Star, CheckCircle, Quote } from 'lucide-react';

const ProvenUseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <Award className="h-5 w-5" />,
      emoji: "🏆",
      title: "Athletics Departments",
      shortTitle: "Athletics",
      description: "Our athletic hall of fame software turns trophies into talking points:",
      gradient: "from-blue-600 to-violet-600",
      bgGradient: "from-blue-500/10 to-violet-500/10",
      features: [
        "Interactive Records & Leaderboards",
        "Team Rosters + College Commitments",
        "Highlight Videos + Coaches' Bios",
        "Virtual Facility Tours"
      ]
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      emoji: "🎓",
      title: "Academic & Administration",
      shortTitle: "Academic",
      description: "Our academic software transforms student achievements into digital showcases:",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      features: [
        "Digital Student Spotlights (Valedictorians, STEM stars)",
        "Curriculum Guides + Graduation Requirements",
        "Clubs/Activities Directory + Competition Archives"
      ]
    },
    {
      icon: <Palette className="h-5 w-5" />,
      emoji: "🎭",
      title: "Theater & Arts Programs",
      shortTitle: "Arts Programs",
      description: "Our arts program software brings creativity to the digital forefront:",
      gradient: "from-purple-600 to-blue-600",
      bgGradient: "from-purple-500/10 to-blue-500/10",
      features: [
        "Virtual Galleries of student artwork",
        "Performance Playbills + Behind-the-Scenes Videos",
        "Costume Design Portfolios"
      ]
    },
    {
      icon: <Users className="h-5 w-5" />,
      emoji: "💛",
      title: "Alumni & Donor Engagement",
      shortTitle: "Alumni & Donors",
      description: "Our alumni engagement platform connects past, present, and future:",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-500/10",
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
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-grid opacity-20 -z-10"></div>
      
      {/* Floating Particles - Fixed positions to avoid hydration mismatch */}
      {[
        { x: '8%', y: '12%', duration: 16 },
        { x: '20%', y: '18%', duration: 19 },
        { x: '35%', y: '25%', duration: 22 },
        { x: '48%', y: '10%', duration: 15 },
        { x: '62%', y: '22%', duration: 18 },
        { x: '75%', y: '15%', duration: 21 },
        { x: '88%', y: '28%', duration: 17 },
        { x: '12%', y: '55%', duration: 20 },
        { x: '25%', y: '68%', duration: 16 },
        { x: '40%', y: '75%', duration: 19 },
        { x: '55%', y: '62%', duration: 22 },
        { x: '70%', y: '70%', duration: 15 },
        { x: '82%', y: '58%', duration: 18 },
        { x: '92%', y: '72%', duration: 21 },
        { x: '15%', y: '85%', duration: 17 }
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-violet-400/30 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [`calc(${particle.y} - 30px)`, `calc(${particle.y} + 30px)`, `calc(${particle.y} - 30px)`],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Enhanced Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
          
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600">
                Where Touchstone Shines
              </span>
            </h2>
            
            <motion.div 
              className="flex justify-center items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-3 h-3 text-violet-500" fill="currentColor" />
              </motion.div>
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
       
          </motion.div>
          
          {/* Enhanced Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className={`group relative flex items-center gap-2 px-3 md:px-4 py-2.5 md:py-3 rounded-2xl transition-all duration-300 font-medium overflow-hidden ${
                  activeTab === index 
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg shadow-${tab.gradient.split(' ')[1]}/25` 
                    : 'bg-white/30 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-700/60 backdrop-blur-sm border border-white/20 dark:border-gray-600/30'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                {activeTab === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} opacity-20 blur-xl`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <span className="text-lg md:text-xl relative z-10">{tab.emoji}</span>
                <span className="text-xs md:text-sm font-bold relative z-10 hidden sm:block">{tab.title}</span>
                <span className="text-xs md:text-sm font-bold relative z-10 sm:hidden">{tab.shortTitle}</span>
                
                {/* Active indicator */}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Enhanced Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${tabs[activeTab].bgGradient} backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden`}
          >
            {/* Background accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tabs[activeTab].gradient} opacity-3 rounded-full blur-3xl -translate-y-16 translate-x-16`} />
            <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${tabs[activeTab].gradient} opacity-3 rounded-full blur-2xl translate-y-12 -translate-x-12`} />
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side: Icon and title */}
              <div className="lg:w-1/3 text-center relative z-10 flex flex-col justify-center self-stretch py-4">
                <div className="flex flex-col h-full justify-center items-center">
                  <motion.div 
                    className={`bg-gradient-to-br ${tabs[activeTab].gradient} rounded-2xl p-4 inline-flex items-center justify-center mb-3 shadow-md opacity-90 w-16 h-16 mx-auto`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="text-3xl filter drop-shadow-sm">{tabs[activeTab].emoji}</div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {tabs[activeTab].title}
                  </motion.h3>
                </div>
              </div>
              
              {/* Right side: Features */}
              <div className="lg:w-2/3 relative z-10 py-2">
                <motion.h4 
                  className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tabs[activeTab].gradient}`}>{tabs[activeTab].description}</span>
                </motion.h4>
                <ul className="space-y-3 mb-6">
                  {tabs[activeTab].features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (idx * 0.1) + 0.2 }}
                    >
                      <div className={`bg-gradient-to-r ${tabs[activeTab].gradient} rounded-full p-1 mt-1 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  className={`bg-gradient-to-br ${tabs[activeTab].bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`bg-gradient-to-r ${tabs[activeTab].gradient} rounded-full p-2 flex-shrink-0 shadow-md`}>
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 italic text-sm md:text-base leading-relaxed font-medium">
                        "Our {tabs[activeTab].title.toLowerCase()} touchscreen display has become the centerpiece of our campus tours."
                      </p>
                      <p className={`text-xs mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r ${tabs[activeTab].gradient}`}>— School Administrator</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <motion.a 
              href="#demo" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 hover:from-violet-600 hover:via-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Star className="w-4 h-4" fill="currentColor" />
              <span>See How It Works In Your School</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProvenUseCases;
